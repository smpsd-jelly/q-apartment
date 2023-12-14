import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user';
import { SwalService } from 'src/app/shared/services/swal.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  title = 'รายการผู้อยู่อาศัย'
  page = 1;
  pageSize = 100;
  userData!: User[];
  _userData!: User[];
  collectionSize = 0;
  room = "";
;

  constructor(private router: Router, private swalSrv: SwalService, private userSrv: UserService) {
  }

  chagnePageBills() {
    this.userData = this._userData.map((userData, i) => ({ id: i + 1, ...userData })).slice(
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
    await this.userSrv.emitAllUserData();
  }

  async onData() {
    const result = await this.userSrv.onAllUserData();
    result.subscribe((data) => {
      this._userData = data.msg;
      this.collectionSize = this._userData.length;
      this.chagnePageBills();
    });
  }

  searchRoom() {
    Object.assign(this.userData, this._userData)
    if (this.room == "") {
      return
    }
    this.userData = this.userData.filter((x) => {
      return x.room_num.includes(this.room) ;
    })
  }

}
