import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamDto } from 'src/app/DTOs/teamDto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  constructor(private http: HttpClient) { }
  url = environment.api;


  GetAllTeams() {
    return this.http.get<TeamDto[]>(this.url + "Team");
  }

  CreateNewTeam(body:any):Observable<any> {
    return this.http.post(`${this.url}Team`,body)
  }
}
