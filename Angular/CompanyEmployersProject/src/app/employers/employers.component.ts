import { Component, OnInit } from '@angular/core';
// import { EMPLOYEES } from '../list-employees';
import { Employee } from './employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.css']
})
export class EmployersComponent implements OnInit {

  listOfEmployees: Employee[] = [];

  selectedEmployee?: Employee;
  onSelect(employee: Employee) :void{
  this.selectedEmployee = employee;
  }


  constructor(private employeeService: EmployeeService) { }

  getEmployees(): void {
    this.listOfEmployees = this.employeeService.getEmployees();
  }
  
  ngOnInit(): void {
    this.getEmployees();
  }

  
}

