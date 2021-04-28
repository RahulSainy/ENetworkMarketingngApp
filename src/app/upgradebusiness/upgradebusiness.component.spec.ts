import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradebusinessComponent } from './upgradebusiness.component';

describe('UpgradebusinessComponent', () => {
  let component: UpgradebusinessComponent;
  let fixture: ComponentFixture<UpgradebusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgradebusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradebusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
