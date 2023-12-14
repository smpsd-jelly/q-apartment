import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bills } from 'src/app/shared/interfaces/bills';
import { Slip } from 'src/app/shared/interfaces/slip';
import { User } from 'src/app/shared/interfaces/user';
import { BillsService } from 'src/app/shared/services/bills.service';
import { SlipService } from 'src/app/shared/services/slip.service';
import { SwalService } from 'src/app/shared/services/swal.service';
import { UserService } from 'src/app/shared/services/user.service';

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
  bill!: Bills;
  userData!: User

  slipForm: Slip = {} as Slip;
  slipData!: Slip;

  slipSuccess: any;
  bill_id: any;
  monthYear: any;
  // bills_state_id: any;

  constructor(private router: Router, private swalSrv: SwalService, private bills: BillsService, private userSrv: UserService,
    private slipSrv: SlipService, private route: ActivatedRoute) {
    this.userData = this.userSrv.getUserData();
    this.route.params.subscribe((param) => {
      if (param['index'] && param['month_year']) {
        console.log(param['index'])
        console.log(param['month_year'])
        this.bill_id = param['index'];
        this.monthYear = param['month_year']
      }
    });
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
      this.slipSuccess = response.msg;
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

  initialForm() {
    // this.slipForm.date = "";
    // this.slipForm.slip_time = "";
    this.slipForm.img_url = this.slipSuccess;
    this.slipForm.bills_id = this.bill_id;
    this.slipForm.user_id = this.userData.user_id;
    this.slipForm.room_id = this.userData.room_id;
    // this.slipForm.bills_state_id = this.bills_state_id++;
  }

  async confirmBtn() {
    this.initialForm();
    console.log(this.slipForm);
    console.log("test img " + this.slipSuccess)
    console.log("test bill id " + this.bill_id)
    const check = this.CheckInput();
    if (!check) {
      return
      // check ว่าใส่ descrpition or sub_phone
    }
    await this.swalSrv.confirmAlert({ text: "ยืนยันแจ้งจ่ายใช่หรือไม่?" }).then((result) => {
      if (result.isConfirmed) {
        this.slipSrv.insertSlipData(this.slipForm);
        // this.bills_state_id++;
        // console.log("bill state " + this.bills_state_id);
        // this.slipSrv.updateSlipData(this.slipData);
        this.swalSrv.successAlert({ text: "แจ้งจ่ายเสร็จสิ้น" })
        // this.router.navigate(['/user/payment-user']);
      }
    })
  }

  async updateState(data:any){
    console.log(data);
    // console.log(data.bills_state_id);
    this.swalSrv.confirmAlert({text:"ต้องการอัพเดทสถานะใช่หรือไม่"}).then(async( result) =>{
      if(result.isConfirmed){
        data++;
        console.log(data);
        this.swalSrv.successAlert({text:"อัพเดทสถานะเสร็จสิ้น"});
        await this.slipSrv.insertSlipData(data);
        setTimeout(() =>{
          window.location.reload();
        },1000);
      }
    })
  }


  CheckInput(): boolean {
    // if(!this.slipForm){
    //   this.swalSrv.warningAlert({text:"กรุณากรอกข้อมูลที่มีสัญลักษณ์ * ให้ครบถ้วน"})
    //   return false
    //    ใส่เงื่อนไขให้หมด
    // }
    return true;
  }
}
