import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesforceTechnologyServicesComponent } from './salesforce-technology-services.component';

describe('SalesforceTechnologyServicesComponent', () => {
  let component: SalesforceTechnologyServicesComponent;
  let fixture: ComponentFixture<SalesforceTechnologyServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesforceTechnologyServicesComponent]
    });
    fixture = TestBed.createComponent(SalesforceTechnologyServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
