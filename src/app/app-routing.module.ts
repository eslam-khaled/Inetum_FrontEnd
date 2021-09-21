import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { IsLoggedService } from './shared/Gaurd/is-logged.service';
import { TeamsComponent } from './teams/teams.component';


const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'login', component: LogInComponent },
  { path: 'teams', component: TeamsComponent, canActivate: [IsLoggedService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
