import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDto } from '../DTOs/UserDto';
import { RegisterService } from '../Services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  NewUserForm: FormGroup;

  constructor(private registerService: RegisterService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.NewUserForm = this.formBuilder.group({
      Email: ['', Validators.required],
      Username: ['', Validators.required],
      Password: ['', Validators.required]
    })
  }

  onFormSubmit(NewUserForm) {
    let userDto = new UserDto();
    userDto = NewUserForm;
    this.registerService.register(userDto).subscribe(result => {

    });
  }

  GoToLogIn(){
    this.router.navigate(['/login']);
  }
}
