import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdCustomerComponent } from './upd-customer.component';

describe('UpdCustomerComponent', () => {
  let component: UpdCustomerComponent;
  let fixture: ComponentFixture<UpdCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
