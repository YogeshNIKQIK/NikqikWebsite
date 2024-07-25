import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonTechnologySolutionsComponent } from './python-technology-solutions.component';

describe('PythonTechnologySolutionsComponent', () => {
  let component: PythonTechnologySolutionsComponent;
  let fixture: ComponentFixture<PythonTechnologySolutionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PythonTechnologySolutionsComponent]
    });
    fixture = TestBed.createComponent(PythonTechnologySolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
