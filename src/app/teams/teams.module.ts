import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from '../teams/teams.component';
import { PlayersListComponent } from './Components/players-list/players-list.component';
import { CreateTeamComponent } from './Components/create-team/create-team.component';
import { UpdateTeamComponent } from './Components/update-team/update-team.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamsRoutingModule } from './teams-routing.module';
import { DataService } from './Services/DataService';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ConfrimDeleteComponent } from './Components/confrim-delete/confrim-delete.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamDetailsComponent } from './Components/team-details/team-details.component';

@NgModule({
  declarations: [
    ConfrimDeleteComponent,
    TeamsComponent,
    PlayersListComponent,
    CreateTeamComponent,
    UpdateTeamComponent,
    NavBarComponent,
    TeamDetailsComponent
  ],
  entryComponents:[ConfrimDeleteComponent],
  providers: [DataService],
  imports: [
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TeamsRoutingModule,
    BsDatepickerModule.forRoot(),

  ],
  exports: [ConfrimDeleteComponent]
})
export class TeamsModule { }
