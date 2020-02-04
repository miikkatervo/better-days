import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodSurveyItemComponent } from './mood-survey-item.component';

describe('MoodSurveyItemComponent', () => {
  let component: MoodSurveyItemComponent;
  let fixture: ComponentFixture<MoodSurveyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoodSurveyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodSurveyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
