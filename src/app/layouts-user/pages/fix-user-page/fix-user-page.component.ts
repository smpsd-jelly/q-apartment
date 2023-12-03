import { Component } from '@angular/core';
import { SwalService } from 'src/app/shared/services/swal.service';
import { Router } from '@angular/router';
import { FixData } from 'src/app/shared/interfaces/fix';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';
import { FixService } from 'src/app/shared/services/fix.service';

@Component({
  selector: 'app-fix-user-page',
  templateUrl: './fix-user-page.component.html',
  styleUrls: ['./fix-user-page.component.css']
})
export class FixUserPageComponent {
title = 'แจ้งซ่อมแซม';

fixForm: FixData = {} as FixData;

userData!: User

constructor(private router: Router, private swalSrv: SwalService, private userSrv: UserService, private fixSrv: FixService) {
  this.userData = this.userSrv.getUserData();
  this.initialForm();
}

async confirmBtn() {
  console.log(this.fixForm);
  const check = this.CheckInput();
  if(!check){
    return
    // check ว่าใส่ descrpition or sub_phone
  }
  await this.swalSrv.confirmAlert({ text: "ต้องการทำการแจ้งซ่อมแซมใช่หรือไม่" }).then((result) => {
    if(result.isConfirmed){
      this.fixSrv.insertFixData(this.fixForm);
      this.initialForm();
      this.swalSrv.successAlert({text:"เพิ่มข้อมูลแจ้งซ่อมแซมเสร็จสิ้น"})
    }
  })
}

CheckInput(): boolean{
  if(!this.fixForm.area){
    this.swalSrv.warningAlert({text:"กรุณากรอกข้อมูลที่มีสัญลักษณ์ * ให้ครบถ้วน"})
    return false
    // ใส่เงื่อนไขให้หมด
  }
  return true;
}

initialForm() {
  this.fixForm.user_id = this.userData.user_id;
  this.fixForm.area = "";
  this.fixForm.description = "";
  this.fixForm.sub_phone = "";
  this.fixForm.room_id = this.userData.room_id;
}
}
