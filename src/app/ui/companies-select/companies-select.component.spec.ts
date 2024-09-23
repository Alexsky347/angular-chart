import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesSelectComponent } from './companies-select.component';

describe('CompaniesSelectComponent', () => {
  let component: CompaniesSelectComponent;
  let fixture: ComponentFixture<CompaniesSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompaniesSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompaniesSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
