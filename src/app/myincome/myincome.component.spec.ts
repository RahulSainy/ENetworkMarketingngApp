import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyincomeComponent } from './myincome.component';

describe('MyincomeComponent', () => {
  let component: MyincomeComponent;
  let fixture: ComponentFixture<MyincomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyincomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyincomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
