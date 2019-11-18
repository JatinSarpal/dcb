import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { InteriorComponent } from './components/interior/interior.component';
import { TheTeamComponent } from './components/the-team/the-team.component';
import { NahbComponent } from './components/nahb/nahb.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AboutUs1Component } from './components/about-us1/about-us1.component';
import { TimingToConsiderComponent } from './components/facts/timing-to-consider/timing-to-consider.component';
import { ArchitectsComponent } from './components/facts/architects/architects.component';
import { BeforebuildingComponent } from './components/facts/beforebuilding/beforebuilding.component';
import { ExpensesToConsiderComponent } from './components/facts/expenses-to-consider/expenses-to-consider.component';
import { HouseKeepingComponent } from './components/facts/house-keeping/house-keeping.component';
import { AlterationComponent } from './components/facts/alteration/alteration.component';
import { CdcComponent } from './components/facts/cdc/cdc.component';
import { FactsComponent } from './components/facts/facts.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'projects/:field',component:ProjectComponent},

  {path:'interior',component:InteriorComponent},

  // {path:'team',component:TheTeamComponent},

  {path:'nahb',component:NahbComponent},

  {path:'contact',component:ContactComponent},

  {path:'aboutus',component:AboutUsComponent},
  // {path:'aboutus1',component:AboutUs1Component},
  {path: 'facts' , component:FactsComponent ,children:[
    {path:'beforebuilding', component:BeforebuildingComponent},
    // {path:'cdc', component:CdcComponent},

    {path:'timetoconsider', component:TimingToConsiderComponent},
    {path:'expensestoconsider', component:ExpensesToConsiderComponent},
    {path:'architects', component:ArchitectsComponent},
    {path:'housekeeping', component:HouseKeepingComponent},
    {path:'alterations', component:AlterationComponent},


  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
