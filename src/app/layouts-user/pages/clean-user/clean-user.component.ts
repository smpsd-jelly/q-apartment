import { Component } from '@angular/core';
import { SwalService } from 'src/app/shared/services/swal.service';
import { Router } from '@angular/router';
import { CleanData } from 'src/app/shared/interfaces/clean';
import { UserService } from 'src/app/shared/services/user.service';
import { CleanService } from 'src/app/shared/services/clean.service';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-clean-user',
  templateUrl: './clean-user.component.html',
  styleUrls: ['./clean-user.component.css']
})
export class CleanUserComponent {
  title = 'แจ้งทำความสะอาด';

  cleanForm: CleanData = {} as CleanData;

  userData!: User

  constructor(private router: Router, private swalSrv: SwalService, private userSrv: UserService, private cleanSrv: CleanService) {
    this.userData = this.userSrv.getUserData();
    this.initialForm();
  }

  async confirmBtn() {
    console.log(this.cleanForm);
    const check = this.CheckInput();
    if(!check){
      return
      // check ว่าใส่ descrpition or sub_phone
    }
    await this.swalSrv.confirmAlert({ text: "ต้องการทำการแจ้งทำความสะอาดใช่หรือไม่" }).then((result) => {
      if(result.isConfirmed){
        this.cleanSrv.insertCleanData(this.cleanForm);
        this.initialForm();
        this.swalSrv.successAlert({text:"เพิ่มข้อมูลแจ้งทำความสะอาดเสร็จสิ้น"})
      }
    })
  }

  CheckInput(): boolean{
    if(!this.cleanForm.description || !this.cleanForm.sub_phone){
      return false
      // ใส่เงื่อนไขให้หมด
    }
    return true;
  }

  initialForm() {
    this.cleanForm.user_id = this.userData.user_id;
    this.cleanForm.description = "";
    this.cleanForm.sub_phone = "";
  }


}
