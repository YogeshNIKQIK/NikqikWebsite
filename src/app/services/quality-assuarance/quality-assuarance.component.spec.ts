import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityAssuaranceComponent } from './quality-assuarance.component';

describe('QualityAssuaranceComponent', () => {
  let component: QualityAssuaranceComponent;
  let fixture: ComponentFixture<QualityAssuaranceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QualityAssuaranceComponent]
    });
    fixture = TestBed.createComponent(QualityAssuaranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
