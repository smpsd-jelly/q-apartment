import { Component } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/interfaces/user';
import { NotiData } from '../shared/interfaces/noti';
import { NotiService } from '../shared/services/noti.service';
import { CommonService } from '../shared/services/common.service';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent {
  opened = false;
  userInfo!: User;
  notiInfo!: NotiData[]

  constructor(private route:Router,private userSrv: UserService, private notiSrv: NotiService,private CommonSrv:CommonService) {
    this.userInfo = userSrv.getUserData();
    this.notiInfo = [{} as NotiData]
    this.notiInfo = []
    this.onTrigger()
    this.onData()

  }

  clickToLogout(){
    this.userSrv.logout();
  }
 

  async ngOnInit() {
    await this.emitData();
  }

  async ngAfterViewInit() {
    await this.emitData();
  }

  async onTrigger(){
    const trigger = await this.CommonSrv.onTrigger()
    trigger.subscribe(async () => {
      await this.notiSrv.emitAllNotiData();
    })
  }

  async emitData() {
    return await this.notiSrv.emitAllNotiData();
  }

  async onData(){
    const data = await this.notiSrv.onAllNotiData();
    data.subscribe((items) => {
      if(items.status !== 200){
        this.notiInfo = [{} as NotiData]
        this.notiInfo = []
        return
      }
      this.notiInfo = items.msg;
      console.log(this.notiInfo)
    })
  }

  async updateRead(noti_id:number){
    this.notiSrv.updateReadNoti(noti_id).then((response) => {
      if(response.status !== 200){
        console.log('ไม่ผ่านจ้าาา')
        console.log(response.msg)
        return
      }
    })
  }

  countNoti(){
    return this.notiInfo.filter(x => x.read == false).length
  }

  routerLink(){
    this.route.navigate(['/admin/payment-page'])
  }
}
