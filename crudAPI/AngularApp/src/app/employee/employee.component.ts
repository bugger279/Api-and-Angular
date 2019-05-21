import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../shared/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm) {
    if (form) {
      form.reset();
      this.employeeService.selectedEmployee = {
        _id:"",
        name:"",
        position:"",
        office:"",
        salary:null
      }
    }
  }
}
