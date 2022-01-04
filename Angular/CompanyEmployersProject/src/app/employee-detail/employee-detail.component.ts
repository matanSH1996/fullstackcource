import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employers/employee';
import { SendmailComponent } from '../sendmail/sendmail.component';
import { MessageService } from '../message.service';
import { EMPLOYEES } from '../list-employees';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  
  sentMailStatus():void {
    this.messageService.add(`The email was sent successfully`);
  }

  @Input() employee? : Employee;

  displayMailDiv = false;

  toggleMailDiv(){
    this.displayMailDiv = !this.displayMailDiv;
  }

  ngOnInit(): void {
    
  }

}