import { Component } from '@angular/core';
import { UserDto } from './shared/DTOs/UserDto';
import { RegisterService } from './Services/register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private register: RegisterService) { }
  userData: UserDto;

  title = 'InetumFront';
}
