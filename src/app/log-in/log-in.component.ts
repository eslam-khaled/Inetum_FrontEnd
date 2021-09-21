import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDto } from '../DTOs/UserDto';
import { LogInService } from '../Services/log-in.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  LogInForm: FormGroup;

  constructor(private LoginService: LogInService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.LogInForm = this.formBuilder.group({
      Email: ['', Validators.required],
      Username: ['', Validators.required],
      Password: ['', Validators.required]
    })
  }

  onFormSubmit(NewUserForm) {

    let userDto = new UserDto();
    userDto = NewUserForm;

    this.LoginService.Authenticate(userDto).subscribe(result => {
      localStorage.setItem('currentUser', JSON.stringify(result));
      this.router.navigate(['/teams'])
    });
  }

  GoToRegister() {
    this.router.navigate([''])
  }
}
