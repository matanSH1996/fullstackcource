import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employers/employee';
import { SendmailComponent } from '../sendmail/sendmail.component';
import { MessageService } from '../message.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private messageService: MessageService,
    private employeeService: EmployeeService,
    private location: Location) { }

  
  sentMailStatus():void {
    this.messageService.add(`The email was sent successfully`);
  }

  @Input() employee? : Employee;

  displayMailDiv = false;

  toggleMailDiv(){
    this.displayMailDiv = !this.displayMailDiv;
  }

  ngOnInit(): void {
    this.getEmployee();
  }
  
  getEmployee(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));//trnasform a string from the URL (the ID part), into a number
    this.employeeService.getSingleEmployee(id) //get the ID of a single employee from the "employeeService" service
      .subscribe(employee => this.employee = employee);
  }

  goBackToLastLocation(){
    this.location.back();
  }
}