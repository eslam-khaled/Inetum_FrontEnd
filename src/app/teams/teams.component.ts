import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TeamDto } from '../shared/DTOs/teamDto';
import { ConfrimDeleteComponent } from './Components/confrim-delete/confrim-delete.component';
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
    private router: Router,private dialog: MatDialog) { }

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



  OpenConfirmDialog(id) {

    const dialogRef = this.dialog.open(ConfrimDeleteComponent, {
      width: "380px",
      data: {
        Id: id
      }
    });
  }
}
