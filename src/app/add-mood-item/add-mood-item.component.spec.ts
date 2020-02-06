import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoodItemComponent } from './add-mood-item.component';

describe('AddMoodItemComponent', () => {
  let component: AddMoodItemComponent;
  let fixture: ComponentFixture<AddMoodItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMoodItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMoodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
