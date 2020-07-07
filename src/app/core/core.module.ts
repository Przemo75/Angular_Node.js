import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { LoginComponent } from './login/login.component'; 
import { MaterialModule } from '../material/material.module'; 
import { RouterModule } from '@angular/router'; 
import { HomeModule } from '../home/home.module';
import { HomeService } from './services/home.service';
import { ModeleModule } from '../modele/modele.module';
import { ModeleService } from './services/modele.service'; 
import { Modele2Module } from '../modele2/modele2.module';
import { Modele2Service } from './services/modele2.service';

@NgModule({ declarations: [DashboardComponent, LoginComponent ], 
imports: [ CommonModule, MaterialModule, RouterModule, HomeModule, ModeleModule, Modele2Module ], 
providers: [HomeService, ModeleService, Modele2Service], 
exports:[DashboardComponent, LoginComponent] }) 
export class CoreModule { }