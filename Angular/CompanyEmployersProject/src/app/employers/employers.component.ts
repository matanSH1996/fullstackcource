import { Component, OnInit } from '@angular/core';
// import { EMPLOYEES } from '../list-employees';
import { Employee } from './employee';
import { EmployeeService } from '../employee.service';
import { MessageService } from '../message.service';


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

  this.messageService.add(`Employee Component: Selected employee id= ${employee.id}`); 
  }


  constructor(private employeeService: EmployeeService, private messageService: MessageService) { }

  getEmployees(): void {
    // this.listOfEmployees = this.employeeService.getEmployees();
    this.employeeService.getEmployees()
    .subscribe(employees => this.listOfEmployees = employees);
  }
  
  ngOnInit(): void {
    this.getEmployees();
  }

  
}

