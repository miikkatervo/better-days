import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastReflectionComponent } from './past-reflection.component';

describe('PastReflectionComponent', () => {
  let component: PastReflectionComponent;
  let fixture: ComponentFixture<PastReflectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastReflectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastReflectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
