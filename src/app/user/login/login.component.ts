import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  public login(loginValues){
    this.authService.loginUser(loginValues.userName, loginValues.password);
    this.router.navigate(['events']);
  }

  public cancel(){
    this.router.navigate(['events']);
  }
}
