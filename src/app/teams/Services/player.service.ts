import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlayerDto } from 'src/app/shared/DTOs/PlayerDto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }
  url = environment.api;

  
  GetPlayersByTeamId(Id:number) {

    return this.http.get<PlayerDto[]>(this.url + "Player"+"?TeamId="+Id);
  }
  
}
