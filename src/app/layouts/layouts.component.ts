import { Component } from '@angular/core';
import { SwalService } from '../shared/services/swal.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent {
  opened = false;
  constructor(private userSrv: UserService) {
  }

  clickToLogout(){
    this.userSrv.logout();
  }

}
