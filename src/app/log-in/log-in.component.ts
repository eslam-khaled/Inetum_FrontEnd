import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDto } from '../shared/DTOs/UserDto';
import { LogInService } from '../Services/log-in.service';
import Swal from 'sweetalert2';

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

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Logged in succesfully',
        showConfirmButton: false,
        timer: 1500
      }).then(res => {
        localStorage.setItem('currentUser', JSON.stringify(result));
        this.router.navigate(['/teams'])
      })
    }, err => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error! Some Thing went Wrong Please try again later.',
        showConfirmButton: true,
        timer: 2000
      })

    });
  }

  GoToRegister() {
    this.router.navigate([''])
  }
}
