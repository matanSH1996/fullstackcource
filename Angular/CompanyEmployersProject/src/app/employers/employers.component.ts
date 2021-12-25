import { Component, OnInit } from '@angular/core';
import { EMPLOYEES } from '../list-employees';
import { Employee } from './employee';


@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.css']
})
export class EmployersComponent implements OnInit {

  listOfEmployees = EMPLOYEES;
  selectedEmployee?: Employee;
  onSelect(employee: Employee) :void{
  this.selectedEmployee = employee;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
