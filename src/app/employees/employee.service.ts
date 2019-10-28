
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeeService {
    private listEmployees = [
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

    getEmployees() {
        return this.listEmployees;
    }
}