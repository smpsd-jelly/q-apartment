import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FixData, FixHistory } from 'src/app/shared/interfaces/fix';
import { User } from 'src/app/shared/interfaces/user';
import { FixService } from 'src/app/shared/services/fix.service';
import { SwalService } from 'src/app/shared/services/swal.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-fix-user-history',
  templateUrl: './fix-user-history.component.html',
  styleUrls: ['./fix-user-history.component.css']
})
export class FixUserHistoryComponent implements OnInit, AfterViewInit {
  title = "ประวัติการซ่อมแซม";

  fixData!: FixHistory[];
  userData!: User

  constructor(private router: Router, private swalSrv: SwalService, private fixSrv: FixService, private userSrv: UserService) {
    this.userData = this.userSrv.getUserData();
  }

  async ngOnInit() {
    await this.onData();
  }

  async ngAfterViewInit() {
    await this.emitData();
  }

  async emitData() {
    console.log(this.userData.user_id);
    await this.fixSrv.emitFixData(this.userData.user_id, this.userData.room_id);
  }

  async onData() {
    const result = await this.fixSrv.onFixData();
    result.subscribe((data) => {
      this.fixData = data.msg;
    });
  }

}
