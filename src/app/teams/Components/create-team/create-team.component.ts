import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TeamService } from '../../Services/team.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {

  submitted = false;
  NewTeamForm: FormGroup;

  constructor(private router: Router, private formbulider: FormBuilder, private teamService: TeamService) { }

  ngOnInit(): void {
    this.NewTeamForm = this.formbulider.group({
      Name: ['', Validators.required],
      Country: ['', Validators.required],
      CoachName: ['', Validators.required],
      // foundationDate: ['', Validators.required],
      // LogoImage: ['', Validators.required],

      playerListDto: new FormArray([])
    })
  }

  get form() { return this.NewTeamForm.controls; }
  get teamPlayers_Controls() {
    return (this.NewTeamForm.get('playerListDto') as FormArray).controls
  }

  addNewPlayer() {
    const TeamPlayerGroup = this.formbulider.group({
      Name: ['', Validators.required],
      nationality: ['', Validators.required]
    })
    this.teamPlayers_Controls.push(TeamPlayerGroup)
  }
  deletePlayer(index: number) {
    const player = this.NewTeamForm.get('playerListDto') as FormArray;
    player.removeAt(index)
  }
  addPlayersToForm() {
    const Players = this.teamPlayers_Controls;
    let arr: any[] = []
    Players.map(formGroup => {
      let player = { ...formGroup.value }
      arr.push(player)
    })
    this.NewTeamForm.get('playerListDto')?.setValue(arr)
  }
  onFormSubmit() {
    if (this.NewTeamForm.valid) {
      this.addPlayersToForm();
      this.teamService.CreateNewTeam(this.NewTeamForm.value).subscribe(res => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Team added succesfully',
          showConfirmButton: false,
          timer: 1500
        }).then(res => {
          this.router.navigate(['/teams'])
        })
      }, err => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Some Thing went Wrong Please try again later',
          showConfirmButton: false,
          timer: 1500
        })
      })
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Please fill the required Fields',
        showConfirmButton: false,
        timer: 1500
      })
    }


  }
}
