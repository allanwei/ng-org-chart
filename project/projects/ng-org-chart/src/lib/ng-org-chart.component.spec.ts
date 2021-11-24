import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOrgChartComponent } from './ng-org-chart.component';

describe('NgOrgChartComponent', () => {
  let component: NgOrgChartComponent;
  let fixture: ComponentFixture<NgOrgChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgOrgChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOrgChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
