import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private socket:Socket) { }

  async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) )
  }

  async onTrigger(){
    return this.socket.fromEvent('event_trigger');
  }

  getToday() {
    return new Date().toISOString().split('T')[0]
  }

  padTo2Digits(num: number) {
    return num.toString().padStart(2, '0')
  }

  formatDate(date: Date) {
    return [
      date.getFullYear(),
      this.padTo2Digits(date.getMonth() + 1),
      this.padTo2Digits(date.getDate())
    ].join('-')
  }

  formatTime(time: Date) {
    return [
      this.padTo2Digits(time.getHours()),
      this.padTo2Digits(time.getMinutes()),
    ].join(':')
  }

  formatTimeWithSecond(time: Date) {
    return [
      this.padTo2Digits(time.getHours()),
      this.padTo2Digits(time.getMinutes()),
      this.padTo2Digits(time.getSeconds()),
    ].join(':')
  }

}
