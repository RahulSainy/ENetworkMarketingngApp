import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessownerComponent } from './businessowner.component';

describe('BusinessownerComponent', () => {
  let component: BusinessownerComponent;
  let fixture: ComponentFixture<BusinessownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessownerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
