import { Component, OnInit } from '@angular/core';
import { MoodService } from '../core/mood.service';
import { Chart } from 'chart.js';
import { ViewChild, ElementRef } from '@angular/core';
import { DailyQuoteComponent } from '../daily-quote/daily-quote.component';

@Component({
  selector: 'app-mood-chart',
  templateUrl: './mood-chart.component.html',
  styleUrls: ['./mood-chart.component.css']
})
export class MoodChartComponent implements OnInit {

  values: Array<number>;
  labels: Array<string>;
  moodChart;

  constructor(private moodService: MoodService, private dailyQuote: DailyQuoteComponent) { }

  ngOnInit() {
    this.getLatestMoods();
  }

async getLatestMoods()  {
   await this.moodService.getMood().subscribe(moods => {
     const sortByDate = moods.sort(function(a,b){
      return b.date.toDate() - a.date.toDate();
    }).reverse();
    const moodValues = sortByDate.map(x => Number(x.mood));
    const dateLabels = sortByDate.map(y => y.date.toDate().toLocaleDateString())
    var max = 10;
    if (moodValues.length < max) max = moodValues.length;
    this.values = moodValues.slice(0, max);
    this.labels = dateLabels.slice(0, max);
    this.moodChart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [
          {
            data: this.values,
            borderColor: 'orange',
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        }
      }
    });
  })
}
goBack() {
  this.dailyQuote.showChart = !this.dailyQuote.showChart;
}

}
