import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesToConsiderComponent } from './expenses-to-consider.component';

describe('ExpensesToConsiderComponent', () => {
  let component: ExpensesToConsiderComponent;
  let fixture: ComponentFixture<ExpensesToConsiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensesToConsiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesToConsiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
