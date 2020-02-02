import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service'
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  date:string = new Date().toLocaleDateString();
  constructor(public auth: AuthService) { }
  ngOnInit() {
  }

}
