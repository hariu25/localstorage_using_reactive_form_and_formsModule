import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css'],
})
export class FormListComponent implements OnInit {
  employeeForm!: FormGroup;
  employeeObj!: EmployeeObj;
  sortBy: any;
  searchText: any;
  memberList: EmployeeObj[] = []; // Initialize as an empty array

  isCertificationsDisabled: boolean = false;
  constructor(private fb: FormBuilder) {
    this.employeeObj = new EmployeeObj();
  }
  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      FirstName: [''],
      LastName: [''],
      Technology: [''],
      Designation: [''],
      Skills: [''],
      Expertise: [''],
      Certifications: [{ value: '', disabled: true }],
      CertificateDetails: ['No'],
      Company: [''],
      Comments: [''],
      EmployeeId: [0]
    });

    // const storedData=localStorage.getItem('memberList')

    // if(storedData){
    //   this.memberList=JSON.parse(storedData)
    // }
    this.getData();
  }

  onEdit(data: EmployeeObj) {
    this.employeeObj = data;

    // Using setValue()

    // this.employeeForm.setValue(data);

//without using patchValue() or setValue(), is to create a new FormGroup with the data and replace the existing FormGroup:

    this.employeeForm = new FormGroup({
      FirstName: new FormControl(data.FirstName || ''),
      LastName: new FormControl(data.LastName || ''),
      Technology: new FormControl(data.Technology || ''),
      Designation: new FormControl(data.Designation || ''),
      Skills: new FormControl(data.Skills || ''),
      Expertise: new FormControl(data.Expertise || ''),
      Certifications: new FormControl(data.Certifications || ''),
      CertificateDetails: new FormControl(data.CertificateDetails || ''),
      Company: new FormControl(data.Company || ''),
      Comments: new FormControl(data.Comments || ''),
      EmployeeId: new FormControl(data.EmployeeId || '')
    });


    //PatchValue


    // this.employeeForm.patchValue({
    //   FirstName: data.FirstName,
    //   LastName: data.LastName,
    //   Technology: data.Technology,
    //   Designation: data.Designation,
    //   Skills: data.Skills,
    //   Expertise: data.Expertise,
    //   Certifications: data.Certifications,
    //   CertificateDetails: data.CertificateDetails,
    //   Company: data.Company,
    //   Comments: data.Comments,
    //   EmployeeId: data.EmployeeId
    // });
  }

  deleteData(data:any) {
    this.memberList = this.memberList.filter((item) => item !== data);


    localStorage.setItem('DataList', JSON.stringify(this.memberList));
  }

  addContact() {
    this.employeeObj = this.employeeForm.value; // Form data assigned

    this.memberList.push(this.employeeObj);

    const isData = localStorage.getItem('DataList');

    if (isData === null) {
      const newArr = [];
      newArr.push(this.employeeObj);
      this.employeeObj.EmployeeId = 1;
      localStorage.setItem('DataList', JSON.stringify(newArr));
    } else {
      const oldData = JSON.parse(isData);
      // const newId = oldData.length + 1;
      // this.employeeObj.EmployeeId = newId;
      // const newId = oldData.length + 1;

      oldData.push(this.employeeObj);
      localStorage.setItem("DataList",JSON.stringify(oldData))
    }

    // const isData = localStorage.getItem('datalist');

    // if(isData===null){
    //    const newArr=[];

    //    newArr.push(this.employeeObj)
    //    this.employeeObj.EmployeeId=0;
    //    localStorage.setItem("datalist",JSON.stringify(newArr));

    // }
  }

  getData() {
    const isDataList = localStorage.getItem('DataList');

    if (isDataList) {
      this.memberList = JSON.parse(isDataList);
    } else {
      this.memberList = [];
    }
  }

  onChangeBtn(){
    if(this.employeeForm.controls['CertificateDetails'].value==="Yes"){
      this.employeeForm.get('Certifications')?.enable();
    }
    else{
      this.employeeForm.get('Certifications')?.disable();
      this.employeeForm.get('Certifications')?.setValue('Optional')
    }
  }

  // onChangeBtn(value:any):void{


  //   const selectValue= value.target.value

  //  if(selectValue==="No"){
  //   this.employeeForm.controls['Certifications']?.disable();
  //  }

// this.selectValues=event.

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
