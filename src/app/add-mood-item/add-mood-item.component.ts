import { Component, OnInit } from '@angular/core';
import { MoodService } from '../core/mood.service';
import { MoodSurveyItem } from '../models/mood-survey-item.model';
import { Router } from '@angular/router';
import { UsersMoodService } from '../core/users-mood.service';


@Component({
  selector: 'app-add-mood-item',
  templateUrl: './add-mood-item.component.html',
  styleUrls: ['./add-mood-item.component.css']
})
export class AddMoodItemComponent implements OnInit {
  moodItem: MoodSurveyItem = {
    mood: 5,
    onyourmind: '',
    grateful: '',
    date: new Date, 
  }
  surveyDone: boolean = false;
  constructor(private moodService: MoodService,
              private router: Router,
              private userMood: UsersMoodService) { }
  ngOnInit() {
  }


  onSubmit(){
    this.moodService.addItem(this.moodItem);
    this.userMood.currentMood$ = this.moodItem.mood;
    this.moodItem.onyourmind='';
    this.moodItem.grateful='';
    this.surveyDone = true
  }
}
