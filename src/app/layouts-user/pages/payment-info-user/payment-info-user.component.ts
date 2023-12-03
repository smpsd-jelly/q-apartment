import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Bills } from 'src/app/shared/interfaces/bills';
import { BillsService } from 'src/app/shared/services/bills.service';
import { SwalService } from 'src/app/shared/services/swal.service';

@Component({
  selector: 'app-payment-info-user',
  templateUrl: './payment-info-user.component.html',
  styleUrls: ['./payment-info-user.component.css']
})
export class PaymentInfoUserComponent {
  @ViewChild('fileInput') fileInput!: ElementRef
  title = 'ค่าใช้จ่าย';
  selectedFile!: File;
  billsData!: Bills[];

  constructor(private router: Router, private swalSrv: SwalService, private bills: BillsService) {
  }

  clickToPaymentDetail() {
    this.router.navigate(['/user/payment-user']);
  }

  uploadFile() {
    if (!this.selectFile) {
      this.swalSrv.errorAlert({ text: "ไม่มีไฟล์" });
      return
      // swalsrv
    }
    const reader = new FileReader()
    reader.onload = async (event: any) => {
      const base64 = event.target.result.split(',')[1]
      //  console.log(base64);
      const response = await this.bills.uploadFile(base64, this.selectedFile.name);
      if (!response || response.status != 200) {
        return
        // อัพโหลดไฟล์ไม่สำเร็จ
      }
      console.log(response);
      this.swalSrv.successAlert({ text: "บันทึกรูปภาพสำเร็จ" })

    }
    reader.readAsDataURL(this.selectedFile)
  }

  selectFile(event: any) {
    console.log(event.target.files);
    const file: File = event.target.files[0];
    if (!file.type.startsWith('image')) {
      console.log('not image');
      this.fileInput.nativeElement.value = '';
      this.selectedFile = {} as File;
      this.swalSrv.errorAlert({ text: "ไฟล์รูปภาพเท่านั้น" });
      return
    }
    this.selectedFile = file;


  }

  confirmBtn() {
    this.swalSrv.confirmAlert({ text: "ยืนยันแจ้งจ่ายค่าใช้จ่ายใช่หรือไม่?" }).then((result) => {
      if (result.isConfirmed) {
        this.swalSrv.successAlert({ text: "บันทึกหลักฐานการจ่ายเสร็จสิ้น" })
      }
    })
  }
}
