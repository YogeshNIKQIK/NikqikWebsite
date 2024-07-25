import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAnalysisComponent } from './business-analysis.component';

describe('BusinessAnalysisComponent', () => {
  let component: BusinessAnalysisComponent;
  let fixture: ComponentFixture<BusinessAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessAnalysisComponent]
    });
    fixture = TestBed.createComponent(BusinessAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
