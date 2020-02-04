import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  date:string = new Date().toLocaleDateString();
  startSurvey: boolean = false;
  constructor(public auth: AuthService, private router: Router) { }
  ngOnInit() {
  }

  onClick() {
    this.startSurvey = true;
  }

}
