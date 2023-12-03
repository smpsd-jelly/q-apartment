import { Component } from '@angular/core';
import { SwalService } from 'src/app/shared/services/swal.service';
import { Router } from '@angular/router';
import { BillsService } from 'src/app/shared/services/bills.service';
import { Bills } from 'src/app/shared/interfaces/bills';

@Component({
  selector: 'app-electricity-meter',
  templateUrl: './electricity-meter.component.html',
  styleUrls: ['./electricity-meter.component.css']
})
export class ElectricityMeterComponent {
  title = 'บันทึกเลขมิเตอร์'
  month_year:any;

  constructor(private router: Router,private swalSrv: SwalService, private billsrv: BillsService) {
  }

  async test() {
    await this.billsrv.emitTestData(new Date (this.month_year),3).then((data) =>{console.log(data)}) 
  }

  confirmBtn() {
    this.swalSrv.successAlert({ title: "Success", text: "เพิ่มข้อมูลเลขมิเตอร์เสร็จสิ้น" });
    setTimeout(() => {
      window.location.reload;
    }, 1700);
  }

  backToAllBills(){
    this.router.navigate(['/admin/all-meter']);
  }
}
