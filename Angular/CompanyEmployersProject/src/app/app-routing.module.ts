import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployersComponent } from './employers/employers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesRoutingComponent } from './employees-routing/employees-routing.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

const routes: Routes = [
  {path: '',redirectTo:'/dashboard', pathMatch: 'full'},
  {path: 'details/:id', component: EmployeeDetailComponent}, 
  {path: 'employees-datasheet', component: EmployersComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'employees-routing', component: EmployeesRoutingComponent},
  {path: 'homepage', component: HomePageComponent},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
