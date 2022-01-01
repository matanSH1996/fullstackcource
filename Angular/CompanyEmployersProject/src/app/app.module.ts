import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { EmployersComponent } from './employers/employers.component';
import { FormsModule } from '@angular/forms';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { SendmailComponent } from './sendmail/sendmail.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    EmployersComponent,
    EmployeeDetailComponent,
    MessagesComponent,
    SendmailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
