import { Component } from '@angular/core';
import { SwalService } from 'src/app/shared/services/swal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-electricity-meter',
  templateUrl: './electricity-meter.component.html',
  styleUrls: ['./electricity-meter.component.css']
})
export class ElectricityMeterComponent {
  title = 'บันทึกเลขมิเตอร์'

  constructor(private swalSrv: SwalService) {
  }

  confirmBtn() {
    this.swalSrv.successAlert({ title: "Success", text: "เพิ่มข้อมูลเลขมิเตอร์เสร็จสิ้น" });
    setTimeout(()=>{
      window.location.reload;
    }, 1700);  
  }
}
