import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforebuildingComponent } from './beforebuilding.component';

describe('BeforebuildingComponent', () => {
  let component: BeforebuildingComponent;
  let fixture: ComponentFixture<BeforebuildingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeforebuildingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforebuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
