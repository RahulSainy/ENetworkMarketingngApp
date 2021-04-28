import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessnetworkComponent } from './businessnetwork.component';

describe('BusinessnetworkComponent', () => {
  let component: BusinessnetworkComponent;
  let fixture: ComponentFixture<BusinessnetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessnetworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessnetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
