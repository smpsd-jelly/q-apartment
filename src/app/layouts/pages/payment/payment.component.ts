import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SwalService } from 'src/app/shared/services/swal.service';

export interface payment {
  id?: number;
  room: number;
  expenses: string;
  date: string;
  status: string;
}
const PAYMENTINFO: payment[] = [
  {
    room: 1112,
    expenses: "1234",
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1345,
    expenses: "1123",
    date: "03/06/2023",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1234,
    expenses: "452",
    date: "03/06/2023",
    status: "เสร็จสิ้น",
  },
  {
    room: 1112,
    expenses: "1234",
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1345,
    expenses: "1123",
    date: "03/06/2023",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1234,
    expenses: "452",
    date: "03/06/2023",
    status: "เสร็จสิ้น",
  }, {
    room: 1112,
    expenses: "1234",
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1345,
    expenses: "1123",
    date: "03/06/2023",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1234,
    expenses: "452",
    date: "03/06/2023",
    status: "เสร็จสิ้น",
  }, {
    room: 1112,
    expenses: "1234",
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1345,
    expenses: "1123",
    date: "03/06/2023",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1234,
    expenses: "452",
    date: "03/06/2023",
    status: "เสร็จสิ้น",
  },
]

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
title = 'หลักฐานการชำระเงิน';
allPaymentInfo: payment[] = PAYMENTINFO;
page = 1;
pageSize = 30;
collectionSize = PAYMENTINFO.length;

constructor(private router: Router, private swalSrv: SwalService) {
  this.chagnePageFix();
}

chagnePageFix() {
  this.allPaymentInfo = PAYMENTINFO.map((allPaymentInfo, i) => ({ id: i + 1, ...allPaymentInfo })).slice(
    (this.page - 1) * this.pageSize,
    (this.page - 1) * this.pageSize + this.pageSize,
  );
}
}
