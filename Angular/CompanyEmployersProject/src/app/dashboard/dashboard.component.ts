import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee} from '../employers/employee';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  employeesArr: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {

    //each time we click on the dashboard view, the app initializes the getEmployeesMethod(locate down below)
    this.getEmployeesMethod();
  }

  //the "getEmployeesMethod" method, calls the method "getEmployees" from the "employeeService" service and brings the list of employees into the "employeesArr" array, which knows to recieve the information.

  //slice() method extracts a section of an array and returns a new array(made by our choice). each number symbolizes the location of the part in the array, for example - slice(0,4) -> will show us the first (and "0" part located) of the array, till the 4 part of the array (the "3" part located)

  getEmployeesMethod(): void {   
    this.employeeService.getEmployees()
        .subscribe(topEmployees => this.employeesArr = topEmployees.slice(0, 4));
  }
}
