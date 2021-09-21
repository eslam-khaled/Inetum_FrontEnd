import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerDto } from 'src/app/DTOs/PlayerDto';
import { DataService } from '../../Services/DataService';
import { PlayerService } from '../../Services/player.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  id: number;
  playerList: PlayerDto[];

  constructor(private playerService: PlayerService,
    private data: DataService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(res=>{
      console.log(typeof res.get('id'));
      this.id = parseInt(res.get('id') || '0')
      this.GetPlayersByTeamId()
    })
    this.data.getMessage().subscribe((message) => {
      this.id = message
    });

  }

  GetPlayersByTeamId() {
    this.playerService.GetPlayersByTeamId(this.id).subscribe(result => {
      this.playerList = result;
      console.log(this.playerList)
    })
  }
}
