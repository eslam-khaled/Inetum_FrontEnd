import { Component, OnInit } from '@angular/core';
import { LogInService } from '../Services/log-in.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private loginService: LogInService) { }

  ngOnInit(): void {
  }

  logout() {
    this.loginService.logout();
  }

}
