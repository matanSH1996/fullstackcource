import { Injectable } from '@angular/core';
import { EMPLOYEES } from './list-employees';
import { Employee } from './employers/employee';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getEmployees():Observable<Employee[]> {
    const employees = of(EMPLOYEES);
    return employees;
    // return EMPLOYEES;
  }


}
