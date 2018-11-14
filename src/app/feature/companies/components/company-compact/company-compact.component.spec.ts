import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCompactComponent } from './company-compact.component';

describe('CompanyCompactComponent', () => {
  let component: CompanyCompactComponent;
  let fixture: ComponentFixture<CompanyCompactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyCompactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
