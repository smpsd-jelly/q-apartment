import { Component } from '@angular/core';
import { SwalService } from 'src/app/shared/services/swal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clean-user',
  templateUrl: './clean-user.component.html',
  styleUrls: ['./clean-user.component.css']
})
export class CleanUserComponent {
title = 'แจ้งทำความสะอาด';

constructor(private router: Router, private swalSrv: SwalService) {
}

confirmBtn() {
  this.swalSrv.successAlert({ title: "Success", text: "บันทึกข้อมูลการแจ้งทำความสะอาดเสร็จสิ้น" });
  setTimeout(()=>{
    window.location.reload;
  }, 1700);  
}
}
