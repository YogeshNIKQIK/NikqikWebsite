import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UipathTechnologySolutionsComponent } from './uipath-technology-solutions.component';

describe('UipathTechnologySolutionsComponent', () => {
  let component: UipathTechnologySolutionsComponent;
  let fixture: ComponentFixture<UipathTechnologySolutionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UipathTechnologySolutionsComponent]
    });
    fixture = TestBed.createComponent(UipathTechnologySolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
