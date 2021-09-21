import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamDto } from '../DTOs/teamDto';
import { DataService } from './Services/DataService';
import { TeamService } from './Services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  public TeamDtoList: TeamDto[];
  id:number;

  constructor(private teamService: TeamService,
    private dataService :DataService,
    private router: Router,) { }

  ngOnInit(): void {
    this.dataService.getMessage().subscribe((message) => {
      this.id = message
    });

    this.GetAllTeams();
  }

  GetAllTeams() {
    this.teamService.GetAllTeams().subscribe(result => {
      console.log(result);
      this.TeamDtoList = result;
    })
  }

  GoToPlayers(id: number) {
    debugger;
    this.dataService.setMessage(id);
    this.router.navigate(['teams/Players']);
  }
}
