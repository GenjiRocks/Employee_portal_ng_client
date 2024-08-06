import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { AdComponent } from './ad/ad.component';
import { PgnotfoundComponent } from './pgnotfound/pgnotfound.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'add-employee',component:AdComponent},
  {path:'**',component:PgnotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
