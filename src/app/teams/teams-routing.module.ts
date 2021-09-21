import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTeamComponent } from './Components/create-team/create-team.component';
import { PlayersListComponent } from './Components/players-list/players-list.component';
import { TeamsComponent } from './teams.component';


const routes: Routes = [
   { path: '', component: TeamsComponent },
   { path: 'teams/Players/:id', component: PlayersListComponent },
   { path: 'teams/CreateTeam', component: CreateTeamComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeamsRoutingModule { }