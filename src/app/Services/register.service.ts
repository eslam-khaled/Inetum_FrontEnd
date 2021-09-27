import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserDto } from '../shared/DTOs/UserDto';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  url = environment.api;

  register(userData: UserDto) {
    let header = new HttpHeaders();
    header.append("Content-Type", "application/json; charset=utf-8");
    return this.http.post<UserDto>(this.url + "User/Register", userData, { headers: header });
  }

}
