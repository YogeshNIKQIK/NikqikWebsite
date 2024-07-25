import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedServicesComponent } from './managed-services.component';

describe('ManagedServicesComponent', () => {
  let component: ManagedServicesComponent;
  let fixture: ComponentFixture<ManagedServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagedServicesComponent]
    });
    fixture = TestBed.createComponent(ManagedServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
