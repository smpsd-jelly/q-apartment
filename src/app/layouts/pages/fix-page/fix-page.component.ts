import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FixHistory } from 'src/app/shared/interfaces/fix';
import { User } from 'src/app/shared/interfaces/user';
import { FixService } from 'src/app/shared/services/fix.service';
import { SwalService } from 'src/app/shared/services/swal.service';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-fix-page',
  templateUrl: './fix-page.component.html',
  styleUrls: ['./fix-page.component.css']
})
export class FixPageComponent {
  title = "ข้อมูลการแจ้งซ่อมแซม";
  page = 1;
  pageSize = 30;
  fixData!: FixHistory[];
  _fixData!: FixHistory[];
  userData!: User
  collectionSize = 0;
  status: number = 0;
  room = "";

  constructor(private router: Router, private swalSrv: SwalService, private fixSrv: FixService, private userSrv: UserService) {
    // this.chagnePageFix();
    this.userData = this.userSrv.getUserData();
  }

  chagnePageFix() {
    this.fixData = this._fixData.map((fixData, i) => ({ id: i + 1, ...fixData })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize,
    );
  }

  async ngOnInit() {
    await this.onData();
  }

  async ngAfterViewInit() {
    await this.emitData();
  }

  async emitData() {
    console.log();
    await this.fixSrv.emitAllFixData();
  }

  async onData() {
    const result = await this.fixSrv.onAllFixData();
    result.subscribe((data) => {
      this._fixData = data.msg;
      this.collectionSize = this._fixData.length;
      this.chagnePageFix();
    });
  }


  async updateState(data:FixHistory){
    console.log(data);
    console.log(data.state_id);
    this.swalSrv.confirmAlert({text:"ต้องการอัพเดทสถานะใช่หรือไม่"}).then(async( result) =>{
      if(result.isConfirmed){
        data.state_id++;
        console.log(data.state_id);
        this.swalSrv.successAlert({text:"อัพเดทสถานะเสร็จสิ้น"});
        await this.fixSrv.updateFixData(data);
        setTimeout(() =>{
          window.location.reload();
        },1000);
      }
    })
  }

  filterBuilding1() {
    Object.assign(this.fixData, this._fixData)
    this.fixData = this.fixData.filter((x) => {
      return x.building == 1;
    })
  }

  filterBuilding2() {
    Object.assign(this.fixData, this._fixData)
    this.fixData = this.fixData.filter((x) => {
      return x.building == 2;
    })
  }

  filterBuilding3() {
    Object.assign(this.fixData, this._fixData)
    this.fixData = this.fixData.filter((x) => {
      return x.building == 3;
    })
  }

  clearFilterBuilding() {
    Object.assign(this.fixData, this._fixData)
  }

  selectStatus() {
    Object.assign(this.fixData, this._fixData)
    if (this.status == 0) {
      return
    }
    this.fixData = this.fixData.filter((x) => {
      return x.state_id == this.status;
    })
  }

  searchRoom() {
    Object.assign(this.fixData, this._fixData)
    if (this.room == "") {
      return
    }
    this.fixData = this.fixData.filter((x) => {
      return x.room_num.includes(this.room) ;
    })
  }

}
