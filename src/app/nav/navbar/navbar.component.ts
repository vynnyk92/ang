import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/user/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userName: string;
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  isAuthentificated(){
    return this.authService.isAunthentificated();
  }

}
