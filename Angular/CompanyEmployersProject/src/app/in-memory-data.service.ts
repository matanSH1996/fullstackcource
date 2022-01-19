import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from './employers/employee';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees = [
      {employeeNumber: 1276833, id: 205962178, firstName: 'matan', lastName: 'shtern', dateOfBirth: '02/02/1996', salary: 8000, email: 'matan.shtern2@gmail.com'},
      {employeeNumber: 1276834, id: 312030405, firstName: 'dror', lastName: 'abas', dateOfBirth: '01/01/1997', salary: 8000, email: 'dror.abas@gmail.com'},
      {employeeNumber: 1276835, id: 252030405, firstName: 'liran', lastName: 'levi', dateOfBirth: '01/01/1999', salary: 10000, email: 'liraniba@gmail.com'},
      {employeeNumber: 1276836, id: 87654321, firstName: 'employee', lastName: 'one', dateOfBirth: '01/01/1999', salary: 1000, email: 'employee@gmail.com'},
      {employeeNumber: 1276837, id: 65434567, firstName: 'dikla', lastName: 'eliaho', dateOfBirth: '01/01/1999', salary: 1500, email: 'dikla@gmail.com'},
      {employeeNumber: 1276838, id: 12387645, firstName: 'shlomi', lastName: 'shlomai', dateOfBirth: '01/01/1999', salary: 2000, email: 'shlomi@gmail.com'},
      {employeeNumber: 1276839, id: 45698745, firstName: 'lior', lastName: 'rozen', dateOfBirth: '01/01/1999', salary: 2500, email: 'lior@gmail.com'},
      {employeeNumber: 1276840, id: 12345678, firstName: 'lavi', lastName: 'shtern', dateOfBirth: '01/01/1993', salary: 12000, email: 'laviSH@gmail.com'}
    ];
    return {employees}
  }

  
  genId(employees: Employee[]): number {
    return employees.length > 0 ? Math.max(...employees.map(employee => employee.employeeNumber)) + 1 : 12768733;
  }
}

