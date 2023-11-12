import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SwalService } from 'src/app/shared/services/swal.service';

export interface clean {
  id?: number;
  room: number;
  date: string;
  status: string;
}
const CLEANINFO: clean[] = [
  {
    room: 1112,
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1151,
    date: "02/06/2565",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1251,
    date: "02/06/2565",
    status: "เสร็จสิ้น",
  },
  {
    room: 1112,
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1151,
    date: "02/06/2565",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1251,
    date: "02/06/2565",
    status: "เสร็จสิ้น",
  }, {
    room: 1112,
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1151,
    date: "02/06/2565",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1251,
    date: "02/06/2565",
    status: "เสร็จสิ้น",
  }, {
    room: 1112,
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1151,
    date: "02/06/2565",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1251,
    date: "02/06/2565",
    status: "เสร็จสิ้น",
  }, {
    room: 1112,
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1151,
    date: "02/06/2565",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1251,
    date: "02/06/2565",
    status: "เสร็จสิ้น",
  }, {
    room: 1112,
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1151,
    date: "02/06/2565",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1251,
    date: "02/06/2565",
    status: "เสร็จสิ้น",
  },
  {
    room: 1112,
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1151,
    date: "02/06/2565",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1251,
    date: "02/06/2565",
    status: "เสร็จสิ้น",
  },  {
    room: 1112,
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1151,
    date: "02/06/2565",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1251,
    date: "02/06/2565",
    status: "เสร็จสิ้น",
  },  {
    room: 1112,
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1151,
    date: "02/06/2565",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1251,
    date: "02/06/2565",
    status: "เสร็จสิ้น",
  },  {
    room: 1112,
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1151,
    date: "02/06/2565",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1251,
    date: "02/06/2565",
    status: "เสร็จสิ้น",
  },  {
    room: 1112,
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1151,
    date: "02/06/2565",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1251,
    date: "02/06/2565",
    status: "เสร็จสิ้น",
  },  {
    room: 1112,
    date: "03/06/2023",
    status: "รอดำเนินการ",
  },
  {
    room: 1151,
    date: "02/06/2565",
    status: "กำลังดำเนินการ",
  },
  {
    room: 1251,
    date: "02/06/2565",
    status: "เสร็จสิ้น",
  },
]

@Component({
  selector: 'app-clean-page',
  templateUrl: './clean-page.component.html',
  styleUrls: ['./clean-page.component.css']
})
export class CleanPageComponent {
  title = "ข้อมูลการแจ้งทำความสะอาด";
  allCleanInfo: clean[] = CLEANINFO;
  page = 1;
  pageSize = 30;
  collectionSize = CLEANINFO.length;

  constructor(private router: Router, private swalSrv: SwalService) {
    this.chagnePageFix();
  }

  chagnePageFix() {
    this.allCleanInfo = CLEANINFO.map((allCleanInfo, i) => ({ id: i + 1, ...allCleanInfo })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize,
    );
  }
}
