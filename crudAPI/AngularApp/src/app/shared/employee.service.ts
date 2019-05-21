import { Employee } from './employee.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, from } from 'rxjs';
// import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeeService {
  selectedEmployee: Employee;
  employees: Employee[];
  constructor() { }
}
