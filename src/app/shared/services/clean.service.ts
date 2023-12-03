import { Injectable } from '@angular/core';
import { ResponseData } from '../interfaces/response-data';
import { Socket } from 'ngx-socket-io';
import { CleanData, CleanHistory } from '../interfaces/clean';

@Injectable({
  providedIn: 'root'
})
export class CleanService {

  constructor(private socket:Socket) { }

  async emitAllCleanData(){
    return this.socket.emit('get_all_clean_data');
  }

  async onAllCleanData(){
    return await this.socket.fromEvent<ResponseData>('all_clean_data');
  }

  async emitCleanData(user_id:number,room_id:number){
    return this.socket.emit('get_clean_data',(user_id),(room_id));
  }

  async onCleanData(){
    return await this.socket.fromEvent<ResponseData>('clean_data');
  }

  async insertCleanData(data:CleanData){
    
    this.socket.emit('req_insert_clean_data',(data));
  
    const result = await this.socket.fromOneTimeEvent<ResponseData>('res_insert_clean_data')
    console.log(result.msg)
  }

  async updateCleanData(data:CleanHistory){
    
    this.socket.emit('req_update_clean_data',(data));
  
    const result = await this.socket.fromOneTimeEvent<ResponseData>('res_update_clean_data')
    console.log(result.msg)
  }


}
