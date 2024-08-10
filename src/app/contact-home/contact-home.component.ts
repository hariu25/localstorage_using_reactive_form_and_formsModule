import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-home',
  templateUrl: './contact-home.component.html',
  styleUrls: ['./contact-home.component.css'],
})
export class ContactHomeComponent implements OnInit {
  employeeObj!: EmployeeObj;

  sortBy: string = '';
  searchText: string = '';
  employeeArr: EmployeeObj[] = [];

  listData: any[] = [];

  constructor(private router: Router, private fb: FormBuilder) {
    this.employeeObj = new EmployeeObj();
  }
  ngOnInit(): void {
    // this.myForms = this.fb.group({
    //   firstname: [''],
    //   lastname: [''],
    //   technology: [''],
    //   designation: [''],
    //   skills: [''],
    //   expertise: [''],
    //   certifications: ['No'],
    //   certificateDetails: [''],
    //   company: [''],
    //   comments: [''],
    // });

    this.getData();
  }

  addContact() {
    debugger;
    // localStorage.setItem('list', JSON.stringify(this.myForms.value));
    this.employeeArr.push(this.employeeObj);

    const isData = localStorage.getItem('list');

    if (isData == null) {
      const newArr = [];
      newArr.push(this.employeeObj);
      this.employeeObj.EmployeeId = 0;
      localStorage.setItem('list', JSON.stringify(newArr));
    } else {
      const oldData = JSON.parse(isData);

      const newId = oldData.length + 1;
      this.employeeObj.EmployeeId = newId;
      console.log('old Data', newId);

      oldData.push(this.employeeObj);

      localStorage.setItem('list', JSON.stringify(oldData));
    }
    this.getData();
  }

  getData() {
    debugger;
    const isData = localStorage.getItem('list');
    if (isData) {
      this.employeeArr = JSON.parse(isData);
    } else {
      this.employeeArr = []; // Initialize as empty array if no data is found
    }
  }

  deleteData(item: EmployeeObj) {
    debugger;
    this.employeeArr = this.employeeArr.filter(
      (emp) => emp.EmployeeId !=item.EmployeeId
    );
    localStorage.setItem('list', JSON.stringify(this.employeeArr));
  }

  onEdit(data: EmployeeObj) {
    this.employeeObj = data;

  }
  onSearch(){
    const isData = localStorage.getItem('list');
    if (isData !=null) {
      this.employeeArr = JSON.parse(isData);
    }
    if (this.searchText) {
      this.employeeArr = this.employeeArr.filter((emp) => {
        if (this.sortBy === 'Name') {
          return emp.FirstName.toLowerCase().includes(this.searchText.toLowerCase());
        } else if (this.sortBy === 'Technology') {
          return emp.Technology.toLowerCase().includes(this.searchText.toLowerCase());
        } else if (this.sortBy === 'Designation') {
          return emp.Designation.toLowerCase().includes(this.searchText.toLowerCase());
        } else if (this.sortBy === 'Skill') {
          return emp.Skills.toLowerCase().includes(this.searchText.toLowerCase());
        } else if (this.sortBy === 'Core Expertise') {
          return emp.Expertise.toLowerCase().includes(this.searchText.toLowerCase());
        } else if (this.sortBy === 'Company') {
          return emp.Company.toLowerCase().includes(this.searchText.toLowerCase());
        } else if (this.sortBy === 'Certificate') {
          return emp.CertificateDetails.toLowerCase().includes(this.searchText.toLowerCase());
        }
        return false;
      });
    }

  }
}

export class EmployeeObj {
  EmployeeId: number;
  FirstName: string;
  LastName: string;
  Technology: string;
  Designation: string;
  Skills: string;
  Expertise: string;
  Certifications: string;

  CertificateDetails: string;

  Company: string;
  Comments: string;
  constructor() {
    (this.FirstName = ''),
      (this.LastName = ''),
      (this.Technology = ''),
      (this.Designation = ''),
      (this.Skills = ''),
      (this.Expertise = ''),
      (this.Certifications = ''),
      (this.CertificateDetails = ''),
      (this.Company = ''),
      (this.Comments = '');
    this.EmployeeId = 0;
  }
}
