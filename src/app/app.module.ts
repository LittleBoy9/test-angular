import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Blog1Component } from './blog1/blog1.component';
import { Blog2Component } from './blog2/blog2.component';
import { Blog3Component } from './blog3/blog3.component';
import { Blog4Component } from './blog4/blog4.component';
import { Blog5Component } from './blog5/blog5.component';
import { Blog6Component } from './blog6/blog6.component';
import { Blog7Component } from './blog7/blog7.component';
import { Blog8Component } from './blog8/blog8.component';
import { Blog9Component } from './blog9/blog9.component';
import { Blog10Component } from './blog10/blog10.component';
import { Blog11Component } from './blog11/blog11.component';
import { Blog12Component } from './blog12/blog12.component';
import { Blog13Component } from './blog13/blog13.component';
import { Blog14Component } from './blog14/blog14.component';
import { Blog15Component } from './blog15/blog15.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    Blog1Component,
    Blog2Component,
    Blog3Component,
    Blog4Component,
    Blog5Component,
    Blog6Component,
    Blog7Component,
    Blog8Component,
    Blog9Component,
    Blog10Component,
    Blog11Component,
    Blog12Component,
    Blog13Component,
    Blog14Component,
    Blog15Component,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
