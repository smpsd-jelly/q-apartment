import { Injectable } from '@angular/core';
import { NotiData } from '../interfaces/noti';
import { Socket } from 'ngx-socket-io';
import { ResponseData } from '../interfaces/response-data';

@Injectable({
  providedIn: 'root'
})
export class NotiService {


  constructor(private socket: Socket) { }

  async emitAllNotiData() {
    return this.socket.emit('get_data_noti');
  }

  async onAllNotiData() {
    return await this.socket.fromEvent<ResponseData>('return_data_noti');
  }

  async updateReadNoti(noti_id:number){
    await this.socket.emit('update_read_noti',(noti_id))
    return await this.socket.fromOneTimeEvent<ResponseData>('status_update_read_noti')
  }

}
