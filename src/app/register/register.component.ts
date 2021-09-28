import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDto } from '../shared/DTOs/UserDto';
import { RegisterService } from '../Services/register.service';
import Swal from 'sweetalert2';

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
      Password: ['', Validators.required],
      Role: [1, Validators.required],
    })
  }

  onFormSubmit(NewUserForm) {
    let userDto = new UserDto();
    userDto = NewUserForm;
    this.registerService.register(userDto).subscribe(result => {

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registered succesfully',
        showConfirmButton: false,
        timer: 1500
      }).then(res => {
        this.router.navigate(['/login'])
      })
    }, err => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error! Make sure password long is more than 6 and has uper-case, lower case, number and special marks and user name does not exist before.',
        showConfirmButton: true,
        timer: 8000
      })
      
    });
  }
}
