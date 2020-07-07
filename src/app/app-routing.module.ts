import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ModeleComponent } from './modele/modele.component';
import { Modele2Component } from './modele2/modele2.component';



const routes: Routes = [
  {path:'',redirectTo:'/dashboard/home',pathMatch:'full'},
  {path:'login',component: LoginComponent},
  {
    path:'dashboard',
    component: DashboardComponent,
    children: [
      {path:'',redirectTo:'/home',pathMatch:'full'},
      {path:'home',component: HomeComponent},
      {path:'modele',component: ModeleComponent},
      {path:'modele2',component: Modele2Component},
	]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }