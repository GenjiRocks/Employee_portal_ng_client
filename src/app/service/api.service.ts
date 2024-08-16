import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serverUrl: string = 'http://localhost:3000';
  constructor(private http:HttpClient) { }
  // observable : asynchronous function resolving class, more than one function can be done , promise can only do one
  // predefined class : httpClient class
  // response is received using subscribe function 
  // two types of subscribe response : partial & call back
  /* 
    call back : no rejection scope [no poosibility of error to occur]
    partial observable : rejection scope, object - two keys - next and error
  */

    /* keys - next(positive response) & error (negative response) 
    any one of the keys will work at a time*/

    // for loginapi
    loginApi(){
      return this.http.get(`${this.serverUrl}/employee/1`)
    }

    // add employee
    addEmployeeApi(reqbody:any){
      return this.http.post(`${this.serverUrl}/employee`,reqbody)
    }

    // api to get all employees
    getAllEmployee(){
      return this.http.get(`${this.serverUrl}/employee`)
    }

    // api for deleting an employee
    deleteEmployeeApi(id:any){
      return this.http.delete(`${this.serverUrl}/employee/${id}`)
    }
}
