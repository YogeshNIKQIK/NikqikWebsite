import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicelyTechnologySolutionsComponent } from './servicely-technology-solutions.component';

describe('ServicelyTechnologySolutionsComponent', () => {
  let component: ServicelyTechnologySolutionsComponent;
  let fixture: ComponentFixture<ServicelyTechnologySolutionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicelyTechnologySolutionsComponent]
    });
    fixture = TestBed.createComponent(ServicelyTechnologySolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
