import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../core/quote.service';
import { UsersMoodService } from '../core/users-mood.service';
import { MoodService } from '../core/mood.service';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-daily-quote',
  templateUrl: './daily-quote.component.html',
  styleUrls: ['./daily-quote.component.css']
})
export class DailyQuoteComponent implements OnInit {

  quote$: string;
  author$: string;
  moods$: any; // thought from the past
  currentMood$: Number;
  feeling$:string; 
  showChart:boolean; // if true, display mood-chart 
  showLoading:boolean = true; // if true, display loading-spinner
  showReflect:boolean = false; // if ture, display reflection-view

  constructor(private quoteService: QuoteService,
              private userMood: UsersMoodService,
              private moodService: MoodService,
              public auth: AuthService) { }

  ngOnInit() {
    this.quoteService.fetchDailyQuote().subscribe(quote => {
      const data = quote["contents"]["quotes"][0];
      this.quote$ = data["quote"];
      this.author$ = data["author"];
      this.showLoading = false;
    });
    var mood: number = Number(this.userMood.currentMood$);
    this.helpMood(mood);
    const moodReps = ["stressed","bugged out","ok","fine", "great"];
    this.feeling$ = moodReps[mood-1];
    this.showChart = this.moodService.showChart$;
  }

  helpMood(mood: number) {
    this.currentMood$ = mood;
    if(mood >= 3) {
      this.moodService.getMood().subscribe(moods => {
        const data = moods.filter(x => x.mood <= 2 && x.onyourmind.length > 0).map(y=> [y.onyourmind, y.date.toDate().toDateString()]);
        if(data.length > 0) this.moods$ = data[Math.floor(Math.random() * data.length)];
        else this.moods$ = ["No past mood yet",""];
      });
    } else {
      this.moodService.getMood().subscribe(moods => {
        const data = moods.filter(x => x.mood >= 3 && x.grateful.length > 0).map(y=> [y.grateful, y.date.toDate().toDateString()]);
        if(data.length > 0) this.moods$ = data[Math.floor(Math.random() * data.length)];
        else this.moods$ = ["No past mood yet",""];
      });
    }
  }

  changeToChart() {
    this.showChart = !this.showChart;
  }

}
