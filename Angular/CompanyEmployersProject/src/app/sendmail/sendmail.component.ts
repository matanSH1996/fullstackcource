import { Component, OnInit } from '@angular/core';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { Employee } from '../employers/employee';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.css']
})
export class SendmailComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
