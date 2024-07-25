import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrosoftTechnologySolutionsComponent } from './microsoft-technology-solutions.component';

describe('MicrosoftTechnologySolutionsComponent', () => {
  let component: MicrosoftTechnologySolutionsComponent;
  let fixture: ComponentFixture<MicrosoftTechnologySolutionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MicrosoftTechnologySolutionsComponent]
    });
    fixture = TestBed.createComponent(MicrosoftTechnologySolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
