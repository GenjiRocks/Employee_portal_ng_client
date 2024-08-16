import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import Swal from 'sweetalert2';
import { EmployeeModel } from 'src/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent {
  employeeDetails:EmployeeModel = {}
  // empUsername: string = '';
  // empEmail: string = '';
  // empStatus: string = '';

  constructor(private api:ApiService, private router:Router){}

  // cancel function reset data
cancel(){
  this.employeeDetails = {}
  }

// adding employee
addEmployee(){
  console.log(this.employeeDetails);
  this.api.addEmployeeApi(this.employeeDetails).subscribe({
    next:(res:any)=>{
      console.log(res);
      Swal.fire({
        title: 'Wow',
        text: 'Employee Added Successfully',
        icon: 'success',
      })
      this.router.navigateByUrl('/employee')
    },
    error:(err:any)=>{
      console.log(err);
      Swal.fire({
        title: 'Oops',
        text: 'Something went down',
        icon: 'error',
      })
    }
  })
  

}

}

