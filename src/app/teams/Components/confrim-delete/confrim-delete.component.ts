import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { TeamService } from '../../Services/team.service';

export interface DialogData {
  Id: any;
}

@Component({
  selector: 'app-confrim-delete',
  templateUrl: './confrim-delete.component.html',
  styleUrls: ['./confrim-delete.component.css']
})
export class ConfrimDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfrimDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private readonly teamService: TeamService) { }

  ngOnInit(): void {
  }

  ConfirmDelete() {
    this.teamService.DeleteTeamAndItsPlayersByTeamId(this.data.Id).subscribe(reult => {
      this.close();
    });
  }

  close() {
    this.dialogRef.close();
  }

}
