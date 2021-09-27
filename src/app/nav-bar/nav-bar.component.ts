import { Component, OnInit } from '@angular/core';
import { LogInService } from '../Services/log-in.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private loginService: LogInService) { }

  Role: any;
  CurrenUser: any;
  ngOnInit(): void {



    this.CurrenUser = JSON.parse(localStorage.getItem("currentUser") || '')
    this.Role = this.CurrenUser.role;
  }

  logout() {
    this.loginService.logout();
  }



}
