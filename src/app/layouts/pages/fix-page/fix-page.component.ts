import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SwalService } from 'src/app/shared/services/swal.service';

export interface fix {
  id?: number;
  room: number;
  area: string;
  detail: string;
  date: string;
  status: string;
}
const FIXEDINFO: fix[] = [
  {
    room: 1112,
    area: "ห้องน้ำ",
    detail: "เครื่องทำน้ำอุ่นไม่ทำงาน",
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1151,
    area: "ห้องนอน",
    detail: "ไฟกระพริบ",
    date: "02/06/2565",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1251,
    area: "ห้องนอน",
    detail: "โต๊ะพัง",
    date: "02/06/2565",
    status: "เสร็จสิ้น",
  },
  {
    room: 1112,
    area: "ห้องน้ำ",
    detail: "เครื่องทำน้ำอุ่นไม่ทำงาน",
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1112,
    area: "ห้องน้ำ",
    detail: "เครื่องทำน้ำอุ่นไม่ทำงาน",
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1112,
    area: "ห้องน้ำ",
    detail: "เครื่องทำน้ำอุ่นไม่ทำงาน",
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1112,
    area: "ห้องน้ำ",
    detail: "เครื่องทำน้ำอุ่นไม่ทำงาน",
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1151,
    area: "ห้องนอน",
    detail: "ไฟกระพริบ",
    date: "02/06/2565",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1251,
    area: "ห้องนอน",
    detail: "โต๊ะพัง",
    date: "02/06/2565",
    status: "เสร็จสิ้น",
  },
  {
    room: 1112,
    area: "ห้องน้ำ",
    detail: "เครื่องทำน้ำอุ่นไม่ทำงาน",
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1151,
    area: "ห้องนอน",
    detail: "ไฟกระพริบ",
    date: "02/06/2565",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1251,
    area: "ห้องนอน",
    detail: "โต๊ะพัง",
    date: "02/06/2565",
    status: "เสร็จสิ้น",
  },
  {
    room: 1112,
    area: "ห้องน้ำ",
    detail: "เครื่องทำน้ำอุ่นไม่ทำงาน",
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1151,
    area: "ห้องนอน",
    detail: "ไฟกระพริบ",
    date: "02/06/2565",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1251,
    area: "ห้องนอน",
    detail: "โต๊ะพัง",
    date: "02/06/2565",
    status: "เสร็จสิ้น",
  },
  {
    room: 1112,
    area: "ห้องน้ำ",
    detail: "เครื่องทำน้ำอุ่นไม่ทำงาน",
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1151,
    area: "ห้องนอน",
    detail: "ไฟกระพริบ",
    date: "02/06/2565",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1251,
    area: "ห้องนอน",
    detail: "โต๊ะพัง",
    date: "02/06/2565",
    status: "เสร็จสิ้น",
  },
  {
    room: 1112,
    area: "ห้องน้ำ",
    detail: "เครื่องทำน้ำอุ่นไม่ทำงาน",
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1151,
    area: "ห้องนอน",
    detail: "ไฟกระพริบ",
    date: "02/06/2565",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1251,
    area: "ห้องนอน",
    detail: "โต๊ะพัง",
    date: "02/06/2565",
    status: "เสร็จสิ้น",
  },
  {
    room: 1112,
    area: "ห้องน้ำ",
    detail: "เครื่องทำน้ำอุ่นไม่ทำงาน",
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1151,
    area: "ห้องนอน",
    detail: "ไฟกระพริบ",
    date: "02/06/2565",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1251,
    area: "ห้องนอน",
    detail: "โต๊ะพัง",
    date: "02/06/2565",
    status: "เสร็จสิ้น",
  },
  {
    room: 1112,
    area: "ห้องน้ำ",
    detail: "เครื่องทำน้ำอุ่นไม่ทำงาน",
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1151,
    area: "ห้องนอน",
    detail: "ไฟกระพริบ",
    date: "02/06/2565",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1251,
    area: "ห้องนอน",
    detail: "โต๊ะพัง",
    date: "02/06/2565",
    status: "เสร็จสิ้น",
  },
  {
    room: 1112,
    area: "ห้องน้ำ",
    detail: "เครื่องทำน้ำอุ่นไม่ทำงาน",
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1151,
    area: "ห้องนอน",
    detail: "ไฟกระพริบ",
    date: "02/06/2565",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1251,
    area: "ห้องนอน",
    detail: "โต๊ะพัง",
    date: "02/06/2565",
    status: "เสร็จสิ้น",
  },  {
    room: 1112,
    area: "ห้องน้ำ",
    detail: "เครื่องทำน้ำอุ่นไม่ทำงาน",
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1151,
    area: "ห้องนอน",
    detail: "ไฟกระพริบ",
    date: "02/06/2565",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1251,
    area: "ห้องนอน",
    detail: "โต๊ะพัง",
    date: "02/06/2565",
    status: "เสร็จสิ้น",
  },  {
    room: 1112,
    area: "ห้องน้ำ",
    detail: "เครื่องทำน้ำอุ่นไม่ทำงาน",
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1151,
    area: "ห้องนอน",
    detail: "ไฟกระพริบ",
    date: "02/06/2565",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1251,
    area: "ห้องนอน",
    detail: "โต๊ะพัง",
    date: "02/06/2565",
    status: "เสร็จสิ้น",
  },  {
    room: 1112,
    area: "ห้องน้ำ",
    detail: "เครื่องทำน้ำอุ่นไม่ทำงาน",
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1151,
    area: "ห้องนอน",
    detail: "ไฟกระพริบ",
    date: "02/06/2565",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1251,
    area: "ห้องนอน",
    detail: "โต๊ะพัง",
    date: "02/06/2565",
    status: "เสร็จสิ้น",
  },  {
    room: 1112,
    area: "ห้องน้ำ",
    detail: "เครื่องทำน้ำอุ่นไม่ทำงาน",
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1151,
    area: "ห้องนอน",
    detail: "ไฟกระพริบ",
    date: "02/06/2565",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1251,
    area: "ห้องนอน",
    detail: "โต๊ะพัง",
    date: "02/06/2565",
    status: "เสร็จสิ้น",
  },  {
    room: 1112,
    area: "ห้องน้ำ",
    detail: "เครื่องทำน้ำอุ่นไม่ทำงาน",
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1151,
    area: "ห้องนอน",
    detail: "ไฟกระพริบ",
    date: "02/06/2565",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1251,
    area: "ห้องนอน",
    detail: "โต๊ะพัง",
    date: "02/06/2565",
    status: "เสร็จสิ้น",
  },  {
    room: 1112,
    area: "ห้องน้ำ",
    detail: "เครื่องทำน้ำอุ่นไม่ทำงาน",
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1151,
    area: "ห้องนอน",
    detail: "ไฟกระพริบ",
    date: "02/06/2565",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1251,
    area: "ห้องนอน",
    detail: "โต๊ะพัง",
    date: "02/06/2565",
    status: "เสร็จสิ้น",
  },  {
    room: 1112,
    area: "ห้องน้ำ",
    detail: "เครื่องทำน้ำอุ่นไม่ทำงาน",
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1151,
    area: "ห้องนอน",
    detail: "ไฟกระพริบ",
    date: "02/06/2565",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1251,
    area: "ห้องนอน",
    detail: "โต๊ะพัง",
    date: "02/06/2565",
    status: "เสร็จสิ้น",
  },  {
    room: 1112,
    area: "ห้องน้ำ",
    detail: "เครื่องทำน้ำอุ่นไม่ทำงาน",
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1151,
    area: "ห้องนอน",
    detail: "ไฟกระพริบ",
    date: "02/06/2565",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1251,
    area: "ห้องนอน",
    detail: "โต๊ะพัง",
    date: "02/06/2565",
    status: "เสร็จสิ้น",
  },  {
    room: 1112,
    area: "ห้องน้ำ",
    detail: "เครื่องทำน้ำอุ่นไม่ทำงาน",
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1151,
    area: "ห้องนอน",
    detail: "ไฟกระพริบ",
    date: "02/06/2565",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1251,
    area: "ห้องนอน",
    detail: "โต๊ะพัง",
    date: "02/06/2565",
    status: "เสร็จสิ้น",
  },  {
    room: 1112,
    area: "ห้องน้ำ",
    detail: "เครื่องทำน้ำอุ่นไม่ทำงาน",
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1151,
    area: "ห้องนอน",
    detail: "ไฟกระพริบ",
    date: "02/06/2565",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1251,
    area: "ห้องนอน",
    detail: "โต๊ะพัง",
    date: "02/06/2565",
    status: "เสร็จสิ้น",
  },  {
    room: 1112,
    area: "ห้องน้ำ",
    detail: "เครื่องทำน้ำอุ่นไม่ทำงาน",
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1151,
    area: "ห้องนอน",
    detail: "ไฟกระพริบ",
    date: "02/06/2565",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1251,
    area: "ห้องนอน",
    detail: "โต๊ะพัง",
    date: "02/06/2565",
    status: "เสร็จสิ้น",
  },
]

@Component({
  selector: 'app-fix-page',
  templateUrl: './fix-page.component.html',
  styleUrls: ['./fix-page.component.css']
})
export class FixPageComponent {
  title = "ข้อมูลการแจ้งซ่อมแซม";
  allFixedInfo: fix[] = FIXEDINFO;
  page = 1;
  pageSize = 30;
  collectionSize = FIXEDINFO.length;

  constructor(private router: Router, private swalSrv: SwalService) {
    this.chagnePageFix();
  }

  chagnePageFix() {
    this.allFixedInfo = FIXEDINFO.map((allFixedInfo, i) => ({ id: i + 1, ...allFixedInfo })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize,
    );
  }
}
