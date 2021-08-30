import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdUserComponent } from './upd-user.component';

describe('UpdUserComponent', () => {
  let component: UpdUserComponent;
  let fixture: ComponentFixture<UpdUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
