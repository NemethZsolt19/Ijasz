import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckreservedComponent } from './checkreserved.component';

describe('CheckreservedComponent', () => {
  let component: CheckreservedComponent;
  let fixture: ComponentFixture<CheckreservedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckreservedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckreservedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
