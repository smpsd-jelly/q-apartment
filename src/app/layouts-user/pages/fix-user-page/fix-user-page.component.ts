import { Component } from '@angular/core';
import { SwalService } from 'src/app/shared/services/swal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fix-user-page',
  templateUrl: './fix-user-page.component.html',
  styleUrls: ['./fix-user-page.component.css']
})
export class FixUserPageComponent {
title = 'แจ้งซ่อมแซม';

constructor(private router: Router, private swalSrv: SwalService) {
}

confirmBtn() {
  this.swalSrv.successAlert({ title: "Success", text: "บันทึกข้อมูลการแจ้งซ่อมแซมเสร็จสิ้น" });
  setTimeout(()=>{
    window.location.reload;
  }, 1700);  
}
}
