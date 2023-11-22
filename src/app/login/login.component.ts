import { Component } from '@angular/core';
import { User } from '../shared/interfaces/user';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';
import { SwalService } from '../shared/services/swal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: User = {} as User;
  constructor(private router:Router,private userSrv: UserService,private swalSrv: SwalService) {
    this.initialForm();
  }
  login(){
    this.userSrv.login(this.loginForm)

  }
  initialForm(){
    this.loginForm.username = "";
    this.loginForm.password = "";
  }
}
