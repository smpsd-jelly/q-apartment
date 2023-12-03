import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bills } from 'src/app/shared/interfaces/bills';
import { BillsService } from 'src/app/shared/services/bills.service';
import { SwalService } from 'src/app/shared/services/swal.service';

@Component({
  selector: 'app-all-electricity-meter',
  templateUrl: './all-electricity-meter.component.html',
  styleUrls: ['./all-electricity-meter.component.css']
})
export class AllElectricityMeterComponent {
title = 'รายการบิล'
page = 1;
  pageSize = 30;
  billsData!: Bills[];
  _billsData!: Bills[];
  collectionSize = 0;
  month: any;
  status: number = 0;
  room = "";
  
  constructor(private router: Router, private swalSrv: SwalService, private billsrv:BillsService) {
  }

  chagnePageFix() {
    this.billsData = this._billsData.map((billsData, i) => ({ id: i + 1, ...billsData })).slice(
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
    await this.billsrv.emitAllBillsData();
  }

  async onData() {
    const result = await this.billsrv.onAllBillsData();
    result.subscribe((data) => {
      this._billsData = data.msg;
      this.collectionSize = this._billsData.length;
      this.chagnePageFix();
    });
  }
  calculateWater(cost:number){
    return cost*3
  }

  calculateElectric(cost:number){
    return cost*6.5
  }

  calculateClean(cost:number){
    return cost*200
  }

  calculateRent(cost:number){
    return cost
  }

  calculateTotal(w:number,e:number,c:number,r:number){
    return w+e+c+r;
  }

  testClick(){
    console.log(this.month);
  }

  filterBuilding1() {
    Object.assign(this.billsData, this._billsData)
    this.billsData = this.billsData.filter((x) => {
      return x.building == 1;
    })
  }

  filterBuilding2() {
    Object.assign(this.billsData, this._billsData)
    this.billsData = this.billsData.filter((x) => {
      return x.building == 2;
    })
  }

  filterBuilding3() {
    Object.assign(this.billsData, this._billsData)
    this.billsData = this.billsData.filter((x) => {
      return x.building == 3;
    })
  }

  clearFilterBuilding() {
    Object.assign(this.billsData, this._billsData)
  }

  selectStatus() {
    Object.assign(this.billsData, this._billsData)
    if (this.status == 0) {
      return
    }
    this.billsData = this.billsData.filter((x) => {
      return x.bills_state_id == this.status;
    })
  }

  searchRoom() {
    Object.assign(this.billsData, this.billsData)
    if (this.room == "") {
      return
    }
    this.billsData = this.billsData.filter((x) => {
      return x.room_num.includes(this.room) ;
    })
  }

}
