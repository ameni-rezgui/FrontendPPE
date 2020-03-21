import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashSectionComponent } from './dash-section.component';

describe('DashSectionComponent', () => {
  let component: DashSectionComponent;
  let fixture: ComponentFixture<DashSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
