import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyComponent } from './survey/survey.component';
import { AuthGuard } from './auth.guard'
import { AddMoodItemComponent } from './add-mood-item/add-mood-item.component';

const routes: Routes = [

  { path: 'survey', component: SurveyComponent,  canActivate: [AuthGuard] },
  { path: 'add-mood', component: AddMoodItemComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
