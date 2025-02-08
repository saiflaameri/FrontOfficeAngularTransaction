import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteBancaireComponent } from './carte-bancaire/carte-bancaire.component';
import { ComptebancaireComponent } from './comptebancaire/comptebancaire.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StatdashComponent } from './statdash/statdash.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'compte-bancaire', component: ComptebancaireComponent },
      { path: 'stat', component: StatdashComponent },
      { path: 'users', component: UserComponent },
      {path:'cartebancire',component:CarteBancaireComponent}



    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
