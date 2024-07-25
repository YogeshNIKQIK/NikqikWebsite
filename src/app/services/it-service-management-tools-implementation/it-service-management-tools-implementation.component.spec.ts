import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItServiceManagementToolsImplementationComponent } from './it-service-management-tools-implementation.component';

describe('ItServiceManagementToolsImplementationComponent', () => {
  let component: ItServiceManagementToolsImplementationComponent;
  let fixture: ComponentFixture<ItServiceManagementToolsImplementationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItServiceManagementToolsImplementationComponent]
    });
    fixture = TestBed.createComponent(ItServiceManagementToolsImplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
