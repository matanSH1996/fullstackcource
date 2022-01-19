import { Injectable } from '@angular/core';
import { EMPLOYEES } from './list-employees';
import { Employee } from './employers/employee';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getEmployees():Observable<Employee[]> {
    // const employees = of(EMPLOYEES);
    this.messageService.add('Employee Service message: all employees were updated!');    
    // return employees;
    return this.http.get<Employee[]>(this.employeesUrl)
  }

  //after recieveing the employee's id as a number (from employee-detail), this function will start run
  getSingleEmployee(id: number): Observable<Employee> { 
    const employee = EMPLOYEES.find(flag => flag.id === id)!; //this function will run over the list-employees (throught the "EMPLOYEES" const), with the "find" method, to find the match employee's ID.
    this.messageService.add(`Employee Service: fetched employee id=${id}`);
    return of(employee);
  }

  private log(message: string) {this.messageService.add(`Employee Service's message: ${message}`);
  }
 
  private employeesUrl = 'api/employees';  // URL to web api


  constructor(private messageService: MessageService,private http: HttpClient) { }
  }