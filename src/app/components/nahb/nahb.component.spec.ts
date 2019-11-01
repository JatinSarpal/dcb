import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NahbComponent } from './nahb.component';

describe('NahbComponent', () => {
  let component: NahbComponent;
  let fixture: ComponentFixture<NahbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NahbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NahbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
