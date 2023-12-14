import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ResponseData } from '../interfaces/response-data';
import { Slip } from '../interfaces/slip';

@Injectable({
  providedIn: 'root'
})
export class SlipService {

  constructor(private socket:Socket) { }

  
  async emitAllSlipData(){
    return this.socket.emit('get_all_slip_data');
  }

  async onAllSlipData(){
    return await this.socket.fromEvent<ResponseData>('all_slip_data');
  }

  async emitSlipData(user_id:number,room_id:number){
    return this.socket.emit('get_all_slip_data',(user_id),(room_id));
  }

  async onSlipData(){
    return await this.socket.fromEvent<ResponseData>('slip_data');
  }

  async insertSlipData(data:Slip){
    
    this.socket.emit('req_insert_slip_data',(data));
  
    const result = await this.socket.fromOneTimeEvent<ResponseData>('res_insert_slip_data')
    console.log(result.msg)
  }

  
  async updateSlipData(data: Slip) {

    this.socket.emit('req_update_slip_data', (data));

    const result = await this.socket.fromOneTimeEvent<ResponseData>('res_update_slip_data')
    console.log(result.msg)
  }


}
