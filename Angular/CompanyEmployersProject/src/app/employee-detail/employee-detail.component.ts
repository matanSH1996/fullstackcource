import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employers/employee';
import { SendmailComponent } from '../sendmail/sendmail.component';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() employee? : Employee;
  
  // isClicked = true;
  // onClick(){
  //   this.isClicked = !this.isClicked;
  // }

  sendMail(){
    this.sendMail
  }
}
