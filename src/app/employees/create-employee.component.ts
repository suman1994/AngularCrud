import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto = false;
  departments: Department[] = [
    { id: 1, name: 'Human Resource' },
    { id: 2, name: 'Help Desk' },
    { id: 3, name: 'Information Technology' },
    { id: 4, name: 'Accountant' },
  ];
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: '',
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    department: '',
    isActive: null,
    photoPath: null,
    password: null,
    confirmPassword: null
  };

  constructor(
    private router : Router,
    private http: HttpClient) { }

  togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit() {
  }
  gender = 'male';
  contactPreference = 'email';
  isActive = 'true';
  department = '';
  email;
  phoneNumber;
  fullName;

  saveEmployees(newEmployee: Employee): void {
    console.log(newEmployee);
    this.router.navigate(['list']);
  }

  saveEmployee(){
    console.log('suman');
    // console.log(empForm);
    var inst = this;
    // this.http.post("http://localhost:3000/addUsers",{inst.fullName:empForm.value.fullName,inst.gender:empForm.value.gender,inst.email:empForm.value.email,inst.phoneNumber:empForm.value.phoneNumber,inst.contactPreference:empForm.value.contactPreference,inst.isActive:empForm.value.isActive});
    this.http.post("http://localhost:3000/addUsers",{'fullName':inst.fullName,"gender":inst.gender,"email":inst.email,"phoneNumber":inst.phoneNumber,"contactPreference":inst.contactPreference,"isActive":inst.isActive});
    this.router.navigate(['list']);
  }

}
