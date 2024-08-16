import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { EmployeeModel } from 'src/employee.model';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  // for displaying employees on tables
  allEmployee:EmployeeModel[] = []

  // searching key for binidng the input box
  searchKey: string = ""

  // fetching the system time
  time:any = new Date()

  constructor(private api:ApiService){}
  // OnInit interface is req 
  // ngoninit is a part of component life cycle, constructor shesham self invoking anu  ith so like useeffect pole in react
  ngOnInit(): void {
    this.getemployee()
  }

  getemployee(){
    this.api.getAllEmployee().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.allEmployee = res
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }

  // sorting by id function
  sortById(){
    this.allEmployee.sort((a:any,b:any)=>a.id-b.id)
  }

  // sort by name
  sortByName(){
    // localecompare return -1,1 or 0 [3 values]
    // before : -1 , after: 1 and equal: 0
    this.allEmployee.sort((a:any,b:any)=>a.empUsername.localeCompare(b.empUsername))
  }

  // function for removing employee
  removeEmployee(id:any){
    this.api.deleteEmployeeApi(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.getemployee()
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }

  // for generating pdf
  generatePdf(){
    //1, creating object for jsPdf
    const pdf = new jsPDF();
    let head=[['id','username','Email','Status']]
    let body:any = []
    this.allEmployee.forEach((item:any)=>{
      // remove admin id from email
      if(item.id!='1'){
        body.push([
          item.id,
          item.empUsername,
          item.empEmail,
          item.empStatus
        ])
      }
      body.push()
    })
    
    // setting up fontsize
    pdf.setFontSize(15)
    // adding header
    pdf.text('Employee List',10,10)

    //2, call autotable funtion
    autoTable(pdf,{head, body})

    // to open in new tab
    pdf.output('dataurlnewwindow')

    //3, save pdf , download
    pdf.save('employee.pdf')
  }

}
