import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bills } from 'src/app/shared/interfaces/bills';
import { User } from 'src/app/shared/interfaces/user';
import { BillsService } from 'src/app/shared/services/bills.service';
import { SwalService } from 'src/app/shared/services/swal.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-payment-user',
  templateUrl: './payment-user.component.html',
  styleUrls: ['./payment-user.component.css']
})
export class PaymentUserComponent {
  title = 'ค่าใช้จ่าย';
  paymentAll = true;
  paymentDetail = false;

  // bills: Bills = {} as Bills;
  billsData!: Bills[];
  _billsData!: Bills[];

  userData!: User

  constructor(private router: Router, private swalSrv: SwalService, private billsrv: BillsService, private userSrv: UserService) {
    this.userData = this.userSrv.getUserData();
  }

  clickToPaymentAll() {
    this.paymentAll = true;
    this.paymentDetail = false;
  }
  clickToPaymentDetail() {
    this.paymentAll = false;
    this.paymentDetail = true;
  }
  clickToPaymentSlip() {
    this.router.navigate(['/user/payment-info-user']);
  }
  

  async ngOnInit() {
    await this.onData();
  }

  async ngAfterViewInit() {
    await this.emitData();
  }


  async emitData() {
    console.log( this.userData.room_id,this.userData.user_id);
    await this.billsrv.emitBillsData(this.userData.room_id, this.userData.user_id);
  }

  async onData() {
    const result = await this.billsrv.onBillsData();
    result.subscribe((data) => {
      this.billsData = data.msg;
      console.log(data);
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
}
