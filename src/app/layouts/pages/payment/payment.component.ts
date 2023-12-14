import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bills } from 'src/app/shared/interfaces/bills';
import { Slip } from 'src/app/shared/interfaces/slip';
import { User } from 'src/app/shared/interfaces/user';
import { BillsService } from 'src/app/shared/services/bills.service';
import { SlipService } from 'src/app/shared/services/slip.service';
import { SwalService } from 'src/app/shared/services/swal.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  title = 'หลักฐานการชำระเงิน';
  page = 1;
  pageSize = 30;
  billsData!: Bills[];
  _billsData!: Bills[];
  collectionSize = 0;
  month: any;
  status: number = 0;
  room = "";
  slipData!: Slip[];
  _slipData!: Slip[];
  userData!: User;
  buildingSelect: number = 0;

  constructor(private router: Router, private swalSrv: SwalService, private billsrv: BillsService, private slipSrv: SlipService, private userSrv: UserService) {
    this.userData = this.userSrv.getUserData();
  }

  chagnePageFix() {
    this.slipData = this._slipData.map((slipData, i) => ({ id: i + 1, ...slipData })).slice(
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
    await this.slipSrv.emitAllSlipData();
  }

  async onData() {
    const result = await this.slipSrv.onAllSlipData();
    result.subscribe((data) => {
      this._slipData = data.msg;
      this.collectionSize = this._slipData.length;
      this.chagnePageFix();
    });
  }

  calculateWater(cost: number) {
    return cost * 3
  }

  calculateElectric(cost: number) {
    return cost * 6.5
  }

  calculateClean(cost: number) {
    return cost * 200
  }

  calculateRent(cost: number) {
    return cost
  }

  calculateTotal(w: number, e: number, c: number, r: number) {
    return w + e + c + r;
  }


  async updateState(data: Bills) {
    console.log(data);
    console.log(data.bills_state_id);
    this.swalSrv.confirmAlert({ text: "ต้องการอัพเดทสถานะใช่หรือไม่" }).then(async (result) => {
      if (result.isConfirmed) {
        data.bills_state_id++;
        console.log(data.bills_state_id);
        this.swalSrv.successAlert({ text: "อัพเดทสถานะเสร็จสิ้น" });
        await this.billsrv.updateBillsData(data);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    })
  }

  async FilterBuilding(building: number) {
    console.log("building" + building);

    Object.assign(this.slipData, this._slipData)
    if (building != 0) {
      this.slipData = this.slipData.filter((x) => {
        return x.building == building;
      })
    }
    
    if (this.status != 0) {
      this.slipData = this.slipData.filter((x) => {
        return x.bills_state_id == this.status;
      })
    }
    if (this.room != "") {
      this.slipData = this.slipData.filter((x) => {
        return x.room_num.includes(this.room);
      })
    }
    if (this.month) {
      this.slipData = this.slipData.filter((x) => {
        return new Date(x.month_year).getMonth() == (new Date(this.month)).getMonth() && new Date(x.month_year).getFullYear() == (new Date(this.month)).getFullYear();
      })
    }
  }

}
