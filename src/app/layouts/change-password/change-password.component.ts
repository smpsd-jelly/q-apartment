import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from 'src/app/shared/interfaces/room';
import { User } from 'src/app/shared/interfaces/user';
import { RoomService } from 'src/app/shared/services/room.service';
import { SwalService } from 'src/app/shared/services/swal.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  roomData: Room[] = [];
  registerForm: User = {} as User;
  userData!: User

  constructor(private router: Router, private swalSrv: SwalService, private roomSrv: RoomService, private userSrv: UserService) {
    this.userData = this.userSrv.getUserData();
  }

  async ngOnInit() {
  }

  async ngAfterViewInit() {
    this.initialForm();
  }

  async updatePasswordData() {
    this.registerForm.user_id = this.userData.user_id;
    await this.userSrv.updatePasswordData(this.registerForm)
    await this.swalSrv.warningAlert({ text: "เข้าสู่ระบบใหม่อีกครั้ง" })
    window.localStorage.clear()
    this.router.navigate(['/login']);

  }

  async onData() {
    const result = await this.roomSrv.onRoomData();
    this.roomData = result.msg;
  }

  initialForm() {
    this.registerForm.password = "";
    this.registerForm.password2 = "";
  }

  confirmBtn() {
    if (!this.registerForm.password || !this.registerForm.password2 ) {
      this.swalSrv.warningAlert({ text: "กรุณากรอกข้อมูลให้ครบถ้วน" })
    } else if (this.registerForm.password != this.registerForm.password2) {
      this.swalSrv.warningAlert({ text: "รหัสผ่านสองครั้งไม่ตรงกัน กรุณาตรวจสอบอีกครั้ง" })
    }
    else {
      this.updatePasswordData();
    }
  }
}
