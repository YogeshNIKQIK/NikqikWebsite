import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItServiceManagementProcessConsultingComponent } from './it-service-management-process-consulting.component';

describe('ItServiceManagementProcessConsultingComponent', () => {
  let component: ItServiceManagementProcessConsultingComponent;
  let fixture: ComponentFixture<ItServiceManagementProcessConsultingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItServiceManagementProcessConsultingComponent]
    });
    fixture = TestBed.createComponent(ItServiceManagementProcessConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
