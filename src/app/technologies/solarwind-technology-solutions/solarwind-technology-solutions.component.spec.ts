import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarwindTechnologySolutionsComponent } from './solarwind-technology-solutions.component';

describe('SolarwindTechnologySolutionsComponent', () => {
  let component: SolarwindTechnologySolutionsComponent;
  let fixture: ComponentFixture<SolarwindTechnologySolutionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolarwindTechnologySolutionsComponent]
    });
    fixture = TestBed.createComponent(SolarwindTechnologySolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
