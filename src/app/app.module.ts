import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DekComponent } from './dek/dek.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { SafePipe } from './safe.pipe';
import { NavComponent } from './nav/nav.component';
import { MailSubscriberComponent } from './mail-subscriber/mail-subscriber.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PortfolioComponent,
    DekComponent,
    AboutComponent,
    TeamComponent,
    ContactComponent,
    SafePipe,
    NavComponent,
    MailSubscriberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
