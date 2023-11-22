import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CleanHistory } from 'src/app/shared/interfaces/clean';
import { User } from 'src/app/shared/interfaces/user';
import { CleanService } from 'src/app/shared/services/clean.service';
import { SwalService } from 'src/app/shared/services/swal.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-clean-page',
  templateUrl: './clean-page.component.html',
  styleUrls: ['./clean-page.component.css']
})
export class CleanPageComponent {
  title = "ข้อมูลการแจ้งทำความสะอาด";
  // allCleanInfo: clean[] = CLEANINFO;
  page = 1;
  pageSize = 30;

  cleanData!: CleanHistory[];
  _cleanData!: CleanHistory[];
  collectionSize = 0;
  status: number = 0;
  room = "";
  userData!: User

  constructor(private router: Router, private swalSrv: SwalService, private userSrv: UserService, private cleanSrv: CleanService) {
    this.userData = this.userSrv.getUserData();
  }

  async ngOnInit() {
    await this.onData();
  }

  async ngAfterViewInit() {
    await this.emitData();
  }

  async emitData() {
    await this.cleanSrv.emitAllCleanData();
  }

  async onData() {
    const result = await this.cleanSrv.onAllCleanData();
    result.subscribe((data) => {
      this._cleanData = data.msg;
      this.collectionSize = this._cleanData.length;
      this.chagnePageFix();
    });
  }

  async updateState(data: CleanHistory) {
    console.log(data);
    console.log(data.state_id);
    this.swalSrv.confirmAlert({ text: "ต้องการอัพเดทสถานะใช่หรือไม่" }).then(async (result) => {
      if (result.isConfirmed) {
        data.state_id++;
        console.log(data.state_id);
        this.swalSrv.successAlert({text:"อัพเดทสถานะเสร็จสิ้น"});
        await this.cleanSrv.updateCleanData(data);
        setTimeout(() =>{
          window.location.reload();
        },1000);
      }
    })
  }

  chagnePageFix() {
    this.cleanData = this._cleanData.map((cleanData, i) => ({ id: i + 1, ...cleanData })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize,
    );
  }

  filterBuilding1() {
    Object.assign(this.cleanData, this._cleanData)
    this.cleanData = this.cleanData.filter((x) => {
      return x.building == 1;
    })
  }

  filterBuilding2() {
    Object.assign(this.cleanData, this._cleanData)
    this.cleanData = this.cleanData.filter((x) => {
      return x.building == 2;
    })
  }

  filterBuilding3() {
    Object.assign(this.cleanData, this._cleanData)
    this.cleanData = this.cleanData.filter((x) => {
      return x.building == 3;
    })
  }

  clearFilterBuilding() {
    Object.assign(this.cleanData, this._cleanData)
  }

  selectStatus() {
    Object.assign(this.cleanData, this._cleanData)
    if (this.status == 0) {
      return
    }
    this.cleanData = this.cleanData.filter((x) => {
      return x.state_id == this.status;
    })
  }

  searchRoom() {
    Object.assign(this.cleanData, this._cleanData)
    if (this.room == "") {
      return
    }
    this.cleanData = this.cleanData.filter((x) => {
      return x.room_num.includes(this.room) ;
    })
  }


}
