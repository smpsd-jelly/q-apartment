import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SwalService } from '../shared/services/swal.service';
import { Router } from '@angular/router';
import { RoomService } from '../shared/services/room.service';
import { UserService } from '../shared/services/user.service';
import { Room } from '../shared/interfaces/room';
import { User } from '../shared/interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {

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

  initialForm(){
    this.registerForm.username = "";
    this.registerForm.password = "";
    this.registerForm.password2 = "";
    this.registerForm.phone_num = "";
  }

  confirmBtn() {
    if (this.registerForm.username === "" || this.registerForm.password === "" || this.registerForm.password2 === "" || this.registerForm.phone_num === "" || !this.registerForm.room_id ) {
      this.swalSrv.warningAlert({ text: "กรุณากรอกข้อมูลให้ครบถ้วน" })
    } else if (this.registerForm.password != this.registerForm.password2) {
      this.swalSrv.warningAlert({ text: "รหัสผ่านสองครั้งไม่ตรงกัน กรุณาตรวจสอบอีกครั้ง" })
    }
    else {
      this.register();
      this.swalSrv.successAlert({ title: "Success", text: "ทำการลงทะเบียนเสร็จสิ้น" });
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);
    }
  }

register(){
  this.userSrv.register(this.registerForm);
}
}

