import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { EmployersComponent } from './employers/employers.component';
import { FormsModule } from '@angular/forms';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { SendmailComponent } from './sendmail/sendmail.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EmployeesRoutingComponent } from './employees-routing/employees-routing.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    EmployersComponent,
    EmployeeDetailComponent,
    MessagesComponent,
    SendmailComponent,
    DashboardComponent,
    HomePageComponent,
    EmployeesRoutingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],

  // exports: [InMemoryDataService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }