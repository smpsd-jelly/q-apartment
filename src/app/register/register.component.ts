import { Component } from '@angular/core';
import { SwalService } from '../shared/services/swal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = "";
  password = "";
  password2 = "";
  tel = "";
  room = "";

  constructor(private router: Router, private swalSrv: SwalService) {
  }

  confirmBtn() {
    if (this.username === "" || this.password === "" || this.password2 === "" || this.tel === "" || this.room === "") {
      this.swalSrv.warningAlert({ text: "กรุณากรอกข้อมูลให้ครบถ้วน"})
    } else if(this.password != this.password2){
      this.swalSrv.warningAlert({ text: "รหัสผ่านสองครั้งไม่ตรงกัน กรุณาตรวจสอบอีกครั้ง"})
    }
    else {
      this.swalSrv.successAlert({ title: "Success", text: "ทำการลงทะเบียนเสร็จสิ้น" });
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);
    }


  }
}

