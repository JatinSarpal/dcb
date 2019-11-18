import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SlideshowModule} from 'ng-simple-slideshow';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { InteriorComponent } from './components/interior/interior.component';
import { NahbComponent } from './components/nahb/nahb.component';
import { TheTeamComponent } from './components/the-team/the-team.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectComponent } from './components/project/project.component';
import { FactsComponent } from './components/facts/facts.component';
import { AboutUs1Component } from './components/about-us1/about-us1.component';
import { BeforebuildingComponent } from './components/facts/beforebuilding/beforebuilding.component';
import { ArchitectsComponent } from './components/facts/architects/architects.component';
import { TimingToConsiderComponent } from './components/facts/timing-to-consider/timing-to-consider.component';
import { ExpensesToConsiderComponent } from './components/facts/expenses-to-consider/expenses-to-consider.component';
import { HouseKeepingComponent } from './components/facts/house-keeping/house-keeping.component';
import { AlterationComponent } from './components/facts/alteration/alteration.component';
import { CdcComponent } from './components/facts/cdc/cdc.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    AboutUsComponent,
    InteriorComponent,
    NahbComponent,
    TheTeamComponent,
    ContactComponent,
    ProjectComponent,
    FactsComponent,
    AboutUs1Component,
    BeforebuildingComponent,
    ArchitectsComponent,
    TimingToConsiderComponent,
    ExpensesToConsiderComponent,
    HouseKeepingComponent,
    AlterationComponent,
    CdcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlideshowModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
