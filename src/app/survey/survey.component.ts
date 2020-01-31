import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  name:string = "Miikka";
  date:string = new Date().toLocaleDateString();
  constructor() { }

  ngOnInit() {
  }

}
