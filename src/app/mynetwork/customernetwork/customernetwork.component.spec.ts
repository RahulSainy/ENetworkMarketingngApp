import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomernetworkComponent } from './customernetwork.component';

describe('CustomernetworkComponent', () => {
  let component: CustomernetworkComponent;
  let fixture: ComponentFixture<CustomernetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomernetworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomernetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
