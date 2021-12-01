import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.css']
})
export class EmployersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  employee : Employee = {
    id : 205962178,
    firstName : 'matan',
    lastName : 'shtern',
    dateOfBirth : '02.02.1996',
    salary : 8000,
    email : 'matan.shtern2@gmail.com'
  };

  employee1 : Employee = {
    id : 312030405,
    firstName : 'dror',
    lastName : 'abas',
    dateOfBirth : '01.01.1997',
    salary : 8000,
    email : 'dror.abas@gmail.com'
  };

  employee2 : Employee = {
    id : 252030405,
    firstName : 'liran',
    lastName : 'levi',
    dateOfBirth : '26.08.1997',
    salary : 10000,
    email : 'liraniba@gmail.com'
  };

  employee3 : Employee = {
    id : 12345678,
    firstName : 'lavi',
    lastName : 'shtern',
    dateOfBirth : '15.04.2000',
    salary : 12000,
    email : 'laviSH@gmail.com'
  };

}
