import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';
import { AngularFireModule } from '@angular/fire';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddMoodItemComponent } from './add-mood-item/add-mood-item.component';
import { FormsModule } from '@angular/forms';
import { DailyQuoteComponent } from './daily-quote/daily-quote.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { MoodChartComponent } from './mood-chart/mood-chart.component';
import { PastReflectionComponent } from './past-reflection/past-reflection.component';

var config = {
  apiKey: "AIzaSyDc58a8KmQMX3xdceN_26PT1Lx0W8Xxk1Y",
  authDomain: "better-days-af2f6.firebaseapp.com",
  databaseURL: "https://better-days-af2f6.firebaseio.com",
  projectId: "better-days-af2f6",
  storageBucket: "better-days-af2f6.appspot.com",
  messagingSenderId: "427739240821",
  appId: "1:427739240821:web:d2a83a528619863b2b9b3c",
  measurementId: "G-SDZLYD1TJK"
};

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    UserProfileComponent,
    AddMoodItemComponent,
    DailyQuoteComponent,
    LoadingSpinnerComponent,
    MoodChartComponent,
    PastReflectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
    AngularFireModule.initializeApp(config),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
