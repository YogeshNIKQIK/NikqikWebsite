import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshworksTechnologySolutionsComponent } from './freshworks-technology-solutions.component';

describe('FreshworksTechnologySolutionsComponent', () => {
  let component: FreshworksTechnologySolutionsComponent;
  let fixture: ComponentFixture<FreshworksTechnologySolutionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreshworksTechnologySolutionsComponent]
    });
    fixture = TestBed.createComponent(FreshworksTechnologySolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
