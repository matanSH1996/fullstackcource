import { Injectable } from '@angular/core';
import { EMPLOYEES } from './list-employees';
import { Employee } from './employers/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getEmployees(): Employee[] {
    return EMPLOYEES;
  }


}
