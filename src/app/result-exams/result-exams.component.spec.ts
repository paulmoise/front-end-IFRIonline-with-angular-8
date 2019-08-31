import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultExamsComponent } from './result-exams.component';

describe('ResultExamsComponent', () => {
  let component: ResultExamsComponent;
  let fixture: ComponentFixture<ResultExamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultExamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
