import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserDto } from '../shared/DTOs/UserDto';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private http: HttpClient,private router:Router) { }
  url = environment.api;

  Authenticate(userData: UserDto) {
    let header = new HttpHeaders();
    header.append("Content-Type", "application/json; charset=utf-8");
    return this.http.post<UserDto>(this.url + "User/Login", userData, { headers: header });
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
  isLogged():boolean{
    return localStorage.currentUser ? true : false
  }
}
