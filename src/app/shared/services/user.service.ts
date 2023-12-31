import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { User } from '../interfaces/user';
import { ResponseData } from '../interfaces/response-data';
import { Router } from '@angular/router';
import { SwalService } from './swal.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private socket: Socket, private router: Router, private swalSrv: SwalService) { }


  async register(data: User) {

    this.socket.emit('req_register', (data));

    const result = await this.socket.fromOneTimeEvent<ResponseData>('res_register')
    console.log(result.msg)
    // if(result)
  }

  async login(data: User) {
    this.socket.emit('req_login', (data));

    const result = await this.socket.fromOneTimeEvent<ResponseData>('res_login')


    console.log(result.msg)

    if (result.status === 200) {
      window.localStorage.setItem('userData', JSON.stringify(result.msg));
      console.log(result.msg.first_login);
      if (!result.msg.admin && !result.msg.first_login) {
        this.swalSrv.successAlert({ title: "Success", text: "กำลังเข้าสู่ระบบ" });
        setTimeout(() => {
          this.router.navigate(['/change-pass']);
        }, 2000);
        return
      }
      else if (!result.msg.admin && result.msg.first_login) {
        this.swalSrv.successAlert({ title: "Success", text: "กำลังเข้าสู่ระบบ" });
        setTimeout(() => {
          this.router.navigate(['/welcome-user']);
        }, 2000);
        return
      }
      else if (result.msg.admin) {
        this.swalSrv.successAlert({ title: "Success", text: "กำลังเข้าสู่ระบบแอดมิน" });
        setTimeout(() => {
          this.router.navigate(['/admin/home']);
          this.swalSrv.loadingAlert({ timer: 600 });
        }, 2000);
        return
      }

      // this.swalSrv.successAlert({ title: "Success", text: "กำลังเข้าสู่ระบบแอดมิน" });
      // setTimeout(() => {
      //   this.router.navigate(['/admin/home']);
      //   this.swalSrv.loadingAlert({ timer: 600 });
      // }, 2000);

    } else {
      this.swalSrv.warningAlert({ text: "Username หรือ Password ไม่ถูกต้อง โปรดลองอีกครั้ง" });

    }
  }

  getUserData() {
    const data = window.localStorage.getItem('userData')
    if (!data) {
      return {} as User;
    }
    return JSON.parse(data)
  }

  checkUserData() {
    const data = window.localStorage.getItem('userData')
    if (!data) {
      return false;
    }
    return JSON.parse(data)
  }

  async updatePasswordData(data:User) {

    this.socket.emit('update_password_data', (data));
    const result = await this.socket.fromOneTimeEvent<ResponseData>('res_password_data')
    console.log(result.msg)
  }

  async emitAllUserData(){
    return this.socket.emit('get_all_user_data');
  }

  async onAllUserData(){
    return await this.socket.fromEvent<ResponseData>('all_user_data');
  }

  logout() {
    this.swalSrv.confirmAlert({ text: "ต้องการออกจากระบบใช่หรือไม่" }).then((result) => {
      if (result.isConfirmed) {
        window.localStorage.clear();
        this.router.navigate(['/login']);
      }
    })
  }
}
