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
      if (!result.msg.admin) {
        this.swalSrv.successAlert({ title: "Success", text: "กำลังเข้าสู่ระบบ" });
        setTimeout(() => {
          this.router.navigate(['/user/fix-user']);
        }, 2000);
        return
      }
      this.swalSrv.successAlert({ title: "Success", text: "กำลังเข้าสู่ระบบแอดมิน" });
      setTimeout(() => {
        this.router.navigate(['/admin/home']);
      }, 2000);
    }
  }

  getUserData() {
    const data = window.localStorage.getItem('userData')
    if (!data) {
      return {} as User;
    }
    return JSON.parse(data)
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
