import { Component, OnInit } from '@angular/core';
import { Employee } from '../employers/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees-routing',
  templateUrl: './employees-routing.component.html',
  styleUrls: ['./employees-routing.component.css']
})
export class EmployeesRoutingComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  listOfEmployees: Employee[] = [];

  selectedEmployee?: Employee;
  onSelect(chosenEmployee: Employee) :void{
  this.selectedEmployee = chosenEmployee;
  }

  getEmployees(): void {
    // this.listOfEmployees = this.employeeService.getEmployees();
    this.employeeService.getEmployees()
    .subscribe(employees => this.listOfEmployees = employees);
  }
  
  ngOnInit(): void {
    this.getEmployees();
  }
}
