import { Component } from '@angular/core';
import { SwalService } from '../shared/services/swal.service';
import { UserService } from '../shared/services/user.service';
import { CleanHistory } from '../shared/interfaces/clean';
import { User } from '../shared/interfaces/user';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent {
  opened = false;
  userInfo!: User;

  constructor(private userSrv: UserService) {
    this.userInfo = userSrv.getUserData();
  }

  clickToLogout(){
    this.userSrv.logout();
  }

}
