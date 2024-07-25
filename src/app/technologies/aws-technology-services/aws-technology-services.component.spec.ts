import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsTechnologyServicesComponent } from './aws-technology-services.component';

describe('AwsTechnologyServicesComponent', () => {
  let component: AwsTechnologyServicesComponent;
  let fixture: ComponentFixture<AwsTechnologyServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AwsTechnologyServicesComponent]
    });
    fixture = TestBed.createComponent(AwsTechnologyServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
