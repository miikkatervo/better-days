import { Component, OnInit } from '@angular/core';
import { DailyQuoteComponent } from '../daily-quote/daily-quote.component';

@Component({
  selector: 'app-past-reflection',
  templateUrl: './past-reflection.component.html',
  styleUrls: ['./past-reflection.component.css']
})
export class PastReflectionComponent implements OnInit {

  pastFeeling: any;
  currentMood$: Number;
  constructor(public dailyQ: DailyQuoteComponent) { }

  ngOnInit() {
    this.pastFeeling = this.dailyQ.moods$;
    this.currentMood$ = this.dailyQ.currentMood$;
  }
  goBack() {
    this.dailyQ.showReflect = !this.dailyQ.showReflect;
  }

}
