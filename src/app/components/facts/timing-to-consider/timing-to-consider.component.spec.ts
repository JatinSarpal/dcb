import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimingToConsiderComponent } from './timing-to-consider.component';

describe('TimingToConsiderComponent', () => {
  let component: TimingToConsiderComponent;
  let fixture: ComponentFixture<TimingToConsiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimingToConsiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimingToConsiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
