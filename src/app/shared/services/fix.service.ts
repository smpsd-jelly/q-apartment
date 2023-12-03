import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ResponseData } from '../interfaces/response-data';
import { FixData } from '../interfaces/fix';

@Injectable({
  providedIn: 'root'
})
export class FixService {

  constructor(private socket:Socket) { }

  async emitAllFixData(){
    return this.socket.emit('get_all_fix_data');
  }

  async onAllFixData(){
    return await this.socket.fromEvent<ResponseData>('all_fix_data');
  }

  async emitFixData(user_id:number,room_id:number){
    return this.socket.emit('get_fix_data',(user_id),(room_id));
  }

  async onFixData(){
    return await this.socket.fromEvent<ResponseData>('fix_data');
  }

  async insertFixData(data:FixData){
    
    this.socket.emit('req_insert_fix_data',(data));
  
    const result = await this.socket.fromOneTimeEvent<ResponseData>('res_insert_fix_data')
    console.log(result.msg)
  }



  async updateFixData(data:FixData){
    
    this.socket.emit('req_update_fix_data',(data));
  
    const result = await this.socket.fromOneTimeEvent<ResponseData>('res_update_fix_data')
    console.log(result.msg)
  }

}
