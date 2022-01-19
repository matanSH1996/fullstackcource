import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesRoutingComponent } from './employees-routing.component';

describe('EmployeesRoutingComponent', () => {
  let component: EmployeesRoutingComponent;
  let fixture: ComponentFixture<EmployeesRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
