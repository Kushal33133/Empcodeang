import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Certificate } from 'crypto';
import { ApiGenerator } from 'src/app/framework/ApiGenerator';
import { BaseComponent } from 'src/app/framework/BaseCompo';
import { CommonService } from 'src/app/framework/common.service';
import { TaskCode } from 'src/app/framework/globals';
import { AutoBaseApiResponse } from 'src/app/Model/BaseResponse';
import Swal from 'sweetalert2';

interface TableRow {
  Qualification: string;
  Degree: '',
  Institute: '',
  PassingYear: '',
  Grade: '',
}

interface Experience {
  Organization: string;
  Designation: string;
  FromValue: string;
  ToValue: string;
  ReportingSenior: string;
  HRmanager: string;
  reasonforleaving: string;
}
// interface Ref {
//   emp_code: string;
//   name_emp: string;
//   desgination: string;
//   company: string;
//   Tel_no: string;
// }

export class CandidateEducation {
  AutoNumber: string = "";
  Qualification: string = "";
  Degree: string = "";
  Institute: string = "";
  PassingYear: string = "";
  Grade: string = "";
  btnType: number = 0;
}



export class CandidateScreening {
  AutoNumber: string = "";
ASSIN_TO: string = "";
employeeCode1: string = "";
employeeCode2: string = "";
employeeCode3: string = "";
  companyCode: string = '400001'
  branchCode: string = '1306'
  candidatePurpose: string = "Interview";
  candidateMeet: string = "";
  candidatePositionApplied: string = "";
  candidateLocation: string = "";
  CandidateFirstName: string = "";
  CandidateLastName: string = "";
  CandiateFatherName: string = "";
  candiateAddress: string = "";
  candiateCity: string = "";
  candiateState: string = "";
  candiatePhone: string = "";
  candidateEmail: string = "";
  candidateDateofBirth: string ='';
  candidateMartialStatus: string = "";
  candiResultStatus: string = "";
  candidatePrevExperience: string = "No";
  currentCompensation: string = "";
  paFixes: string = "";
  Variable: string = "";
  benefits: string = "";
  Joiningtime: string = "";
  expectedSalary: string = "";
  referenceName1: string = "";
  referenceDesignation1: string = "";
  referenceCompany1: string = "";
  referenceTelNo1: string = "";
  referenceName2: string = "";
  referenceDesignation2: string = "";
  referenceCompany2: string = "";
  referenceTelNo2: string = "";
  referenceName3: string = "";
  referenceDesignation3: string = "";
  referenceCompany3: string = "";
  referenceTelNo3: string = "";
  candidateplace: string = "";
  candidatesignature: string = "";
  candidateStatus: string = "";
  candidatefeedback: string = "";
  candidatePositiveRemarks: string = "";
  candidatePositiveRemarks1: string = "";
  candidatePositiveRemarks2: string = "";
  candidateNegativeRemarks: string = "";
  candidateNegativeRemarks1: string = "";
  candidateNegativeRemarks2: string = "";
  ASSIN_TO1: string = "";
ASSIN_TO2: string = "";
EnterBy: string = '33133';
EnterDate: string = "";
CandidateSelectionStatus: string = "";
PlaceofJoining: string = "";
DateofJoining: string = "";
candidateAadhar: number = 0;
totalExperience: string = "";
currentPackage: string = "";
expectedPackage: string = "";
reason: string = "";
noticePeriod: string = "";
nativePlace: string = "";
currentLocation: string = "";
occupation: string = "";
motherOccupation: string = "";
noOfSiblings: string = "";
openForPan: string = "";
resume: string = "";
// Level: string = '';
}

@Component({
  selector: 'app-candidate-screening-form',
  templateUrl: './candidate-screening-form.component.html',
  styleUrls: ['./candidate-screening-form.component.scss']
})
export class CandidateScreeningFormComponent extends BaseComponent implements OnInit{
  
  CandidateScreeningForm: CandidateScreening;
    CandidateEducationForm: Array<CandidateEducation>;
    candidateEdu: any = {}


  constructor(private fb: FormBuilder, public services: CommonService,
  ) { 
    super(services);

  
  }

  ngOnInit(): void {
    this.CandidateScreeningForm = new CandidateScreening();
  }


  // showTable = false
  // tableHeaders = ['Qualification', 'Name', 'Age', 'Email', 'Phone'];
  // typeOptions = ['Matrix', '10+2', 'Graduation',' Post Graduation', 'Certification'];
  candidateStatus: string[] = ['Single','Married','Divorced','Widow','Widower'];

  rows: TableRow[] = [{ Qualification: 'Agent', Degree: '', Institute: '', PassingYear: '', Grade: '' }];

  addRow(): void {
    this.rows.push({ Qualification: 'Agent', Degree: '', Institute: '', PassingYear: '', Grade: '' });
  }


  removeRow(index: number): void {
    if (index !== 0) { // Prevent removal of the first row
      this.rows.splice(index, 1);
    }
  }

 

  currentStep = 1; 
  nextStep() {
    if (this.currentStep < 4) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  ExperienceArray: Experience[] = [{
    Organization: '',
    Designation: '',
    FromValue: '',
    ToValue: '',
    ReportingSenior: '',
    HRmanager: '',
    reasonforleaving: ''
  }];

  // Function to add a new experience row
  addExperience(): void {
    this.ExperienceArray.push({
      Organization: '',
      Designation: '',
      FromValue: '',
      ToValue: '',
      ReportingSenior: '',
      HRmanager: '',
      reasonforleaving: ''
    });
  }

  // Function to remove an experience row
  removeExperience(index: number): void {
    if (this.ExperienceArray.length > 1) {
      this.ExperienceArray.splice(index, 1);
    }
  }


  onWork (e: any): void {
    // this.showTable = event.target.value === 'Yes';
  this.CandidateScreeningForm.candidatePrevExperience === 'Yes'
    console.log( this.CandidateScreeningForm.candidatePrevExperience = e.target.value )

  }
  handleInputChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    let fileSizeKB = file.size / 1024; // Convert bytes to KB
    if (fileSizeKB < 2 || fileSizeKB > 5000) {
      Swal.fire('File size must be between 2KB and 5MB');
      return;
    }

    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      this.CandidateScreeningForm.resume = String(reader.result);
    };
  }

  reset(){
    this.CandidateScreeningForm = new CandidateScreening();
    this.ExperienceArray;
    this.addExperience();
    this.addRow();
  }


  save(){
//     console.log(this.CandidateScreeningForm);
// console.log(this.rows)
// console.log(this.ExperienceArray)
// console.log(  {
//   "qual":this.rows,
//   "exp":this.ExperienceArray,
//   "screen":this.CandidateScreeningForm
// })
this.CandidateScreeningForm.candidatePurpose = '2';
var data = {
  // Mail: mail,
  Main: this.CandidateScreeningForm,
  EducationDetail: this.rows,
  ExperienceDetail: this.ExperienceArray

}
console.log(data);
  this.downloadData(ApiGenerator.SaveCandidateScreening(data));
  }



  onResponseReceived (taskCode: TaskCode,response: any) {
    const success = super.onResponseReceived(taskCode,response);
    //console.log(success);
    if (success) {

      switch (taskCode) {
        case TaskCode.SAVE_CANDIDATE_SCREENING:
          var SaveResponse = response as AutoBaseApiResponse;
          console.log(response)
          if (!SaveResponse.message.error_status) {
            Swal.fire('Candidate Data Saved','Candidate Token No is ' + SaveResponse.AutoNumber,'success');
            this.reset();
          }
          else {
            Swal.fire('Oops!!','Error Message: ' + SaveResponse.message.message,'error');
          }
          break;

        }

       

      return success
    }
  }
}
