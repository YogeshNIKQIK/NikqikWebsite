import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudContactCenterProfessionalServicesComponent } from './cloud-contact-center-professional-services.component';

describe('CloudContactCenterProfessionalServicesComponent', () => {
  let component: CloudContactCenterProfessionalServicesComponent;
  let fixture: ComponentFixture<CloudContactCenterProfessionalServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloudContactCenterProfessionalServicesComponent]
    });
    fixture = TestBed.createComponent(CloudContactCenterProfessionalServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
