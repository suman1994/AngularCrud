import { Component, OnInit } from '@angular/core';
import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  // selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  // Employee = Array();
  // employees: Employee = [
    Employee = [
    {
      id:1,
      name: 'Suman Arora',
      gender: 'Female',
      phoneNumber: 123456789,
      contactPreference: 'Phone',
      dateOfBirth: new Date('04-09-1994'),
      department: 'Software Developer',
      isActive: true,
      photoPath: 'assets/images/person_5.jpg'
    },
    {
      id:1,
      name: 'John',
      gender: 'Male',
      phoneNumber: 123456789,
      contactPreference: 'Phone',
      dateOfBirth: new Date('04-09-1994'),
      department: 'Web Developer',
      isActive: true,
      photoPath: 'assets/images/person_4.jpg'
    },
    {
      id:1,
      name: 'Maris',
      gender: 'Male',
      phoneNumber: 123456789,
      contactPreference: 'Phone',
      dateOfBirth: new Date('04-09-1994'),
      department: 'Graphics Developer',
      isActive: true,
      photoPath: 'assets/images/person_3.jpg'
    },
    {
      id:1,
      name: 'Mark Son',
      gender: 'Male',
      phoneNumber: 123456789,
      contactPreference: 'Phone',
      dateOfBirth: new Date('04-09-1994'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/person_2.jpg'
    }
  ];
  constructor(
    private router : Router,
    private http: HttpClient) { }
  
  
  allUsers;
  ngOnInit() {
    var inst = this;
    this.http.get("http://localhost:3000/allUsers").subscribe(function(results){      //node json
      inst.allUsers  = results;
    });
  }

}
