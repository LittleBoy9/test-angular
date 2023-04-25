import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
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

const routes: Routes = [
  { path: '', component: HomeComponent },
  // {loadChildren: () => import('./about/').then(m => m.ModuleaModule) },
  { path: 'about', component: AboutComponent },
  { path: 'blog1', component: Blog1Component },
  { path: 'blog2', component: Blog2Component },
  { path: 'blog3', component: Blog3Component },
  { path: 'blog4', component: Blog4Component },
  { path: 'blog5', component: Blog5Component },
  { path: 'blog6', component: Blog6Component },
  { path: 'blog7', component: Blog7Component },
  { path: 'blog8', component: Blog8Component },
  { path: 'blog9', component: Blog9Component },
  { path: 'blog10', component: Blog10Component },
  { path: 'blog11', component: Blog11Component },
  { path: 'blog12', component: Blog12Component },
  { path: 'blog13', component: Blog13Component },
  { path: 'blog14', component: Blog14Component },
  { path: 'blog15', component: Blog15Component },

];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
