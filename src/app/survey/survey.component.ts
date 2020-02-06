import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service'

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  date:string = new Date().toLocaleDateString();
  startSurvey: boolean = false; // if true, display daily-mood-form
  constructor(public auth: AuthService) { }
  ngOnInit() {
  }

  onClick() {
    this.startSurvey = true;
  }

}
