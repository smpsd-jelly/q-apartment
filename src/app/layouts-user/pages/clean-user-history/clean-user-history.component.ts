import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CleanData, CleanHistory } from 'src/app/shared/interfaces/clean';
import { User } from 'src/app/shared/interfaces/user';
import { CleanService } from 'src/app/shared/services/clean.service';
import { SwalService } from 'src/app/shared/services/swal.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-clean-user-history',
  templateUrl: './clean-user-history.component.html',
  styleUrls: ['./clean-user-history.component.css']
})
export class CleanUserHistoryComponent implements OnInit, AfterViewInit {
  title = 'ประวัติการแจ้งทำความสะอาด'

  cleanData!: CleanHistory[];
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
    console.log(this.userData.user_id);
    await this.cleanSrv.emitCleanData(this.userData.user_id,this.userData.room_id);
  }

  async onData() {
    const result = await this.cleanSrv.onCleanData();
    result.subscribe((data) => {
      this.cleanData = data.msg;
     });
  }

}
