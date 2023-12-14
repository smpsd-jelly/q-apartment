import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ResponseData } from '../interfaces/response-data';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private socket:Socket) { }

  async emitRoomData(){
    return this.socket.emit('get_room_data');
  }

  async onRoomData(){
    return await this.socket.fromOneTimeEvent<ResponseData>('room_data');
  }

  async emitAllRoomData(){
    return this.socket.emit('get_all_room_data');
  }

  async onAllRoomData(){
    return await this.socket.fromOneTimeEvent<ResponseData>('all_room_data');
  }
}
