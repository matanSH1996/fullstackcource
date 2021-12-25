import { Injectable } from '@angular/core';
import { EMPLOYEES } from './list-employees';
import { Employee } from './employers/employee';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getEmployees():Observable<Employee[]> {
    const employees = of(EMPLOYEES);
    this.messageService.add('Employee Service message: all employees were updated!');
    
    return employees;
    // return EMPLOYEES;
  }

  constructor(private messageService: MessageService) { }
}
