import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamDto } from 'src/app/shared/DTOs/teamDto';
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

  CreateNewTeam(body: any): Observable<any> {
    return this.http.post(`${this.url}Team`, body)
  }

  DeleteTeamAndItsPlayersByTeamId(id: number) {

    return this.http.delete<boolean>(this.url + "Team?Id=" + id);
  }

  GetTeamDetailsById(id: number) {
    return this.http.get<TeamDto>(this.url + "Team/GetTeamById?Id=" + id);
  }

  EditTeamInfoById(teamObj: TeamDto): Observable<any> {
    return this.http.put(`${this.url}Team`, teamObj)

  }
}
