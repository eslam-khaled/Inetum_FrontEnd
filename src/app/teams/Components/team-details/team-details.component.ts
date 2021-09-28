import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeamDto } from 'src/app/shared/DTOs/teamDto';
import { TeamService } from '../../Services/team.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  id: number;
  teamDto: TeamDto;
  EditTeamForm: FormGroup;

  constructor(private teamService: TeamService,
    private activatedRoute: ActivatedRoute, private formbulider: FormBuilder) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(res => {
      console.log(typeof res.get('id'));
      this.id = parseInt(res.get('id') || '0')
      this.GetTeamDetailsById(this.id)
    });

    this.EditTeamForm = this.formbulider.group({
      Name: [this.teamDto.name, Validators.required],
      Country: [this.teamDto.country, Validators.required],
      CoachName: [this.teamDto.coachName, Validators.required],
    })
  }


  GetTeamDetailsById(id) {
    this.teamService.GetTeamDetailsById(id).subscribe(result => {
      this.teamDto = result;
    });
  }

  onFormSubmit(EditTeamForm) {
    let teamObj: TeamDto;
    teamObj = EditTeamForm;

    this.EditTeamInfo(teamObj);
  }

  EditTeamInfo(teamObj: TeamDto) {
    this.teamService.EditTeamInfoById(teamObj).subscribe(reult => {

    }
    )
  }
}
