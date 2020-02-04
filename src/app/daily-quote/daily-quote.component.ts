import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../core/quote.service';
import { UsersMoodService } from '../core/users-mood.service';
import { MoodService } from '../core/mood.service';

@Component({
  selector: 'app-daily-quote',
  templateUrl: './daily-quote.component.html',
  styleUrls: ['./daily-quote.component.css']
})
export class DailyQuoteComponent implements OnInit {

  quote$: string;
  author$: string;
  moods$: Array<Object>;
  currentMood$: Number;
  feeling$:string;
  fcolor$:string;

  constructor(private quoteService: QuoteService,
              private userMood: UsersMoodService,
              private moodService: MoodService) { }

  ngOnInit() {
    this.quoteService.fetchDailyQuote().subscribe(quote => {
      const data = quote["contents"]["quotes"][0];
      this.quote$ = data["quote"];
      this.author$ = data["author"];
    });
    var mood: number = Number(this.userMood.currentMood$);
    this.helpMood(mood);
    const moodReps = [["red", "stressed"], ["yellow", "bugged out"], ["yellow", "ok"], ["green", "fine"], ["green", "great"]];
    this.feeling$ = moodReps[mood-1][1];
    this.fcolor$ = moodReps[mood-1][0];
  }

  helpMood(mood: Number) {
    this.currentMood$ = mood;
    if(mood >= 3) {
      this.moodService.getMood().subscribe(moods => {
        const data = moods.filter(x => x.mood <= 2 && x.onyourmind.length > 0).map(y=> y.onyourmind);
        this.moods$ = data[Math.floor(Math.random() * data.length)]
      });
    } else {
      this.moodService.getMood().subscribe(moods => {
        const data = moods.filter(x => x.mood >= 3 && x.grateful.length > 0).map(y=> y.grateful);
        this.moods$ = data[Math.floor(Math.random() * data.length)]
      });
    }
  }

}
