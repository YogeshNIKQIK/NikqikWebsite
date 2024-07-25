import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicenowTechnologyPartnerComponent } from './servicenow-technology-partner.component';

describe('ServicenowTechnologyPartnerComponent', () => {
  let component: ServicenowTechnologyPartnerComponent;
  let fixture: ComponentFixture<ServicenowTechnologyPartnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicenowTechnologyPartnerComponent]
    });
    fixture = TestBed.createComponent(ServicenowTechnologyPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
