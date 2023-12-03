import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from 'src/app/shared/interfaces/room';
import { User } from 'src/app/shared/interfaces/user';
import { RoomService } from 'src/app/shared/services/room.service';
import { SwalService } from 'src/app/shared/services/swal.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  title = "เพิ่มผู้พักอาศัย";
  roomData: Room[] = [];
  registerForm: User = {} as User;

  constructor(private router: Router, private swalSrv: SwalService, private roomSrv: RoomService, private userSrv: UserService) {

  }

  async ngOnInit() {
    await this.onData();
  }

  async ngAfterViewInit() {
    await this.emitData();
    this.initialForm();
  }

  async emitData() {
    await this.roomSrv.emitRoomData();
  }

  async onData() {
    const result = await this.roomSrv.onRoomData();
    this.roomData = result.msg;
  }

  initialForm() {
    this.registerForm.username = "";
    this.registerForm.password = "";
    this.registerForm.password2 = "";
    this.registerForm.phone_num = "";
  }

  confirmBtn() {
    if (this.registerForm.username === "" || this.registerForm.password === "" || this.registerForm.password2 === "" || this.registerForm.phone_num === "" || !this.registerForm.room_id) {
      this.swalSrv.warningAlert({ text: "กรุณากรอกข้อมูลให้ครบถ้วน" })
    } else if (this.registerForm.password != this.registerForm.password2) {
      this.swalSrv.warningAlert({ text: "รหัสผ่านสองครั้งไม่ตรงกัน กรุณาตรวจสอบอีกครั้ง" })
    }
    else {
      this.register();
      this.swalSrv.successAlert({ title: "Success", text: "ทำการลงทะเบียนเสร็จสิ้น" });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  }

  register() {
    this.userSrv.register(this.registerForm);
  }
}
