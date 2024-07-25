import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationalChangeManagementComponent } from './organizational-change-management.component';

describe('OrganizationalChangeManagementComponent', () => {
  let component: OrganizationalChangeManagementComponent;
  let fixture: ComponentFixture<OrganizationalChangeManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationalChangeManagementComponent]
    });
    fixture = TestBed.createComponent(OrganizationalChangeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
