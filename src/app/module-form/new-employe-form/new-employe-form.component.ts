import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DatePipe, formatDate } from '@angular/common';
import * as blobUtil from 'blob-util';
import * as JSZip from 'jszip';
import * as base64 from 'base64-js';

import { saveAs } from 'file-saver';

import {
  CandidateconsentForm,
  Declaration,
  DocumentAttached,
  EPSfamilyMember,
  EPSnomineeform,
  fillingAndverified,
  form2Educationtable,
  form2EmployeeHistory,
  form2FamilyBackground,
  form2LaguageKnown,
  form4Declaration,
  form6FamilyTable,
  GratuityNominee,
  NominationDeclaration,
  EPFNominationFamily,
  personalData,
  Revised,
  GratuityRules,
  EPFO,
  Kycdetailstable,
  CandidateconsentForm2,
  emp_datares,
  document_submit,
  InsuranceCorporation,
  Rootempres,
} from '../../Model/DataEmployee';
import { CommonService } from 'src/app/framework/common.service';
import { BaseComponent } from 'src/app/framework/BaseCompo';
import { ApiGenerator } from 'src/app/framework/ApiGenerator';
import { TaskCode } from 'src/app/framework/globals';
import {
  AutoBaseApiResponse,
  BaseApiResponse,
} from 'src/app/Model/BaseResponse';
import { FileUploadService } from '../../services/fileupload/file-upload.service';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { AppUtil } from 'src/app/framework/Utils/AppUtil';
import Swal from 'sweetalert2';
import { stringify } from '@angular/compiler/src/util';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { Http, ɵangular_packages_http_http_e } from '@angular/http';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-new-employe-form',
  templateUrl: './new-employe-form.component.html',
  styleUrls: ['./new-employe-form.component.scss'],
})
export class NewEmployeFormComponent extends BaseComponent implements OnInit {
  today = new Date();
  //form2
  arrestedforOffencedetails_radio: boolean = false;
  hideupload: boolean = false;
  UploadSave: string;
  // employeeFirstName_salu: string;
  referencesName2: string;
  referencesName1: string;
  Filename: string;
  isEditable = false;
  emp_auto_number: number;
  verifier_emp_code: number;
  personalDataForm: personalData;
  enablecheckemp: boolean = false;
  saveCounter: number = 0;
  disableEditButton: boolean = false;
  submitDisable :boolean = false;
  GetAutoNumber :string ='';
  //form2 Education table
  secondEducationQualification: any = {};
  secondEducationQualificationArray: Array<form2Educationtable>;

  //form2 employee work history table
  secondEmployeeHistory: any = {};
  secondEmployeeHistoryArray: Array<form2EmployeeHistory>;

  //form2 language know table
  form2Laguage: any = {};
  form2LaguageKnownArray: Array<form2LaguageKnown>;

  //form2 Family member table
  form2FamilyBack: any = {};
  form2FamilyBackgroundArray: Array<form2FamilyBackground>;

  //form3
  DocumentSubmit: Array<DocumentAttached>;

  //form3 filling up and verifying
  fillingAndverifiedForm: fillingAndverified;

  //form4
  consentForm: Array<CandidateconsentForm>;
  document_submit: Array<document_submit>;
  consentForm2: CandidateconsentForm2;

  //form4 decalartion
  form4DeclarationForm: form4Declaration;
  InsuranceCorporation: InsuranceCorporation;

  //form6 Declaration Form
  DeclarationForm: Declaration;

  //form6 Family member table
  form6Family: any = {};
  form6FamilyTableForm: Array<form6FamilyTable>;

  //form7
  NominationDeclarationForm: NominationDeclaration;

  // FORM 7 EPF NOMINEE FAMILY
  EPFNomination: any = {};
  EPFNominationFamilyArray: Array<EPFNominationFamily>;

  // FORM 7 EPS FAMILY TABLE
  ePSfamilyMember: any = {};
  ePSfamilyMemberArray: Array<EPSfamilyMember>;

  // form 7 eps nominee table
  ePSnomineeform: any = {};
  ePSnomineeformArray: Array<EPSnomineeform>;

  // form 8 Revised
  RevisedForm: Revised;

  // form 8 Revised partb

  //form 9
  GratuityRulesForm: GratuityRules;

  //form 9 Nominee table
  gratuityNominee: any = {};
  gratuityNomineeArray: Array<GratuityNominee>;

  //form 10
  EPFOForm: EPFO;
  dateOfForm: string = '';

  // form 10 kyc detail table
  KycdetailstableForm: Array<Kycdetailstable>;

  // date
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  // datepicker today date
  planModel: any = {
    start_time: new Date(),
  };

  base64Images: string[] = [];
  selectedFile: File | null = null;
  alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');

  // label for table and dropbox

  //form 3
  depatment: string[] = [
    'Accounts/Cash',
    'Audit',
    'Operations',
    'Credit Control',
    'Marketing',
    'Admin',
    'Data Entry/MIS',
    'KOM/Co-Ordination',
    'Customer Care',
    'Other',
  ];

  candidateStatus: string[] = [
    'Single',
    'Married',
    'Divorced',
    'Widow',
    'Widower',
  ];
  displayedColumns: string[] = [
    'Date of Birth',
    'Place of Birth',
    'Nationality',
    'Religion',
    'Marital Status',
    'Dependents',
  ];
  educational: string[] = [
    'Examination Passed',
    'Year of Passing',
    'School/College/Univ.',
    'Subject',
    '%Age of Marks',
    'Div/Grade Obtained',
  ];
  qualification: string[] = [
    'Matric',
    '10 + 2',
    'Graduation',
    'Post Graduation',
    'Certification',
  ];
  languagelist: string[] = [
    'Afrikaans',
    'Albanian',
    'Arabic',
    'Armenian',
    'Basque',
    'Bengali',
    'Bulgarian',
    'Catalan',
    'Cambodian',
    'Chinese (Mandarin)',
    'Croatian',
    'Czech',
    'Danish',
    'Dutch',
    'English',
    'Estonian',
    'Fiji',
    'Finnish',
    'French',
    'Georgian',
    'German',
    'Greek',
    'Gujarati',
    'Hebrew',
    'Hindi',
    'Hungarian',
    'Icelandic',
    'Indonesian',
    'Irish',
    'Italian',
    'Japanese',
    'Javanese',
    'Korean',
    'Latin',
    'Latvian',
    'Lithuanian',
    'Macedonian',
    'Malay',
    'Malayalam',
    'Maltese',
    'Maori',
    'Marathi',
    'Mongolian',
    'Nepali',
    'Norwegian',
    'Persian',
    'Polish',
    'Portuguese',
    'Punjabi',
    'Quechua',
    'Romanian',
    'Russian',
    'Samoan',
    'Serbian',
    'Slovak',
    'Slovenian',
    'Spanish',
    'Swahili',
    'Swedish',
    'Tamil',
    'Tatar',
    'Telugu',
    'Thai',
    'Tibetan',
    'Tonga',
    'Turkish',
    'Ukrainian',
    'Urdu',
    'Uzbek',
    'Vietnamese',
    'Welsh',
    'Xhosa',
  ];
  KYCTableheader: string[] = [
    'KYC Document type',
    'Name as on KYC Document',
    'Number',
    'Remarks',
  ];

  technical: string[] = [
    'Typing (speed)',
    'Stenography (speed)',
    'Computer (Know How)',
    'Any other',
  ];
  document: string[] = [
    'C.V',
    'Employment ApplicationForm',
    'Guarantee Form',
    'Duplicate Copy of Intent/Offer Letter Duly Signed by prospective employee',
    'Two Passport Size Color Photographs & one Family photograph',
    'Two Refrence Names, Designation & Contact no. From Previous Employer',
    'Photocopies:(All) - Degree Certificate & Marksheet - SSC/HSC board mark sheet',
    'Identity Proof:',
  ];
  language: string[] = [
    'Language',
    'Understand',
    'Speak',
    'Read',
    'Write',
    'Other Remarks ',
  ];
  family: string[] = [
    'Name',
    'Relation',
    'Qualification',
    'Occupation',
    'Mobile No',
    'Address',
    'Date of Birth',
    'Whether residing with him/her or not',
    'Nominee',
    'Action',
  ];
  physical: string[] = [
    'Height',
    'Weight',
    'Physical Disability',
    'Had any serious illness',
    'Accident if any',
  ];
  prejoin: string[] = [
    'S.No',
    'PARTICULARS',
    '**Specify the Name of Documents',
    'Document Submitted(**Please Fill Yes to upload and Download the Documents)',
    'Document Received(HR Only)',
  ];
  particulars_question: string[] = [
    'C.V',
    'EMPLOYMENT APPLICATION FORM: (OM GROUP)',
    'GUARANTEE FORM',
    'DUPLICATE COPY OF INTENT/OFFER LETTER DULT SIGNED BY PROSPECTIVE EMPLOYEE',
    'TWO(2) PASSPORT SIZE COLOUR PHOTOGRAPHS',
    'TWO(2) REFRENCE NAMES, DESIGNATION & CONTACT NO DEOM PREVIOUS EMPLOYER (for experience employee only)',
    'Photocopies: Degree Cetificate & Marksheet ',
  ];
  documentRequired: string[] = [
    "Copy of Guarantor's service (Govt. Emp.) Identity Card.",
    "Any documentary evidence in support of Guarantor's address.",
    'Copy of PAN Card (Self).',
    'Copy of Ration Card/Voter Card/Driving Licence/Aadhar Card(Self).',
    'Copy of current Electricity Bill/Water/Telephone/Mobile/Bank Passbook.',
    'Copy of educational certificates with mark sheet.',
    'Two latest color passport size photographs.',
    'Relieving Letter, work experience with salary proof.',
    'Copy of Adharcard and Passbook of bank account.',
    'Medical fitness certificate. (Approved by Govt. undertaking hospitals)',
  ];

  CandiName: string;

  options1: any;
  options2: any;
  options3: any;
  options4: any;
  options5: any;
  index: any;
  myGroup: FormGroup;
  epfoSpeciallyAbled: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;
  seventhFormGroup: FormGroup;
  eighthFormGroup: FormGroup;
  ninthFormGroup: FormGroup;
  tenthFormGroup: FormGroup;
  data1: {};

  UploadingFile: FileList;
  progressInfos = [];
  MessageText: string;
  presentconnectbusiness_radio_no: boolean = false;
  presentconnectbusiness_radio_yes: boolean = false;
  relatedworkingOMgroup_radio_no: boolean = false;
  relatedworkingOMgroup_radio_yes: boolean = false;
  relationworkinGovtDep_radio_no: boolean = false;
  relationworkinGovtDep_radio_yes: boolean = false;
  providentFundAccount_radio_no: boolean = false;
  providentFundAccount_radio_yes: boolean = false;
  arrestedforOffence_radio_no: boolean = false;
  arrestedforOffence_radio_yes: boolean = false;
  CountryofOrigin_radio_india: boolean = false;
  CountryofOrigin_radio_otherindia: boolean = false;
  EpfoSpeciallyAbled_radio_no: boolean = false;
  EpfoSpeciallyAbled_radio_yes: boolean = false;
  InternationalWorker_radio_yes: boolean = false;
  InternationalWorker_radio_no: boolean = false;
  UniversalAccountNo_radio_UAN: boolean = false;
  UniversalAccountNo_radio_PF: boolean = false;
  MemberofEPS_radio_no: boolean = false;
  MemberofEPS_radio_yes: boolean = false;
  MemberofEPFS_radio_yes: boolean = false;
  MemberofEPFS_radio_no: boolean = false;
  fresher_exp_fresher: boolean = false;
  fresher_exp_experience: boolean = false;
  fresher_exp: any;
  HR_Employe_code: number;
  enableform: boolean = false;
  editForUser: boolean = false;
  hidesubmitbtn: boolean = false;
  hideselectdropdown: boolean = false;
  joinessdoc_agreement: boolean = false;
  url: any;
  second: any;
  first: any;
  FileName1: any;
  imageres: any;
  empAutoNumber: Number;
  public imageSrc: any;
  public signature: any;

  constructor(
    private http: Http,
    public services: CommonService,
    private _formBuilder: FormBuilder,
    public datepipe: DatePipe,
    public fileupload: FileUploadService,
    private spinner: NgxSpinnerService
  ) {
    super(services);
  }

  ngOnInit() {
    try {
      this.EPFOForm = new EPFO();

      this.personalDataForm = new personalData();
      //this.personalDataForm.employeePhoneNumber  = parseInt(sessionStorage.getItem("session"));

      //   document_submit: document_submit[] =

      // [
      //   { AutoNumber: null,Particular_index: "1",Particular: "C.V",Specify_document:"",Submit: "",Recieved: "",Document_upload: "" },
      //   { AutoNumber: null,Particular_index: "2",Particular: "EMPLOYMENT APPLICATION FORM: (OM GROUP)",Specify_document:"",Submit: "",Recieved: "",Document_upload: "" },
      //   { AutoNumber: null,Particular_index: "3",Particular: "GUARANTEE FORM:- Guarantor's service(Govt Emp.) Identity card. -Guarantor's address proof",Specify_document:"",Submit: "",Recieved: "",Document_upload: "" },
      //   { AutoNumber: null,Particular_index: "4",Particular: "DUPLICATE COPY OF INTENT/OFFER LETTER DULY SIGNED BY PROSPECTIVE EMPLOYEE",Specify_document:"",Submit: "",Recieved: "",Document_upload: "" },
      //   { AutoNumber: null,Particular_index: "5",Particular: "TWO(2) PASSPORT SIZE COLOUR PHOTOGRAPHS & ONE FAMILY PHOTOGRAPH",Specify_document:"",Submit: "",Recieved: "",Document_upload: "" },
      //   { AutoNumber: null,Particular_index: "6",Particular: "TWO(2) REFRENCE NAMES, DESIGNATION & CONTACT NO DEOM PREVIOUS EMPLOYER (for experience employee only)",Specify_document:"",Submit: "",Recieved: "",Document_upload: "" },
      //   { AutoNumber: null,Particular_index: "7",Particular: "Photocopies:(All) Degree Cetificate & Marksheet, SSC/HSC board mark sheet",Specify_document:"",Submit: "",Recieved: "",Document_upload: "" },
      //   { AutoNumber: null,Particular_index: "8",Particular: "IDENTIFY PROOF: (any one of the following) - Aadhar card photocopy - Valid Passport photocopy - Driving Licence photocopy - Voter ID card photocopy - Pan card photocopy",Specify_document:"",Submit: "",Recieved: "",Document_upload: "" },
      //   { AutoNumber: null,Particular_index: "9",Particular: "RESIDENTIAL ADDRESS PROOF: (any one of the following) -Aadhar card photocopy -telephone bill - electricity bill -valid passport photocopy -ration card -Bank passbook",Specify_document:"",Submit: "",Recieved: "",Document_upload: "" },
      //   { AutoNumber: null,Particular_index: "10",Particular: "Medical fitness certificate",Specify_document:"",Submit: "",Recieved: "",Document_upload: "" },
      //   { AutoNumber: null,Particular_index: "11",Particular: "LAST THREE(3) MONTHS SALARY SLIP FROM PREVIOUS EMPLOYER(for experience employee only)",Specify_document:"",Submit: "",Recieved: "",Document_upload: "" },
      //   { AutoNumber: null,Particular_index: "12",Particular: "COPY OF RELIEVING & EXPERIENCE LETTER FROM PREVIOUS EMPLOYER",Specify_document:"",Submit: "",Recieved: "",Document_upload: "" },
      //   { AutoNumber: null,Particular_index: "13",Particular: "LAST THREE(3) MONTHS BANK STATEMENT OF YOUR SALARY A/C OF YOUR PREVIOUS EMPLOYER(for experience employee only)",Specify_document:"",Submit: "",Recieved: "",Document_upload: "" }

      // ];
      //form 2 education qualification table
      this.secondEducationQualificationArray = new Array<form2Educationtable>();
      this.secondEducationQualificationArray.push(new form2Educationtable());

      // form 2 employ history table
      this.secondEmployeeHistoryArray = new Array<form2EmployeeHistory>();
      this.secondEmployeeHistoryArray.push(new form2EmployeeHistory());

      // form 2 language know table
      this.form2LaguageKnownArray = new Array<form2LaguageKnown>();
      this.form2LaguageKnownArray.push(new form2LaguageKnown());

      //form 2 family member table
      this.form2FamilyBackgroundArray = new Array<form2FamilyBackground>();
      this.form2FamilyBackgroundArray.push(new form2FamilyBackground());

      //form 3

      this.DocumentSubmit = new Array<DocumentAttached>();
      this.fillingAndverifiedForm = new fillingAndverified();

      //form 4
      this.consentForm = new Array<CandidateconsentForm>();
      this.consentForm.push(
        {
          AutoNumber: null,
          Question_index: '1',
          Question:
            'Are you open for all India. क्या आप पूरे भारत के लिए खुले हैं?',
          candidateRemarks: 'Yes',
          hrRemarks: 'Yes',
        },
        {
          AutoNumber: null,
          Question_index: '2',
          Question: 'DO you have conveyance. क्या आपके पास कन्वेंस है?',
          candidateRemarks: 'Yes',
          hrRemarks: 'Yes',
        },
        {
          AutoNumber: null,
          Question_index: '3',
          Question:
            'You can transfer anywhere in india. आप भारत में कहीं भी ट्रांसफर कर सकते हैं',
          candidateRemarks: 'Yes',
          hrRemarks: 'Yes',
        },
        {
          AutoNumber: null,
          Question_index: '4',
          Question:
            'An appointment letter will be provided after one month - एक महीना की सेवाओं के बाद नियुक्ति पत्र प्रदान किया जाएगा',
          candidateRemarks: 'Yes',
          hrRemarks: 'Yes',
        },
        {
          AutoNumber: null,
          Question_index: '5',
          Question:
            'You are eligible for an experience letter / Relieving letter after one year of services - आप सेवाओं के एक वर्ष के बाद एक अनुभव पत्र / राहत पत्र के लिए पात्र हैं',
          candidateRemarks: 'Yes',
          hrRemarks: 'Yes',
        },
        {
          AutoNumber: null,
          Question_index: '6',
          Question:
            'Minimum one month notice is required if you want to leave the organization - यदि आप संगठन छोड़ना चाहते हैं तो न्यूनतम एक महीने का नोटिस आवश्यक है',
          candidateRemarks: 'Yes',
          hrRemarks: 'Yes',
        },
        {
          AutoNumber: null,
          Question_index: '7',
          Question:
            'Initial 6 months Leave will not be provided except emergency - इमरजेंसी को छोड़कर शुरुआती 6 महीने की छुट्टी नहीं दी जाएगी',
          candidateRemarks: 'Yes',
          hrRemarks: 'Yes',
        },
        {
          AutoNumber: null,
          Question_index: '8',
          Question:
            'I hereby accept Terms and Condition of Mess - मैं मेस के नियम और शर्तें स्वीकार करता हूं',
          candidateRemarks: 'Yes',
          hrRemarks: 'Yes',
        },
        {
          AutoNumber: null,
          Question_index: '9',
          Question:
            'Mess/CCA 1000 for south Region and 500 for other Region except for Delhi/NCR - दक्षिण क्षेत्र के लिए मेस / सीसीए 1000 और दिल्ली / एनसीआर को छोड़कर अन्य क्षेत्र के लिए 500',
          candidateRemarks: 'Yes',
          hrRemarks: 'Yes',
        },
        {
          AutoNumber: null,
          Question_index: '10',
          Question:
            'if you are deputed at Pune Refundable Security Deposit Rs. 1000 for Locker facility - यदि आप पुणे रिफंडेबल सिक्योरिटी डिपॉजिट पर रु। 1000 लॉकर सुविधा के लिए',
          candidateRemarks: 'Yes',
          hrRemarks: 'Yes',
        },
        {
          AutoNumber: null,
          Question_index: '11',
          Question:
            'if you fail to follow the above-mentioned points your appointment will stand as canceled with immediate effect - यदि आप उपर्युक्त बिंदुओं का पालन करने में विफल रहते हैं तो आपकी नियुक्ति तत्काल प्रभाव से रद्द कर दी जाएगी',
          candidateRemarks: 'Yes',
          hrRemarks: 'Yes',
        },
        {
          AutoNumber: null,
          Question_index: '12',
          Question: 'Documentation',
          candidateRemarks: 'Yes',
          hrRemarks: 'Yes',
        },
        {
          AutoNumber: null,
          Question_index: '13',
          Question:
            'Department Deputation - विभाग की प्रतिनियुक्ति Accounts/Cash,Audit, Operations, Credit Control, Marketing, Admin, Data Entry/MIS, KOM/Co-Ordination, Customer Care',
          candidateRemarks: 'Yes',
          hrRemarks: 'Yes',
        }
      );
      this.document_submit = new Array<document_submit>();
      this.document_submit.push(
        {
          AutoNumber: null,
          Particular_index: '1',
          Particular: 'C.V',
          Specify_document: 'CV',
          Submit: '',
          Recieved: '',
          CV_UPLOAD: '',
          GURANTEE_UPLOAD: '',
          INTENTLETTER_UPLOAD: '',
          PHOTO_UPLOAD: '',
          REFRE_UPLOAD: '',
          DEGREE_UPLOAD: '',
          ID_UPLOAD: '',
          RESS_UPLOAD: '',
          MEDICALFITNESS_UPLOAD: '',
          Document_upload: '',
          SALARY_SLIP_UPLOAD: '',
          RELIEVING_LETTER_UPLOAD: '',
          BANKSTATEMENT_UPLOAD: '',
        },
        {
          AutoNumber: null,
          Particular_index: '2',
          Particular:
            'DUPLICATE COPY OF INTENT/OFFER LETTER DULY SIGNED BY PROSPECTIVE EMPLOYEE',
          Specify_document: 'LOI',
          Submit: '',
          Recieved: '',
          CV_UPLOAD: '',
          GURANTEE_UPLOAD: '',
          INTENTLETTER_UPLOAD: '',
          PHOTO_UPLOAD: '',
          REFRE_UPLOAD: '',
          DEGREE_UPLOAD: '',
          ID_UPLOAD: '',
          RESS_UPLOAD: '',
          MEDICALFITNESS_UPLOAD: '',
          Document_upload: '',
          SALARY_SLIP_UPLOAD: '',
          RELIEVING_LETTER_UPLOAD: '',
          BANKSTATEMENT_UPLOAD: '',
        },
        {
          AutoNumber: null,
          Particular_index: '3',
          Particular:
            "GUARANTEE FORM:- Guarantor's service(Govt Emp.) Identity card. -Guarantor's address proof",
          Specify_document: 'GUARANTOR FORM',
          Submit: '',
          Recieved: '',
          CV_UPLOAD: '',
          GURANTEE_UPLOAD: '',
          INTENTLETTER_UPLOAD: '',
          PHOTO_UPLOAD: '',
          REFRE_UPLOAD: '',
          DEGREE_UPLOAD: '',
          ID_UPLOAD: '',
          RESS_UPLOAD: '',
          MEDICALFITNESS_UPLOAD: '',
          Document_upload: '',
          SALARY_SLIP_UPLOAD: '',
          RELIEVING_LETTER_UPLOAD: '',
          BANKSTATEMENT_UPLOAD: '',
        },
        {
          AutoNumber: null,
          Particular_index: '4',
          Particular: 'AADHAR CARD',
          Specify_document: 'AADHAR',
          Submit: '',
          Recieved: '',
          CV_UPLOAD: '',
          GURANTEE_UPLOAD: '',
          INTENTLETTER_UPLOAD: '',
          PHOTO_UPLOAD: '',
          REFRE_UPLOAD: '',
          DEGREE_UPLOAD: '',
          ID_UPLOAD: '',
          RESS_UPLOAD: '',
          MEDICALFITNESS_UPLOAD: '',
          Document_upload: '',
          SALARY_SLIP_UPLOAD: '',
          RELIEVING_LETTER_UPLOAD: '',
          BANKSTATEMENT_UPLOAD: '',
        },
        {
          AutoNumber: null,
          Particular_index: '5',
          Particular: 'PAN CARD',
          Specify_document: 'PAN',
          Submit: '',
          Recieved: '',
          CV_UPLOAD: '',
          GURANTEE_UPLOAD: '',
          INTENTLETTER_UPLOAD: '',
          PHOTO_UPLOAD: '',
          REFRE_UPLOAD: '',
          DEGREE_UPLOAD: '',
          ID_UPLOAD: '',
          RESS_UPLOAD: '',
          MEDICALFITNESS_UPLOAD: '',
          Document_upload: '',
          SALARY_SLIP_UPLOAD: '',
          RELIEVING_LETTER_UPLOAD: '',
          BANKSTATEMENT_UPLOAD: '',
        },
        {
          AutoNumber: null,
          Particular_index: '6',
          Particular: 'ONE PHOTOGRAPH',
          Specify_document: 'PHOTO',
          Submit: '',
          Recieved: '',
          CV_UPLOAD: '',
          GURANTEE_UPLOAD: '',
          INTENTLETTER_UPLOAD: '',
          PHOTO_UPLOAD: '',
          REFRE_UPLOAD: '',
          DEGREE_UPLOAD: '',
          ID_UPLOAD: '',
          RESS_UPLOAD: '',
          MEDICALFITNESS_UPLOAD: '',
          Document_upload: '',
          SALARY_SLIP_UPLOAD: '',
          RELIEVING_LETTER_UPLOAD: '',
          BANKSTATEMENT_UPLOAD: '',
        },
        {
          AutoNumber: null,
          Particular_index: '7',
          Particular: '10th MARKSHEET/CERTIFICATE',
          Specify_document: '10',
          Submit: '',
          Recieved: '',
          CV_UPLOAD: '',
          GURANTEE_UPLOAD: '',
          INTENTLETTER_UPLOAD: '',
          PHOTO_UPLOAD: '',
          REFRE_UPLOAD: '',
          DEGREE_UPLOAD: '',
          ID_UPLOAD: '',
          RESS_UPLOAD: '',
          MEDICALFITNESS_UPLOAD: '',
          Document_upload: '',
          SALARY_SLIP_UPLOAD: '',
          RELIEVING_LETTER_UPLOAD: '',
          BANKSTATEMENT_UPLOAD: '',
        },
        {
          AutoNumber: null,
          Particular_index: '8',
          Particular: 'LAST QUALIFICATION CERTIFICATE',
          Specify_document: 'LAST QUALIFICATION',
          Submit: '',
          Recieved: '',
          CV_UPLOAD: '',
          GURANTEE_UPLOAD: '',
          INTENTLETTER_UPLOAD: '',
          PHOTO_UPLOAD: '',
          REFRE_UPLOAD: '',
          DEGREE_UPLOAD: '',
          ID_UPLOAD: '',
          RESS_UPLOAD: '',
          MEDICALFITNESS_UPLOAD: '',
          Document_upload: '',
          SALARY_SLIP_UPLOAD: '',
          RELIEVING_LETTER_UPLOAD: '',
          BANKSTATEMENT_UPLOAD: '',
        },
        {
          AutoNumber: null,
          Particular_index: '9',
          Particular: 'BANK PROOF / PASSBOOK/CHEQUE ',
          Specify_document: 'BANK',
          Submit: '',
          Recieved: '',
          CV_UPLOAD: '',
          GURANTEE_UPLOAD: '',
          INTENTLETTER_UPLOAD: '',
          PHOTO_UPLOAD: '',
          REFRE_UPLOAD: '',
          DEGREE_UPLOAD: '',
          ID_UPLOAD: '',
          RESS_UPLOAD: '',
          MEDICALFITNESS_UPLOAD: '',
          Document_upload: '',
          SALARY_SLIP_UPLOAD: '',
          RELIEVING_LETTER_UPLOAD: '',
          BANKSTATEMENT_UPLOAD: '',
        },
        {
          AutoNumber: null,
          Particular_index: '10',
          Particular: 'MEDICAL FITNNESS CERTIFICATE',
          Specify_document: 'MEDICAL',
          Submit: '',
          Recieved: '',
          CV_UPLOAD: '',
          GURANTEE_UPLOAD: '',
          INTENTLETTER_UPLOAD: '',
          PHOTO_UPLOAD: '',
          REFRE_UPLOAD: '',
          DEGREE_UPLOAD: '',
          ID_UPLOAD: '',
          RESS_UPLOAD: '',
          MEDICALFITNESS_UPLOAD: '',
          Document_upload: '',
          SALARY_SLIP_UPLOAD: '',
          RELIEVING_LETTER_UPLOAD: '',
          BANKSTATEMENT_UPLOAD: '',
        },
        {
          AutoNumber: null,
          Particular_index: '11',
          Particular:
            'LAST THREE(3) MONTHS SALARY SLIP FROM PREVIOUS EMPLOYER(for experience employee only)',
          Specify_document: 'SALARY SLIP',
          Submit: '',
          Recieved: '',
          CV_UPLOAD: '',
          GURANTEE_UPLOAD: '',
          INTENTLETTER_UPLOAD: '',
          PHOTO_UPLOAD: '',
          REFRE_UPLOAD: '',
          DEGREE_UPLOAD: '',
          ID_UPLOAD: '',
          RESS_UPLOAD: '',
          MEDICALFITNESS_UPLOAD: '',
          Document_upload: '',
          SALARY_SLIP_UPLOAD: '',
          RELIEVING_LETTER_UPLOAD: '',
          BANKSTATEMENT_UPLOAD: '',
        },
        {
          AutoNumber: null,
          Particular_index: '12',
          Particular: 'PARENTS AADHAR CARD',
          Specify_document: 'PARENTS AADHAR',
          Submit: '',
          Recieved: '',
          CV_UPLOAD: '',
          GURANTEE_UPLOAD: '',
          INTENTLETTER_UPLOAD: '',
          PHOTO_UPLOAD: '',
          REFRE_UPLOAD: '',
          DEGREE_UPLOAD: '',
          ID_UPLOAD: '',
          RESS_UPLOAD: '',
          MEDICALFITNESS_UPLOAD: '',
          Document_upload: '',
          SALARY_SLIP_UPLOAD: '',
          RELIEVING_LETTER_UPLOAD: '',
          BANKSTATEMENT_UPLOAD: '',
        }
      );

      console.log('this.document_submit', this.document_submit);
      this.consentForm2 = new CandidateconsentForm2();

      //form 4 decalartion
      this.form4DeclarationForm = new form4Declaration();
      this.InsuranceCorporation = new InsuranceCorporation();

      //Form 6 Declaaration form
      this.DeclarationForm = new Declaration();

      //Form 6 Family member table
      this.form6FamilyTableForm = new Array<form6FamilyTable>();
      this.form6FamilyTableForm.push(new form6FamilyTable());

      //Form 7
      this.NominationDeclarationForm = new NominationDeclaration();

      //FORM 7 EPF NOMINEE FAMILY
      this.EPFNominationFamilyArray = new Array<EPFNominationFamily>();
      this.EPFNominationFamilyArray.push(new EPFNominationFamily());

      // FORM 7 EPS FAMILY TABLE
      this.ePSfamilyMemberArray = new Array<EPSfamilyMember>();
      this.ePSfamilyMemberArray.push(new EPSfamilyMember());

      // form 7 eps nominee table
      this.ePSnomineeformArray = new Array<EPSnomineeform>();
      this.ePSnomineeformArray.push(new EPSnomineeform());

      // form 8 Revised
      this.RevisedForm = new Revised();
      // this.RevisedForm.leftServiceon=(new Date('01/Jan/2020')).toISOString()
      // form 8 Revised

      //form 9
      this.GratuityRulesForm = new GratuityRules();

      //form 9 Nominee table
      this.gratuityNomineeArray = new Array<GratuityNominee>();
      this.gratuityNomineeArray.push(new GratuityNominee());

      //form 10
      //this.EPFOForm = new EPFO();

      //form 10 kyc detail table

      this.KycdetailstableForm = new Array<Kycdetailstable>();
      this.KycdetailstableForm.push(
        {
          AutoNumber: null,
          KYCDocumenttype:
            'Bank Account(Please fill Bank Name and IFSC Code in Remarks field)',
          NameasonDocument: '',
          KycNumber: '',
          KycRemarks: '',
        },
        //{
        //   AutoNumber: null,
        //   KYCDocumenttype: 'NPR/AADHAAR',
        //   NameasonDocument: '',
        //   KycNumber: '',
        //   KycRemarks: ''
        // },
        {
          AutoNumber: null,
          KYCDocumenttype: 'Aadhar Number',
          NameasonDocument: '',
          KycNumber: '',
          KycRemarks: '',
        },

        {
          AutoNumber: null,
          KYCDocumenttype: 'Permanent Account Number(PAN)',
          NameasonDocument: '',
          KycNumber: '',
          KycRemarks: '',
        },
        {
          AutoNumber: null,
          KYCDocumenttype: 'Driving Licence',
          NameasonDocument: '',
          KycNumber: '',
          KycRemarks: '',
        },
        {
          AutoNumber: null,
          KYCDocumenttype: 'ESIC Number',
          NameasonDocument: '',
          KycNumber: '',
          KycRemarks: '',
        }

        // {
        //   AutoNumber: null,
        //   KYCDocumenttype: 'Passport',
        //   NameasonDocument: '',
        //   KycNumber: '',
        //   KycRemarks: ''
        // },
        // {
        //   AutoNumber: null,
        //   KYCDocumenttype: 'Driving Licence',
        //   NameasonDocument: '',
        //   KycNumber: '',
        //   KycRemarks: ''
        //  }
        //, {
        //   AutoNumber: null,
        //   KYCDocumenttype: 'Election Card',
        //   NameasonDocument: '',
        //   KycNumber: '',
        //   KycRemarks: ''
        // }, {
        //   AutoNumber: null,
        //   KYCDocumenttype: 'Ration Card',
        //   NameasonDocument: '',
        //   KycNumber: '',
        //   KycRemarks: ''
        // },

        // {
        //   AutoNumber: null,
        //   KYCDocumenttype: 'UAN No',
        //   NameasonDocument: '',
        //   KycNumber: '',
        //   KycRemarks: ''
        // }
      );

      ////////////////////////////////////////////////////

      this.secondFormGroup = this._formBuilder.group({});

      this.thirdFormGroup = this._formBuilder.group({});

      this.fourthFormGroup = this._formBuilder.group({});

      this.fifthFormGroup = this._formBuilder.group({});

      this.sixthFormGroup = this._formBuilder.group({});

      this.seventhFormGroup = this._formBuilder.group({});

      this.eighthFormGroup = this._formBuilder.group({});

      this.ninthFormGroup = this._formBuilder.group({});

      this.tenthFormGroup = this._formBuilder.group({});

      this.myGroup = new FormGroup({
        // options1: new FormControl(),
        options2: new FormControl(),
        options3: new FormControl(),
        options4: new FormControl(),
        options5: new FormControl(),
        countryofOrigin: new FormControl(),
        epfospecAbled: new FormControl(),
      });

    } catch (err) {
      throw err;
    }
  }
  getnumbers(i) {
    this.DeclarationForm.InsuranceNo = this.KycdetailstableForm[2].KycNumber;
    console.log('ESICNUMBER', this.KycdetailstableForm);
    this.InsuranceCorporation.InsCor_Insuranceno =
      this.KycdetailstableForm[2].KycNumber;
    this.NominationDeclarationForm.AccountNo =
      this.KycdetailstableForm[0].KycNumber;
  }
  onlyNumberKey(event) {
    return event.charCode == 8 || event.charCode == 0
      ? null
      : event.charCode >= 48 && event.charCode <= 57;
  }

  checkempcoode() {
    if (
      this.verifier_emp_code == 33813 ||
      this.verifier_emp_code == 35815 ||
      this.verifier_emp_code == 27707 ||
      this.verifier_emp_code == 14966 ||
      this.verifier_emp_code == 45651 ||
      this.verifier_emp_code == 19237 ||
      this.verifier_emp_code == 30197 ||
      this.verifier_emp_code == 27589 ||
      this.verifier_emp_code == 14650 ||
      this.verifier_emp_code == 18777 ||
      this.verifier_emp_code == 34163 ||
      this.verifier_emp_code == 33892 ||
      this.verifier_emp_code == 19237 ||
      this.verifier_emp_code == 30197 ||
      this.verifier_emp_code == 27589 ||
      this.verifier_emp_code == 14650 ||
      this.verifier_emp_code == 18777 ||
      this.verifier_emp_code == 34163 ||
      this.verifier_emp_code == 33892 ||
      this.verifier_emp_code == 28102 ||
      this.verifier_emp_code == 25759 ||
      this.verifier_emp_code == 36142 ||
      this.verifier_emp_code == 19237 ||
      this.verifier_emp_code == 30197 ||
      this.verifier_emp_code == 27589 ||
      this.verifier_emp_code == 14650 ||
      this.verifier_emp_code == 18777 ||
      this.verifier_emp_code == 34163 ||
      this.verifier_emp_code == 33892 ||
      this.verifier_emp_code == 33371 ||
      this.verifier_emp_code == 33893 ||
      this.verifier_emp_code == 31012 ||
      this.verifier_emp_code == 26598 ||
      this.verifier_emp_code == 27707 ||
      this.verifier_emp_code == 25291 ||
      this.verifier_emp_code == 32609 ||
      this.verifier_emp_code == 35882
    ) {
      // Swal.fire('You are eligible for form verification');
      this.enableform = true;
      this.hidesubmitbtn = true;
      this.editForUser = false;
      Swal.fire({
        // position: "top-end",
        icon: 'success',
        title: 'You are eligible for form verification',
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      this.enableform = false;
      this.hidesubmitbtn = false;
      this.editForUser = true;
      // Swal.fire('You are not eligible for form verification');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You are not eligible for form verification',
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  }
  formverified(str: string) {
    try {
      this.spinner.show();
      if (str === 'User') {
        // let savedCounter = localStorage.getItem('saveCounter');
        // if (savedCounter) {
        //   this.saveCounter = parseInt(savedCounter, 10);
        // }
        // let empAutoNumber = localStorage.getItem('empAutoNumber');
        // if (this.empAutoNumber) {
        //   if (empAutoNumber !== this.empAutoNumber.toString()) {
        //     this.saveCounter = 0;
        //   }
        // }
        // this.saveCounter++;
        // localStorage.setItem('saveCounter', this.saveCounter.toString());
        //localStorage.setItem('empAutoNumber', this.empAutoNumber.toString());
        //this.disableEditButton = this.saveCounter < 1;
        // this.editForUser = true;
      }

      this.document_submit.forEach((Element) => {
        delete Element.Particular;
      });

      this.consentForm.forEach((Element) => {
        delete Element.Question, delete Element.candidateRemarks;
      });
      delete this.fillingAndverifiedForm.employeeName;
      this.personalDataForm.employeeDateofBirth = this.datepipe.transform(
        this.personalDataForm.employeeDateofBirth,
        'dd/MMM/yyyy'
      );
      this.form2FamilyBackgroundArray.forEach((item) => {
        if (item.famdob) {
          item.famdob = this.datepipe.transform(item.famdob, 'dd-MMM-yyyy');
        }
      });
      if (this.NominationDeclarationForm.EmployeeDateofBirth) {
        this.NominationDeclarationForm.EmployeeDateofBirth =
          this.datepipe.transform(
            this.NominationDeclarationForm.EmployeeDateofBirth,
            'dd/MMM/yyyy'
          );
      }
      if (this.secondEmployeeHistoryArray.length) {
        this.secondEmployeeHistoryArray.forEach((element) => {
          element.FromDate = this.datepipe.transform(
            element.FromDate,
            'dd/MMM/yyyy'
          );
          element.ToDate = this.datepipe.transform(element.ToDate, 'dd/MMM/yyyy');
        });
      }
      if (this.EPFOForm.EpfoDateofBirth) {
        this.EPFOForm.EpfoDateofBirth = this.datepipe.transform(
          this.EPFOForm.EpfoDateofBirth,
          'dd/MMM/yyyy'
        );
      }
      if (this.EPFOForm.joinedOn) {
        this.EPFOForm.joinedOn = this.datepipe.transform(
          this.EPFOForm.joinedOn,
          'dd/MMM/yyyy'
        );
      }
      if (this.EPFOForm.PassportValidFrom) {
        this.EPFOForm.PassportValidFrom = this.datepipe.transform(
          this.EPFOForm.PassportValidFrom,
          'dd/MMM/yyyy'
        );
      }
      if (this.EPFOForm.PassportValidTo) {
        this.EPFOForm.PassportValidTo = this.datepipe.transform(
          this.EPFOForm.PassportValidTo,
          'dd/MMM/yyyy'
        );
      }

      if (this.EPFOForm.DateofExitforPrevious) {
        this.EPFOForm.DateofExitforPrevious = this.datepipe.transform(
          this.EPFOForm.DateofExitforPrevious,
          'dd/MMM/yyyy'
        );
      }

      var data = {
        Main1: this.personalDataForm,
        Delete: this.document_submit,
        Main: this.fillingAndverifiedForm,
        Main5: this.NominationDeclarationForm,
        Main7:this.GratuityRulesForm,
        Main8: this.EPFOForm,
        Detail: this.consentForm,
        Detail4: this.form2FamilyBackgroundArray,
        Detail12: this.KycdetailstableForm,
        Detail1: this.secondEducationQualificationArray,
        Detail2: this.secondEmployeeHistoryArray,
        Detail3: this.form2LaguageKnownArray,
      };
      console.log(data);
      this.downloadData(ApiGenerator.update_employee_form(data));
      this.document_submit.forEach((obj) => {
        switch (obj.Particular_index) {
          case '1':
            obj.Particular = 'C.V';
            break;
          case '2':
            obj.Particular =
              'DUPLICATE COPY OF INTENT/OFFER LETTER DULY SIGNED BY PROSPECTIVE EMPLOYEE';
            break;
          case '3':
            obj.Particular =
              "GUARANTEE FORM:- Guarantor's service(Govt Emp.) Identity card. -Guarantor's address proof";
            break;
          case '4':
            obj.Particular = 'AADHAR CARD';
            break;
          case '5':
            obj.Particular = 'PAN CARD';
            break;
          case '6':
            obj.Particular = 'ONE PHOTOGRAPH';
            break;
          case '7':
            obj.Particular = '10th MARKSHEET/CERTIFICATE';
            break;
          case '8':
            obj.Particular = 'LAST QUALIFICATION CERTIFICATE';
            break;
          case '9':
            obj.Particular = 'BANK PROOF / PASSBOOK/CHEQUE';
            break;
          case '10':
            obj.Particular = 'MEDICAL FITNNESS CERTIFICATE';
            break;
          case '11':
            obj.Particular =
              'LAST THREE(3) MONTHS SALARY SLIP FROM PREVIOUS EMPLOYER(for experience employee only)';
            break;
          case '12':
            obj.Particular = 'PARENTS AADHAR CARD';
            break;
          default:
            obj.Particular = ''; // Default value if index doesn't match
            break;
        }
      });
      //this.updateParticular(this.document_submit);
    } catch (err) {
      this.editForUser = false;
      console.log(err);
    }
  }

  checkadhar() {
    let data = {
      EMP_ADHAR: this.personalDataForm.employeeAdhar,
    };
    this.downloadData(ApiGenerator.checkadharcard(data));
  }

  checkPhone() {
    let data = {
      REC_CAND_PHONE: this.personalDataForm.employeePhoneNumber,
    };
    this.downloadData(ApiGenerator.checkPhoneNumber(data));
  }

  SearchData() {
    this.spinner.show();
    this.editForUser = true;
    let data = {
      EMP_AUTO_NO: this.emp_auto_number,
    };
    console.log(data);

    this.downloadData(ApiGenerator.search_emphrd(data));
    let empAutoNumberInLocalStorage = localStorage.getItem('empAutoNumber');
    let savedCounter = localStorage.getItem('saveCounter');
    if (savedCounter) {
      this.saveCounter = parseInt(savedCounter, 10);
    }
    if (this.empAutoNumber) {
      if (empAutoNumberInLocalStorage !== this.empAutoNumber.toString()) {
        this.saveCounter = 0;
      }
    }
  }
  // fileselected1(e){
  //   this.FileName1 = e.target.files[0];
  //   // const formData = new FormData();
  //   this.personalDataForm.profilepick = e.target.files[0].name;
  //   this.Filename = e.target.files[0].name.split('.').slice(0,-1).join('.');
  //   this.UploadSave = e.target.files[0].name;
  //   var reader = new FileReader();

  //   reader.readAsDataURL(e.target.files[0]); // read file as data url

  //   reader.onload = (event) => { // called once readAsDataURL is completed
  //     this.url = event.target.result;
  //   }
  //  }

  // upload_p(AutoNumber: string){
  //   const formData = new FormData();
  //   this.Filename = AutoNumber + this.Filename
  //   this.UploadSave = AutoNumber + this.UploadSave
  //  // console.log(this.Filename);

  //   formData.append('doc',this.FileName1);

  //   this.personalDataForm.profilepick = this.UploadSave
  //   //console.log(this.personalDataForm.profilepick);
  //   //console.log(this.Filename);

  //   // this.spinner.show();
  //   this.fileupload.EmpFileAttachment_ProfilePick(formData,this.Filename).subscribe(res => {
  //     if (res.type === HttpEventType.UploadProgress) {
  //       // This is an upload progress event. Compute and show the % done:
  //       const percentDone = Math.round(100 * res.loaded / res.total);
  //       this.MessageText = `Uploading Updated  in  Progress ${percentDone}% `;
  //     }
  //     else if (res instanceof HttpResponse) {
  //       this.MessageText = `Saving Data ....`;
  //       // this.spinner.hide();
  //     }

  //   })
  // }

  // profilepick: string="";
  // fileselected(e,index){
  //   for (var i = 0; i < e.target.files.length; i++) {
  //     var name = e.target.files[i].name;
  //     var type = e.target.files[i].type;
  //     var size = e.target.files[i].size;
  //     var modifiedDate = e.target.files[i].lastModifiedDate;
  //     var size_ = Math.round(size / 1024)
  //     // console.log ('Name: ' + name + "\n" +
  //     //   'Type: ' + type + "\n" +
  //     //   'Last-Modified-Date: ' + modifiedDate + "\n" +
  //     //   'Size: ' + size_ + " KB");
  //             if(size_ <= 5000 && size_ >= 2){
  //         var FileName1 = e.target.files;
  //         const fileName=e.target.files.name;
  //         this.document_submit[index].Document_upload=FileName1;
  //         if(index==3){
  //           if (e.target.files && e.target.files[0]) {
  //             var reader = new FileReader();

  //             reader.readAsDataURL(e.target.files[0]); // read file as data url

  //             reader.onload = (event) => { // called once readAsDataURL is completed
  //               // this.url = event.target.result;
  //             }
  //           }
  //         }else{

  //         }
  //       }else{
  //         Swal.fire({
  //           position: 'top-end',
  //           icon: 'error',
  //           title: 'Selected file size must be between 2 KB and 5 MB',
  //           showConfirmButton: true
  //         });

  //         e.srcElement.value = null;
  //       }
  //   }
  //   console.log(FileName1)
  // }

  // fileSelected(event: any, index: number) {
  //   const file = event.target.files[0]; // Get the selected file

  //   const reader = new FileReader();

  //   reader.onload = (e: any) => {
  //     // Convert the selected file to base64
  //     const base64Data = e.target.result;

  //     // Update the 'Document_upload' property of the specific object in 'Detail5'
  //     for(let i=0;i<base64Data ;i++) {
  //     this.document_submit[i].Document_upload = base64Data;
  //     }
  //   };

  //   reader.readAsDataURL(file); // Start reading the selected file as base64
  // }

  // fileselected(event, index) {
  //   const files = event.target.files;

  //   for (let i = 0; i < files.length; i++) {
  //     const file = files[i];
  //     const reader = new FileReader();

  //     reader.onload = (e) => {
  //       const base64Image = e.target.result as string;
  //       this.base64Images.push(base64Image);

  //       // If you want to display the last image in the array, set imageSrc
  //       if (i === files.length - 1) {
  //         this.imageSrc = base64Image;
  //       }

  //       // You can use the base64Image for other purposes, e.g., send it to the server
  //       // this.sendBase64ToBackend(base64Image);
  //     };

  //     reader.readAsDataURL(file);
  //   }
  // }
  getuserphoneno() {
    this.EPFOForm.EpfoMobile = sessionStorage.getItem("session");
    this.EPFOForm.EpfoMobile = this.personalDataForm.employeePhoneNumber.toString();
  }

  getfathername() {
    this.DeclarationForm.EmployeeFatherorHusband =
      this.personalDataForm.employeeFatherName;
    this.InsuranceCorporation.InsCor_Fath_hus_name =
      this.personalDataForm.employeeFatherName;
    this.NominationDeclarationForm.EmployeeFatherHusbandName =
      this.personalDataForm.employeeFatherName;
    this.EPFOForm.EpfoFatherHusbandName =
      this.personalDataForm.employeeFatherName;
  }
  getpermaadd() {
    this.DeclarationForm.PermanentAddress =
      this.personalDataForm.employeePermanentAddress;
    this.NominationDeclarationForm.PermanentAddress =
      this.personalDataForm.employeePermanentAddress;
    this.form2FamilyBackgroundArray.forEach((Element) => {
      Element.famaddress = this.personalDataForm.employeePermanentAddress;
    });
  }
  getpresenadd() {
    this.DeclarationForm.PresentAddress =
      this.personalDataForm.employeePresentAddress;
    this.InsuranceCorporation.InsCor_Presentaddress =
      this.personalDataForm.employeePresentAddress;
    this.NominationDeclarationForm.TemporaryAddress =
      this.personalDataForm.employeePresentAddress;
  }
  martialstatus() {
    this.DeclarationForm.MaritalStatus =
      this.personalDataForm.employeeMaritalStatus;
    this.InsuranceCorporation.InsCor_martialstatus =
      this.personalDataForm.employeeMaritalStatus;
    this.NominationDeclarationForm.EmployeeMarital =
      this.personalDataForm.employeeMaritalStatus;
    this.GratuityRulesForm.StatementMaritalStatus =
      this.personalDataForm.employeeMaritalStatus;
    this.EPFOForm.EpfoMaritalStatus =
      this.personalDataForm.employeeMaritalStatus;
  }
  getmailid() {
    this.EPFOForm.EpfoEmail = this.personalDataForm.employeeemail;
  }
  religion() {
    this.GratuityRulesForm.StatementReligion =
      this.personalDataForm.employeeReligion;
  }
  sex() {
    this.NominationDeclarationForm.EmployeeSex =
      this.personalDataForm.Employeegender;
    this.GratuityRulesForm.StatementSex = this.personalDataForm.Employeegender;
    this.EPFOForm.EpfoGender = this.personalDataForm.Employeegender;
    this.DeclarationForm.Sex = this.personalDataForm.Employeegender;
    this.InsuranceCorporation.InsCor_sex = this.personalDataForm.Employeegender;
  }
  getdatafrompersonaldetail() {
    this.submitDisable = false;
    (this.DeclarationForm.DateofBirth =
      this.personalDataForm.employeeDateofBirth),
      (this.InsuranceCorporation.InsCor_dob =
        this.personalDataForm.employeeDateofBirth),
      (this.EPFOForm.EpfoDateofBirth =
        this.personalDataForm.employeeDateofBirth),
      (this.NominationDeclarationForm.EmployeeDateofBirth =
        this.personalDataForm.employeeDateofBirth),
      new Date(this.personalDataForm.employeeDateofBirth).toISOString();
  }
  getage() {
    this.InsuranceCorporation.InsCor_Age = this.DeclarationForm.Age;
  }
  getinsuno() {
    this.InsuranceCorporation.InsCor_Insuranceno =
      this.DeclarationForm.InsuranceNo;
  }
  getdatafromdecalarationdetail() {
    this.NominationDeclarationForm.EmployeeSex = this.DeclarationForm.Sex;
    this.GratuityRulesForm.StatementSex = this.DeclarationForm.Sex;
    this.EPFOForm.EpfoGender = this.DeclarationForm.Sex;
  }
  resetwholeform() {
    this.personalDataForm = new personalData();
    this.fillingAndverifiedForm = new fillingAndverified();
    this.form4DeclarationForm = new form4Declaration();
    this.DeclarationForm = new Declaration();
    this.NominationDeclarationForm = new NominationDeclaration();
    this.RevisedForm = new Revised();
    this.GratuityRulesForm = new GratuityRules();
    this.EPFOForm = new EPFO();
    this.InsuranceCorporation = new InsuranceCorporation();

    this.secondEducationQualificationArray = new Array<form2Educationtable>();
    this.secondEducationQualificationArray.push(new form2Educationtable());

    this.secondEmployeeHistoryArray = new Array<form2EmployeeHistory>();
    this.secondEmployeeHistoryArray.push(new form2EmployeeHistory());

    this.form2LaguageKnownArray = new Array<form2LaguageKnown>();
    this.form2LaguageKnownArray.push(new form2LaguageKnown());

    this.form2FamilyBackgroundArray = new Array<form2FamilyBackground>();
    this.form2FamilyBackgroundArray.push(new form2FamilyBackground());

    this.emp_auto_number = null;

    this.document_submit = new Array<document_submit>();
    this.document_submit.push(
      {
        AutoNumber: null,
        Particular_index: '1',
        Particular: 'C.V',
        Specify_document: 'CV',
        Submit: '',
        Recieved: '',
        CV_UPLOAD: '',
        GURANTEE_UPLOAD: '',
        INTENTLETTER_UPLOAD: '',
        PHOTO_UPLOAD: '',
        REFRE_UPLOAD: '',
        DEGREE_UPLOAD: '',
        ID_UPLOAD: '',
        RESS_UPLOAD: '',
        MEDICALFITNESS_UPLOAD: '',
        Document_upload: '',
        SALARY_SLIP_UPLOAD: '',
        RELIEVING_LETTER_UPLOAD: '',
        BANKSTATEMENT_UPLOAD: '',
      },
      {
        AutoNumber: null,
        Particular_index: '2',
        Particular:
          'DUPLICATE COPY OF INTENT/OFFER LETTER DULY SIGNED BY PROSPECTIVE EMPLOYEE',
        Specify_document: 'LOI',
        Submit: '',
        Recieved: '',
        CV_UPLOAD: '',
        GURANTEE_UPLOAD: '',
        INTENTLETTER_UPLOAD: '',
        PHOTO_UPLOAD: '',
        REFRE_UPLOAD: '',
        DEGREE_UPLOAD: '',
        ID_UPLOAD: '',
        RESS_UPLOAD: '',
        MEDICALFITNESS_UPLOAD: '',
        Document_upload: '',
        SALARY_SLIP_UPLOAD: '',
        RELIEVING_LETTER_UPLOAD: '',
        BANKSTATEMENT_UPLOAD: '',
      },
      {
        AutoNumber: null,
        Particular_index: '3',
        Particular:
          "GUARANTEE FORM:- Guarantor's service(Govt Emp.) Identity card. -Guarantor's address proof",
        Specify_document: 'GUARANTOR FORM',
        Submit: '',
        Recieved: '',
        CV_UPLOAD: '',
        GURANTEE_UPLOAD: '',
        INTENTLETTER_UPLOAD: '',
        PHOTO_UPLOAD: '',
        REFRE_UPLOAD: '',
        DEGREE_UPLOAD: '',
        ID_UPLOAD: '',
        RESS_UPLOAD: '',
        MEDICALFITNESS_UPLOAD: '',
        Document_upload: '',
        SALARY_SLIP_UPLOAD: '',
        RELIEVING_LETTER_UPLOAD: '',
        BANKSTATEMENT_UPLOAD: '',
      },
      {
        AutoNumber: null,
        Particular_index: '4',
        Particular: 'AADHAR CARD',
        Specify_document: 'AADHAR',
        Submit: '',
        Recieved: '',
        CV_UPLOAD: '',
        GURANTEE_UPLOAD: '',
        INTENTLETTER_UPLOAD: '',
        PHOTO_UPLOAD: '',
        REFRE_UPLOAD: '',
        DEGREE_UPLOAD: '',
        ID_UPLOAD: '',
        RESS_UPLOAD: '',
        MEDICALFITNESS_UPLOAD: '',
        Document_upload: '',
        SALARY_SLIP_UPLOAD: '',
        RELIEVING_LETTER_UPLOAD: '',
        BANKSTATEMENT_UPLOAD: '',
      },
      {
        AutoNumber: null,
        Particular_index: '5',
        Particular: 'PAN CARD',
        Specify_document: 'PAN',
        Submit: '',
        Recieved: '',
        CV_UPLOAD: '',
        GURANTEE_UPLOAD: '',
        INTENTLETTER_UPLOAD: '',
        PHOTO_UPLOAD: '',
        REFRE_UPLOAD: '',
        DEGREE_UPLOAD: '',
        ID_UPLOAD: '',
        RESS_UPLOAD: '',
        MEDICALFITNESS_UPLOAD: '',
        Document_upload: '',
        SALARY_SLIP_UPLOAD: '',
        RELIEVING_LETTER_UPLOAD: '',
        BANKSTATEMENT_UPLOAD: '',
      },
      {
        AutoNumber: null,
        Particular_index: '6',
        Particular: 'ONE PHOTOGRAPH',
        Specify_document: 'PHOTO',
        Submit: '',
        Recieved: '',
        CV_UPLOAD: '',
        GURANTEE_UPLOAD: '',
        INTENTLETTER_UPLOAD: '',
        PHOTO_UPLOAD: '',
        REFRE_UPLOAD: '',
        DEGREE_UPLOAD: '',
        ID_UPLOAD: '',
        RESS_UPLOAD: '',
        MEDICALFITNESS_UPLOAD: '',
        Document_upload: '',
        SALARY_SLIP_UPLOAD: '',
        RELIEVING_LETTER_UPLOAD: '',
        BANKSTATEMENT_UPLOAD: '',
      },
      {
        AutoNumber: null,
        Particular_index: '7',
        Particular: '10th MARKSHEET/CERTIFICATE',
        Specify_document: '10',
        Submit: '',
        Recieved: '',
        CV_UPLOAD: '',
        GURANTEE_UPLOAD: '',
        INTENTLETTER_UPLOAD: '',
        PHOTO_UPLOAD: '',
        REFRE_UPLOAD: '',
        DEGREE_UPLOAD: '',
        ID_UPLOAD: '',
        RESS_UPLOAD: '',
        MEDICALFITNESS_UPLOAD: '',
        Document_upload: '',
        SALARY_SLIP_UPLOAD: '',
        RELIEVING_LETTER_UPLOAD: '',
        BANKSTATEMENT_UPLOAD: '',
      },
      {
        AutoNumber: null,
        Particular_index: '8',
        Particular: 'LAST QUALIFICATION CERTIFICATE',
        Specify_document: 'LAST QUALIFICATION',
        Submit: '',
        Recieved: '',
        CV_UPLOAD: '',
        GURANTEE_UPLOAD: '',
        INTENTLETTER_UPLOAD: '',
        PHOTO_UPLOAD: '',
        REFRE_UPLOAD: '',
        DEGREE_UPLOAD: '',
        ID_UPLOAD: '',
        RESS_UPLOAD: '',
        MEDICALFITNESS_UPLOAD: '',
        Document_upload: '',
        SALARY_SLIP_UPLOAD: '',
        RELIEVING_LETTER_UPLOAD: '',
        BANKSTATEMENT_UPLOAD: '',
      },
      {
        AutoNumber: null,
        Particular_index: '9',
        Particular: 'BANK PROOF / PASSBOOK/CHEQUE ',
        Specify_document: 'BANK',
        Submit: '',
        Recieved: '',
        CV_UPLOAD: '',
        GURANTEE_UPLOAD: '',
        INTENTLETTER_UPLOAD: '',
        PHOTO_UPLOAD: '',
        REFRE_UPLOAD: '',
        DEGREE_UPLOAD: '',
        ID_UPLOAD: '',
        RESS_UPLOAD: '',
        MEDICALFITNESS_UPLOAD: '',
        Document_upload: '',
        SALARY_SLIP_UPLOAD: '',
        RELIEVING_LETTER_UPLOAD: '',
        BANKSTATEMENT_UPLOAD: '',
      },
      {
        AutoNumber: null,
        Particular_index: '10',
        Particular: 'MEDICAL FITNNESS CERTIFICATE',
        Specify_document: 'MEDICAL',
        Submit: '',
        Recieved: '',
        CV_UPLOAD: '',
        GURANTEE_UPLOAD: '',
        INTENTLETTER_UPLOAD: '',
        PHOTO_UPLOAD: '',
        REFRE_UPLOAD: '',
        DEGREE_UPLOAD: '',
        ID_UPLOAD: '',
        RESS_UPLOAD: '',
        MEDICALFITNESS_UPLOAD: '',
        Document_upload: '',
        SALARY_SLIP_UPLOAD: '',
        RELIEVING_LETTER_UPLOAD: '',
        BANKSTATEMENT_UPLOAD: '',
      },
      {
        AutoNumber: null,
        Particular_index: '11',
        Particular:
          'LAST THREE(3) MONTHS SALARY SLIP FROM PREVIOUS EMPLOYER(for experience employee only)',
        Specify_document: 'SALARY SLIP',
        Submit: '',
        Recieved: '',
        CV_UPLOAD: '',
        GURANTEE_UPLOAD: '',
        INTENTLETTER_UPLOAD: '',
        PHOTO_UPLOAD: '',
        REFRE_UPLOAD: '',
        DEGREE_UPLOAD: '',
        ID_UPLOAD: '',
        RESS_UPLOAD: '',
        MEDICALFITNESS_UPLOAD: '',
        Document_upload: '',
        SALARY_SLIP_UPLOAD: '',
        RELIEVING_LETTER_UPLOAD: '',
        BANKSTATEMENT_UPLOAD: '',
      },
      {
        AutoNumber: null,
        Particular_index: '12',
        Particular: 'PARENTS AADHAR CARD',
        Specify_document: 'PARENTS AADHAR',
        Submit: '',
        Recieved: '',
        CV_UPLOAD: '',
        GURANTEE_UPLOAD: '',
        INTENTLETTER_UPLOAD: '',
        PHOTO_UPLOAD: '',
        REFRE_UPLOAD: '',
        DEGREE_UPLOAD: '',
        ID_UPLOAD: '',
        RESS_UPLOAD: '',
        MEDICALFITNESS_UPLOAD: '',
        Document_upload: '',
        SALARY_SLIP_UPLOAD: '',
        RELIEVING_LETTER_UPLOAD: '',
        BANKSTATEMENT_UPLOAD: '',
      }
    );

    this.consentForm = new Array<CandidateconsentForm>();
    this.consentForm.push(
      {
        AutoNumber: null,
        Question_index: '1',
        Question:
          'Are you open for all India. क्या आप पूरे भारत के लिए खुले हैं?',
        candidateRemarks: '',
        hrRemarks: '',
      },
      {
        AutoNumber: null,
        Question_index: '2',
        Question: 'DO you have conveyance. क्या आपके पास कन्वेंस है?',
        candidateRemarks: '',
        hrRemarks: '',
      },
      {
        AutoNumber: null,
        Question_index: '3',
        Question:
          'You can transfer anywhere in india. आप भारत में कहीं भी ट्रांसफर कर सकते हैं',
        candidateRemarks: '',
        hrRemarks: '',
      },
      {
        AutoNumber: null,
        Question_index: '4',
        Question:
          'An appointment letter will be provided after one year of services - एक वर्ष की सेवाओं के बाद नियुक्ति पत्र प्रदान किया जाएगा',
        candidateRemarks: '',
        hrRemarks: '',
      },
      {
        AutoNumber: null,
        Question_index: '5',
        Question:
          'You are eligible for an experience letter / Relieving letter after one year of services - आप सेवाओं के एक वर्ष के बाद एक अनुभव पत्र / राहत पत्र के लिए पात्र हैं',
        candidateRemarks: '',
        hrRemarks: '',
      },
      {
        AutoNumber: null,
        Question_index: '6',
        Question:
          'Minimum one month notice is required if you want to leave the organization - यदि आप संगठन छोड़ना चाहते हैं तो न्यूनतम एक महीने का नोटिस आवश्यक है',
        candidateRemarks: '',
        hrRemarks: '',
      },
      {
        AutoNumber: null,
        Question_index: '7',
        Question:
          'Initial 6 months Leave will not be provided except emergency - इमरजेंसी को छोड़कर शुरुआती 6 महीने की छुट्टी नहीं दी जाएगी',
        candidateRemarks: '',
        hrRemarks: '',
      },
      {
        AutoNumber: null,
        Question_index: '8',
        Question:
          'I hereby accept Terms and Condition of Mess - मैं मेस के नियम और शर्तें स्वीकार करता हूं',
        candidateRemarks: '',
        hrRemarks: '',
      },
      {
        AutoNumber: null,
        Question_index: '9',
        Question:
          'Mess/CCA 1000 for south Region and 500 for other Region except for Delhi/NCR - दक्षिण क्षेत्र के लिए मेस / सीसीए 1000 और दिल्ली / एनसीआर को छोड़कर अन्य क्षेत्र के लिए 500',
        candidateRemarks: '',
        hrRemarks: '',
      },
      {
        AutoNumber: null,
        Question_index: '10',
        Question:
          'if you are deputed at Pune Refundable Security Deposit Rs. 1000 for Locker facility - यदि आप पुणे रिफंडेबल सिक्योरिटी डिपॉजिट पर रु। 1000 लॉकर सुविधा के लिए',
        candidateRemarks: '',
        hrRemarks: '',
      },
      {
        AutoNumber: null,
        Question_index: '11',
        Question:
          'if you fail to follow the above-mentioned points your appointment will stand as canceled with immediate effect - यदि आप उपर्युक्त बिंदुओं का पालन करने में विफल रहते हैं तो आपकी नियुक्ति तत्काल प्रभाव से रद्द कर दी जाएगी',
        candidateRemarks: '',
        hrRemarks: '',
      },
      {
        AutoNumber: null,
        Question_index: '12',
        Question: 'Documentation',
        candidateRemarks: '',
        hrRemarks: '',
      },
      {
        AutoNumber: null,
        Question_index: '13',
        Question:
          'Department Deputation - विभाग की प्रतिनियुक्ति Accounts/Cash,Audit, Operations, Credit Control, Marketing, Admin, Data Entry/MIS, KOM/Co-Ordination, Customer Care',
        candidateRemarks: '',
        hrRemarks: '',
      }
    );
    this.form6FamilyTableForm = new Array<form6FamilyTable>();
    this.form6FamilyTableForm.push(new form6FamilyTable());

    this.EPFNominationFamilyArray = new Array<EPFNominationFamily>();
    this.EPFNominationFamilyArray.push(new EPFNominationFamily());

    this.ePSfamilyMemberArray = new Array<EPSfamilyMember>();
    this.ePSfamilyMemberArray.push(new EPSfamilyMember());

    this.ePSnomineeformArray = new Array<EPSnomineeform>();
    this.ePSnomineeformArray.push(new EPSnomineeform());

    this.gratuityNomineeArray = new Array<GratuityNominee>();
    this.gratuityNomineeArray.push(new GratuityNominee());
    this.KycdetailstableForm = new Array<Kycdetailstable>();
    this.KycdetailstableForm.push(
      {
        AutoNumber: null,
        KYCDocumenttype: 'Bank Account(Please fill IFSC Code in Remarks field)',
        NameasonDocument: '',
        KycNumber: '',
        KycRemarks: '',
      },
      //
      {
        AutoNumber: null,
        KYCDocumenttype: 'Permanent Account Number(PAN)',
        NameasonDocument: '',
        KycNumber: '',
        KycRemarks: '',
      },
      // {
      //   AutoNumber: null,
      //   KYCDocumenttype: 'Passport',
      //   NameasonDocument: '',
      //   KycNumber: '',
      //   KycRemarks: ''
      // },
      // {
      //   AutoNumber: null,
      //   KYCDocumenttype: 'Driving Licence',
      //   NameasonDocument: '',
      //   KycNumber: '',
      //   KycRemarks: ''
      // },
      // {
      //   AutoNumber: null,
      //   KYCDocumenttype: 'Election Card',
      //   NameasonDocument: '',
      //   KycNumber: '',
      //   KycRemarks: ''
      // },
      // {
      //   AutoNumber: null,
      //   KYCDocumenttype: 'Ration Card',
      //   NameasonDocument: '',
      //   KycNumber: '',
      //   KycRemarks: ''
      // },
      {
        AutoNumber: null,
        KYCDocumenttype: 'Driving Licence',
        NameasonDocument: '',
        KycNumber: '',
        KycRemarks: '',
      },
      {
        AutoNumber: null,
        KYCDocumenttype: 'ESIC Card',
        NameasonDocument: '',
        KycNumber: '',
        KycRemarks: '',
      }
    );
    //this.employeeFirstName_salu = "";
    this.referencesName2 = '';
    this.referencesName1 = '';
    this.presentconnectbusiness_radio_yes = false;
    this.presentconnectbusiness_radio_no = false;
    this.relatedworkingOMgroup_radio_yes = false;
    this.relatedworkingOMgroup_radio_no = false;
    this.relationworkinGovtDep_radio_yes = false;
    this.relationworkinGovtDep_radio_no = false;
    this.providentFundAccount_radio_yes = false;
    this.providentFundAccount_radio_no = false;
    this.arrestedforOffence_radio_yes = false;
    this.arrestedforOffence_radio_no = false;
    this.CountryofOrigin_radio_otherindia = false;
    this.CountryofOrigin_radio_india = false;
    this.EpfoSpeciallyAbled_radio_yes = false;
    this.EpfoSpeciallyAbled_radio_no = false;
    this.InternationalWorker_radio_yes = false;
    this.InternationalWorker_radio_no = false;
    this.UniversalAccountNo_radio_UAN = false;
    this.UniversalAccountNo_radio_PF = false;
    this.MemberofEPFS_radio_yes = false;
    this.MemberofEPFS_radio_no = false;
    this.MemberofEPS_radio_yes = false;
    this.MemberofEPS_radio_no = false;
    this.fresher_exp_fresher = false;
    this.fresher_exp_experience = false;
    this.fresher_exp = 'Fresher';
    this.signature="";
    this.imageSrc="";

  }

  getPinCode() {
    this.personalDataForm.employeePinCode =
      this.personalDataForm.employeePinCode;
  }

  firstnameget() {
    this.personalDataForm.declarationName =
      this.personalDataForm.employeeFirstName +
      '  ' +
      '  ' +
      this.personalDataForm.employeeLastName;
    this.personalDataForm.employeeSign =
      this.personalDataForm.employeeFirstName +
      '  ' +
      '  ' +
      this.personalDataForm.employeeLastName;
    this.fillingAndverifiedForm.employeeName =
      this.personalDataForm.employeeFirstName +
      '  ' +
      '  ' +
      this.personalDataForm.employeeLastName;
    this.form4DeclarationForm.declarationCandidateSign =
      this.personalDataForm.employeeFirstName +
      '  ' +
      '  ' +
      this.personalDataForm.employeeLastName;
    this.DeclarationForm.EmployeeName =
      this.personalDataForm.employeeFirstName +
      '  ' +
      '  ' +
      this.personalDataForm.employeeLastName;
    this.DeclarationForm.employeeSignature =
      this.personalDataForm.employeeFirstName +
      '  ' +
      '  ' +
      this.personalDataForm.employeeLastName;
    this.NominationDeclarationForm.subscriberSign =
      this.personalDataForm.employeeFirstName +
      '  ' +
      '  ' +
      this.personalDataForm.employeeLastName;
    this.RevisedForm.RevisedName =
      this.personalDataForm.employeeFirstName +
      '  ' +
      '  ' +
      this.personalDataForm.employeeLastName;
    this.RevisedForm.RevisedEmployeeSign =
      this.personalDataForm.employeeFirstName +
      '  ' +
      '  ' +
      this.personalDataForm.employeeLastName;
    this.NominationDeclarationForm.EmployeeName =
      this.personalDataForm.employeeFirstName +
      '  ' +
      '  ' +
      this.personalDataForm.employeeLastName;
    this.NominationDeclarationForm.secondsubscriberSign =
      this.personalDataForm.employeeFirstName +
      '  ' +
      '  ' +
      this.personalDataForm.employeeLastName;
    this.EPFOForm.EpfoMemberSign =
      this.personalDataForm.employeeFirstName +
      '  ' +
      '  ' +
      this.personalDataForm.employeeLastName;
    this.EPFOForm.EpfoName =
      this.personalDataForm.employeeFirstName +
      '  ' +
      '  ' +
      this.personalDataForm.employeeLastName;
    this.InsuranceCorporation.InsCor_Name =
      this.personalDataForm.employeeFirstName +
      '  ' +
      '  ' +
      this.personalDataForm.employeeLastName;
    this.InsuranceCorporation.InsCor_signinsuredpersn =
      this.personalDataForm.employeeFirstName +
      '  ' +
      '  ' +
      this.personalDataForm.employeeLastName;
    this.GratuityRulesForm.StatementEmployeeSign =
      this.personalDataForm.employeeFirstName +
      '  ' +
      '  ' +
      this.personalDataForm.employeeLastName;
    this.GratuityRulesForm.particularName =
      this.personalDataForm.employeeFirstName +
      '  ' +
      '  ' +
      this.personalDataForm.employeeLastName;
    this.GratuityRulesForm.StatementNameofEmployee =
      this.personalDataForm.employeeFirstName +
      '  ' +
      '  ' +
      this.personalDataForm.employeeLastName;
    // personalDataForm.referencesName1
  }
  nomniyesorno: string = '';
  nomni(i) {
    if (this.form2FamilyBackgroundArray[i].nomniyesorno === 'y') {
      this.form2FamilyBackgroundArray.forEach((Element, index) => {
        if (i !== index) {
          Element.nomniyesorno = 'n';
        }
      });
      this.EPFNominationFamilyArray.forEach((Element) => {
        let famdobDate: Date = new Date(
          this.form2FamilyBackgroundArray[i].famdob
        );
        if (famdobDate) {
          let formattedDate: string = this.datepipe.transform(
            famdobDate,
            'dd/MMM/yyyy'
          );
          Element.NomineeAge = formattedDate;
        }
        (Element.NomineeName = this.form2FamilyBackgroundArray[i].FamilyName),
          (Element.NomineeRelationship =
            this.form2FamilyBackgroundArray[i].FamilyRelation),
          // Element.NomineeAge = this.form2FamilyBackgroundArray[i].famdob, //this.form2FamilyBackgroundArray[i].famdob.toString();
          (Element.NomineeAddress =
            this.form2FamilyBackgroundArray[i].famaddress),
          (Element.NomineeminorGuardName =
            this.form2FamilyBackgroundArray[i].famaddress);
      });
      // console.log(this.EPFNominationFamilyArray)
      this.ePSfamilyMemberArray.forEach((Element) => {
        (Element.EPSfamilyAddress =
          this.form2FamilyBackgroundArray[i].famaddress),
          (Element.EPSfamilyName =
            this.form2FamilyBackgroundArray[i].FamilyName),
          (Element.EPSfamilydateOfBirth =
            this.form2FamilyBackgroundArray[i].famdob);
        Element.EPSfamilyrelationship =
          this.form2FamilyBackgroundArray[i].FamilyRelation;
      });
      this.ePSnomineeformArray.forEach((Element) => {
        Element.NomineeDateofbirth = this.form2FamilyBackgroundArray[i].famdob;
        (Element.NomineeNameAddress =
          this.form2FamilyBackgroundArray[i].famaddress),
          (Element.Nomineerelationship =
            this.form2FamilyBackgroundArray[i].FamilyRelation);
      });
      this.gratuityNomineeArray.forEach((Element) => {
        const famdobDate: Date = new Date(
          this.form2FamilyBackgroundArray[i].famdob
        );
        const formattedDate: string = this.datepipe.transform(
          famdobDate,
          'dd/MMM/yyyy'
        );
        Element.NomineeeAge = formattedDate;
        (Element.NomineeeAge = this.form2FamilyBackgroundArray[i].famdob),
          // Element.NomineeeNameAddress = this.form2FamilyBackgroundArray[i].FamilyName + ", " + " ," +(this.form2FamilyBackgroundArray[i].famaddress)
          (Element.NomineeeNameAddress =
            this.form2FamilyBackgroundArray[i].FamilyName +
            ', (' +
            this.form2FamilyBackgroundArray[i].famaddress +
            ')');
        console.log(
          'Family Name:',
          this.form2FamilyBackgroundArray[i].FamilyName
        );
        console.log(
          'Family Address:',
          this.form2FamilyBackgroundArray[i].famaddress
        );

        Element.NomineeeRelationship =
          this.form2FamilyBackgroundArray[i].FamilyRelation;
      });

      // this.DeclarationForm.nomineeName = this.form2FamilyBackgroundArray[i].FamilyName
      // // this.DeclarationForm.nomineeAge = this.form2FamilyBackgroundArray[i].famdob

      // this.DeclarationForm.nomineeAddress = this.form2FamilyBackgroundArray[i].famaddress
      // this.DeclarationForm.nomineeRelation = this.form2FamilyBackgroundArray[i].FamilyRelation
      // console.log(this.DeclarationForm.nomineeAge)

      this.DeclarationForm.nomineeName =
        this.form2FamilyBackgroundArray[i].FamilyName;
      if (this.form2FamilyBackgroundArray[i].famdob) {
        this.DeclarationForm.nomineeAge = this.datepipe.transform(
          this.form2FamilyBackgroundArray[i].famdob,
          'dd/MMM/yyyy'
        );
      }
      this.DeclarationForm.nomineeAddress =
        this.form2FamilyBackgroundArray[i].famaddress;
      this.DeclarationForm.nomineeRelation =
        this.form2FamilyBackgroundArray[i].FamilyRelation;
    }
  }

  //   upload_(AutoNumber: string){
  //    console.log(AutoNumber);
  //   const formdata = new FormData();
  //     for (let i = 0; i < this.document_submit.length; i++) {
  //       if(!AppUtil.isNullOrEmpty(this.document_submit[i].Document_upload))
  //       {
  //       for(let j = 0; j <this.document_submit[i].Document_upload.length; j++)
  //       {
  //        // console.log(this.document_submit[i].Document_upload);
  //         formdata.append('f', this.document_submit[i].Document_upload[j])
  //       }

  //       }

  //     }
  // // console.log(formdata)

  //     this.fileupload.EmpFileAttachment(formdata,AutoNumber).subscribe(res => {
  // console.log(res);

  //       if (res.type === HttpEventType.UploadProgress) {
  //         // This is an upload progress event. Compute and show the % done:
  //         const percentDone = Math.round(100 * res.loaded / res.total);
  //         this.MessageText = `Uploading Updated  in  Progress ${percentDone}% `;
  //       }
  //       else if (res instanceof HttpResponse) {
  //         console.log('Document Uploaded Successfully')
  //         this.MessageText = `Saving Data ....`;
  //          //this.spinner.hide();

  //     }

  //     })

  //   }

  // Form2 education table addrow and delete row
  addSecondEdu() {
    let autoNumber = null;
    if(this.secondEducationQualificationArray && this.secondEducationQualificationArray.length){
      autoNumber = this.secondEducationQualificationArray[0].AutoNumber;
    }
    this.secondEducationQualification = {
      AutoNumber: autoNumber,
      examinationPassed: '',
      yearofPassing: '',
      BoardCollege: '',
      Subject: '',
      percentageofMarks: '',
      GradeObtained: '',
    };
    this.secondEducationQualificationArray.push(
      this.secondEducationQualification
    );
    return true;
  }

  deleteSecondEdu(index) {
    if (this.secondEducationQualificationArray.length == 1) {
      return false;
    } else {
      this.secondEducationQualificationArray.splice(index, 1);
      return true;
    }
  }

  // form2 employee work history

  addemployeehistory(index) {
    let autoNumber = null;
    if(this.secondEmployeeHistoryArray && this.secondEmployeeHistoryArray.length){
      autoNumber = this.secondEmployeeHistoryArray[0].AutoNumber;
    }
    this.secondEmployeeHistory = {
      AutoNumber: autoNumber,
      FromDate: '',
      ToDate: '',
      Totalyear: '',
      Companydetails: '',
      Designation: '',
      Gross: '',
      Reasonofleave: '',
    };
    this.secondEmployeeHistoryArray.push(this.secondEmployeeHistory);
    return true;
  }

  deleteemployeehistory(index) {
    if (this.secondEmployeeHistoryArray.length == 1) {
      return false;
    } else {
      this.secondEmployeeHistoryArray.splice(index, 1);
      return true;
    }
  }

  //form2 language know add row

  addLanguage(index) {
    let autoNumber = null;
    if(this.form2LaguageKnownArray && this.form2LaguageKnownArray.length){
      autoNumber = this.form2LaguageKnownArray[0].AutoNumber;
    }
    this.form2Laguage = {
      AutoNumber: autoNumber,
      language: '',
      understand: '',
      speak: '',
      read: '',
      write: '',
      otherRemarks: '',
    };
    this.form2LaguageKnownArray.push(this.form2Laguage);
    return true;
  }

  deleteLanguage(index) {
    if (this.form2LaguageKnownArray.length == 1) {
      return false;
    } else {
      this.form2LaguageKnownArray.splice(index, 1);
      return true;
    }
  }

  // form 2 family member table add row

  addFamily(index) {
    let autoNumber = null;
    if(this.form2FamilyBackgroundArray && this.form2FamilyBackgroundArray.length){
      autoNumber = this.form2FamilyBackgroundArray[0].AutoNumber;
    }
    this.form2FamilyBack = {
      AutoNumber: autoNumber,
      FamilyName: '',
      FamilyRelation: '',
      FamilyQualification: '',
      FamilyAge: '',
      FamilyOccupation: '',
      FamilyMobileNo: '',
    };
    this.form2FamilyBackgroundArray.push(this.form2FamilyBack);
    this.form2FamilyBackgroundArray.forEach((Element) => {
      Element.famaddress = this.personalDataForm.employeePermanentAddress;
    });
    return true;
  }

  deleteFamily(index) {
    if (this.form2FamilyBackgroundArray.length == 1) {
      return false;
    } else {
      this.form2FamilyBackgroundArray.splice(index, 1);
      return true;
    }
  }

  //Form 6 Family member table

  addDeclarationFamily(index) {
    this.form6Family = {
      AutoNumber: null,
      familyMemberName: '',
      familyMemberDateofBirth: '',
      familyMemberRelationship: '',
      familyMemberResidewith: '',
    };
    this.form6FamilyTableForm.push(this.form6Family);
    return true;
  }

  deleteDeclarationFamily(index) {
    if (this.form6FamilyTableForm.length == 1) {
      return false;
    } else {
      this.form6FamilyTableForm.splice(index, 1);
      return true;
    }
  }

  // form 7 epf nominee family

  addNominationFamily(index) {
    this.EPFNomination = {
      AutoNumber: null,
      NomineeName: '',
      NomineeAddress: '',
      NomineeRelationship: '',
      NomineeAge: '',
      NomineeTotalShare: '',
      NomineeminorGuardName: '',
    };
    this.EPFNominationFamilyArray.push(this.EPFNomination);
    return true;
  }

  deleteNominationFamily(index) {
    if (this.EPFNominationFamilyArray.length == 1) {
      return false;
    } else {
      this.EPFNominationFamilyArray.splice(index, 1);
      return true;
    }
  }

  // form 7 eps family table add row

  addePSfamilyMember(index) {
    this.ePSfamilyMember = {
      AutoNumber: null,
      EPSfamilyName: '',
      EPSfamilyAddress: '',
      EPSfamilydateOfBirth: '',
      EPSfamilyrelationship: '',
    };
    this.ePSfamilyMemberArray.push(this.ePSfamilyMember);
    return true;
  }

  deleteePSfamilyMember(index) {
    if (this.ePSfamilyMemberArray.length == 1) {
      return false;
    } else {
      this.ePSfamilyMemberArray.splice(index, 1);
      return true;
    }
  }

  // FORM 7 EPS NOMINEE FORM

  addEPSnomineeform(index) {
    this.ePSnomineeform = {
      AutoNumber: null,
      NomineeNameAddress: '',
      NomineeDateofbirth: '',
      Nomineerelationship: '',
    };
    this.ePSnomineeformArray.push(this.ePSnomineeform);
    return true;
  }

  deleteEPSnomineeform(index) {
    if (this.ePSnomineeformArray.length == 1) {
      return false;
    } else {
      this.ePSnomineeformArray.splice(index, 1);
      return true;
    }
  }

  //form 9 Nomineee table
  addgratuityNominee(index) {
    this.gratuityNominee = {
      AutoNumber: null,
      NomineeeNameAddress: '',
      NomineeeRelationship: '',
      NomineeeAge: '',
      NomineeeGratuityShared: '',
    };
    this.gratuityNomineeArray.push(this.gratuityNominee);
    return true;
  }

  deletegratuityNominee(index) {
    if (this.gratuityNomineeArray.length == 1) {
      return false;
    } else {
      this.gratuityNomineeArray.splice(index, 1);
      return true;
    }
  }

  form3() {
    console.log(this.DocumentSubmit);
    console.log(this.fillingAndverifiedForm);
  }

  onWork(e) {
    this.personalDataForm.presentconnectbusiness = e.value;
  }
  onfresher(e) {
    this.fresher_exp = e.value;
  }

  form2(e) {
    this.personalDataForm.relatedworkingOMgroup = e.value;
  }
  form21(e) {
    this.personalDataForm.relationworkinGovtDep = e.value;
  }
  form22(e) {
    this.personalDataForm.providentFundAccount = e.value;
  }
  form23(e) {
    this.personalDataForm.arrestedforOffence = e.value;
  }

  form9(e) {
    this.EPFOForm.MemberofEPFS = e.value;
  }

  form91(e) {
    this.EPFOForm.MemberofEPS = e.value;
  }

  form92(e) {
    this.EPFOForm.CheckUANorPF = e.value;
  }

  form93(e) {
    this.EPFOForm.InternationalWorker = e.value;
  }

  form94(e) {
    this.EPFOForm.CountryofOrigin = e.value;
  }
  disableillness: boolean = false;
  PhysicalDisability() {
    if (this.personalDataForm.PhysicalDisability == 'Yes') {
      this.disableillness = true;
    } else {
      this.disableillness = false;
    }
    this.disableillness = true;
  }
  form95(e) {
    this.EPFOForm.EpfoSpeciallyAbled = e.value;
  }

  form96(e) {
    this.EPFOForm.memberofEPFCoption = e.value;
  }
  form97(e) {
    this.personalDataForm.agreement = e.target.checked.toString();
  }
  //  clearDatepickerFields() {
  //   this.secondEmployeeHistory.FromDate = '';
  //   this.secondEmployeeHistory.ToDate = '';
  // }

  // changes(e) {
  //   for (var i in this.secondEmployeeHistoryArray) {
  //     this.first = this.datepipe.transform(this.secondEmployeeHistoryArray[i].FromDate, 'yyyy');
  //     this.second = this.datepipe.transform(this.secondEmployeeHistoryArray[i].ToDate, 'yyyy');
  //     this.secondEmployeeHistoryArray[i].Totalyear = this.second - this.first

  //   }
  // }
  changes(e) {
    for (var i in this.secondEmployeeHistoryArray) {
      const fromDate = new Date(this.secondEmployeeHistoryArray[i].FromDate);
      const toDate = new Date(this.secondEmployeeHistoryArray[i].ToDate);

      const fromYear = fromDate.getFullYear();
      const toYear = toDate.getFullYear();

      // Ensure both from and to dates are valid before calculating
      if (!isNaN(fromYear) && !isNaN(toYear)) {
        this.secondEmployeeHistoryArray[i].Totalyear = toYear - fromYear;
      } else {
        // Handle invalid dates if necessary
        this.secondEmployeeHistoryArray[i].Totalyear = null; // Or any default value
      }
    }
  }

  submitJSON() {
    try {
      this.spinner.show();
      this.submitDisable = true;

      // this.personalDataForm.profilepick = this.imageSrc
      // console.log(this.personalDataForm.profilepick)
      // this.personalDataForm.EMP_AUTO_DATE = this.datepipe.transform(this.personalDataForm.EMP_AUTO_DATE, 'dd/MMM/yyyy');
      this.personalDataForm.employeeDateofBirth = this.datepipe.transform(
        this.personalDataForm.employeeDateofBirth,
        'dd/MMM/yyyy'
      );

      for (var i in this.secondEmployeeHistoryArray) {
        this.secondEmployeeHistoryArray[i].FromDate = this.datepipe.transform(
          this.secondEmployeeHistoryArray[i].FromDate,
          'dd/MMM/yyyy'
        );
      }

      for (var i in this.secondEmployeeHistoryArray) {
        this.secondEmployeeHistoryArray[i].ToDate = this.datepipe.transform(
          this.secondEmployeeHistoryArray[i].ToDate,
          'dd/MMM/yyyy'
        );
      }

      this.DeclarationForm.DateofBirth = this.datepipe.transform(
        this.DeclarationForm.DateofBirth,
        'dd/MMM/yyyy'
      );
      if (this.DeclarationForm.DateofAppointment) {
        this.DeclarationForm.DateofAppointment = this.datepipe.transform(
          this.DeclarationForm.DateofAppointment,
          'dd/MMM/yyyy'
        );
      }

      for (var i in this.form6FamilyTableForm) {
        this.form6FamilyTableForm[i].familyMemberDateofBirth =
          this.datepipe.transform(
            this.form6FamilyTableForm[i].familyMemberDateofBirth,
            'dd/MMM/yyyy'
          );
      }

      this.NominationDeclarationForm.EmployeeDateofBirth =
        this.datepipe.transform(
          this.NominationDeclarationForm.EmployeeDateofBirth,
          'dd/MMM/yyyy'
        );

      this.NominationDeclarationForm.DateofMembershipEPF =
        this.datepipe.transform(
          this.NominationDeclarationForm.DateofMembershipEPF,
          'dd/MMM/yyyy'
        );

      for (var i in this.ePSfamilyMemberArray) {
        this.ePSfamilyMemberArray[i].EPSfamilydateOfBirth =
          this.datepipe.transform(
            this.ePSfamilyMemberArray[i].EPSfamilydateOfBirth,
            'dd/MMM/yyyy'
          );
      }

      for (var i in this.ePSnomineeformArray) {
        this.ePSnomineeformArray[i].NomineeDateofbirth =
          this.datepipe.transform(
            this.ePSnomineeformArray[i].NomineeDateofbirth,
            'dd/MMM/yyyy'
          );
      }
      for (var i in this.form2FamilyBackgroundArray) {
        if (this.form2FamilyBackgroundArray[i].famdob) {
          this.form2FamilyBackgroundArray[i].famdob = this.datepipe.transform(
            this.form2FamilyBackgroundArray[i].famdob,
            'dd/MMM/yyyy'
          );
        }
      }

      this.RevisedForm.EstablishFrom = this.datepipe.transform(
        this.RevisedForm.EstablishFrom,
        'dd/MMM/yyyy'
      );
      this.RevisedForm.leftServiceon = this.datepipe.transform(
        this.RevisedForm.leftServiceon,
        'dd/MMM/yyyy'
      );
      this.RevisedForm.EstablishTo = this.datepipe.transform(
        this.RevisedForm.EstablishTo,
        'dd/MMM/yyyy'
      );
      this.RevisedForm.familyPensionFundFrom = this.datepipe.transform(
        this.RevisedForm.familyPensionFundFrom,
        'dd/MMM/yyyy'
      );
      this.RevisedForm.familyPensionFundTo = this.datepipe.transform(
        this.RevisedForm.familyPensionFundTo,
        'dd/MMM/yyyy'
      );
      this.RevisedForm.DateofAppointment = this.datepipe.transform(
        this.RevisedForm.DateofAppointment,
        'dd/MMM/yyyy'
      );
      this.RevisedForm.DateFrom = this.datepipe.transform(
        this.RevisedForm.DateFrom,
        'dd/MMM/yyyy'
      );
      this.RevisedForm.DateTo = this.datepipe.transform(
        this.RevisedForm.DateTo,
        'dd/MMM/yyyy'
      );
      this.GratuityRulesForm.StatementDateofAppoint = this.datepipe.transform(
        this.GratuityRulesForm.StatementDateofAppoint,
        'dd/MMM/yyyy'
      );
      this.EPFOForm.EpfoDateofBirth = this.datepipe.transform(
        this.EPFOForm.EpfoDateofBirth,
        'dd/MMM/yyyy'
      );
      this.EPFOForm.DateofExitforPrevious = this.datepipe.transform(
        this.EPFOForm.DateofExitforPrevious,
        'dd/MMM/yyyy'
      );
      this.EPFOForm.PassportValidFrom = this.datepipe.transform(
        this.EPFOForm.PassportValidFrom,
        'dd/MMM/yyyy'
      );
      this.EPFOForm.PassportValidTo = this.datepipe.transform(
        this.EPFOForm.PassportValidTo,
        'dd/MMM/yyyy'
      );
      this.EPFOForm.joinedOn = this.datepipe.transform(
        this.EPFOForm.joinedOn,
        'dd/MMM/yyyy'
      );
      this.personalDataForm.employeeFirstName =
        this.personalDataForm.employeeFirstName;
      // }
      if (!AppUtil.isNullOrEmpty(this.referencesName1)) {
        this.personalDataForm.referencesName1 =
          this.referencesName1 + '. ' + this.personalDataForm.referencesName1;
      } else {
        this.personalDataForm.referencesName1 =
          this.personalDataForm.referencesName1;
      }
      if (!AppUtil.isNullOrEmpty(this.referencesName2)) {
        this.personalDataForm.referencesName2 =
          this.referencesName2 + '. ' + this.personalDataForm.referencesName2;
      } else {
        this.personalDataForm.referencesName2 =
          this.personalDataForm.referencesName2;
      }
      if (!AppUtil.isNullOrEmpty(this.personalDataForm.employeeFatherName)) {
        this.personalDataForm.employeeFatherName =
          this.personalDataForm.employeeFatherName;
      }
      {
        var data = {
          Main1: this.personalDataForm,
          Main2: this.fillingAndverifiedForm,
          Main3: this.form4DeclarationForm,
          Main4: this.DeclarationForm,
          Main5: this.NominationDeclarationForm,
          Main6: this.RevisedForm,
          Main7: this.GratuityRulesForm,
          Main8: this.EPFOForm,
          Main9: this.InsuranceCorporation,
          Detail1: this.secondEducationQualificationArray,
          Detail2: this.secondEmployeeHistoryArray,
          Detail3: this.form2LaguageKnownArray,
          Detail4: this.form2FamilyBackgroundArray,
          Detail5: this.document_submit,
          Detail6: this.consentForm,
          Detail7: this.form6FamilyTableForm,
          Detail8: this.EPFNominationFamilyArray,
          Detail9: this.ePSfamilyMemberArray,
          Detail10: this.ePSnomineeformArray,
          Detail11: this.gratuityNomineeArray,
          Detail12: this.KycdetailstableForm,
          // Flag:  flag
        };
      }
      data.Detail5.forEach((e) => {
        delete e.Particular;
      });
      data.Detail6.forEach((e) => {
        delete e.Question;
      });
      //this.downloadData(ApiGenerator.save_employeeform(data));
      //console.log(data);
      //if (AppUtil.isNullOrEmpty(this.personalDataForm.EMP_PRO_FILE_PICK) || AppUtil.isNullOrEmpty(this.personalDataForm.EMP_UPLOAD_SIGNATURE)
      // AppUtil.isNullOrEmpty(this.personalDataForm.employeeFirstName) ||
      // AppUtil.isNullOrEmpty(this.personalDataForm.employeeFatherName) ||
      // AppUtil.isNullOrEmpty(this.personalDataForm.employeePermanentAddress) && (this.personalDataForm.employeePhoneNumber == null) ||
      // (this.personalDataForm.employeeAdhar == null) ||
      // AppUtil.isNullOrEmpty(this.personalDataForm.employeePinCode.toString()) ||
      // AppUtil.isNullOrEmpty(this.personalDataForm.Employeegender) ||
      // AppUtil.isNullOrEmpty(this.personalDataForm.employeeemail) ||
      // AppUtil.isNullOrEmpty(this.personalDataForm.employeeDateofBirth) ||
      // AppUtil.isNullOrEmpty(this.personalDataForm.employeeNationality) ||
      // AppUtil.isNullOrEmpty(this.personalDataForm.employeeReligion) ||
      // AppUtil.isNullOrEmpty(this.personalDataForm.employeeMaritalStatus)
      //||
      // AppUtil.isNullOrEmpty(this.personalDataForm.emp_pro_file_pick)
      // ) {
      //   Swal.fire({
      //     // position: 'top-end',
      //     icon: 'error',
      //     title: "Please fill all mandatory fields",
      //     showConfirmButton: true
      //   });
      // }

       // else if ((data.Detail5[0].CV_UPLOAD == "")
      //   // || (data.Detail5[3].ID_UPLOAD == "")
      //   // || (data.Detail5[5].PHOTO_UPLOAD == "")
      //   // || (data.Detail5[6].DEGREE_UPLOAD == "")
      //   ) {
      //   Swal.fire({
      //     position: 'top-end',
      //     icon: 'error',
      //     title: "Please fill all mandatory documents",
      //     showConfirmButton: true
      //   });
      // }
      this.validateAndSaveForm(data);
      // THIS IS FOR ADDING PARTICULARS IN DOCUMENT_SUBMIT ARRAY
      console.log('this.document_submit before', this.document_submit);
      this.document_submit.forEach((obj) => {
        switch (obj.Particular_index) {
          case '1':
            obj.Particular = 'C.V';
            break;
          case '2':
            obj.Particular =
              'DUPLICATE COPY OF INTENT/OFFER LETTER DULY SIGNED BY PROSPECTIVE EMPLOYEE';
            break;
          case '3':
            obj.Particular =
              "GUARANTEE FORM:- Guarantor's service(Govt Emp.) Identity card. -Guarantor's address proof";
            break;
          case '4':
            obj.Particular = 'AADHAR CARD';
            break;
          case '5':
            obj.Particular = 'PAN CARD';
            break;
          case '6':
            obj.Particular = 'ONE PHOTOGRAPH';
            break;
          case '7':
            obj.Particular = '10th MARKSHEET/CERTIFICATE';
            break;
          case '8':
            obj.Particular = 'LAST QUALIFICATION CERTIFICATE';
            break;
          case '9':
            obj.Particular = 'BANK PROOF / PASSBOOK/CHEQUE';
            break;
          case '10':
            obj.Particular = 'MEDICAL FITNNESS CERTIFICATE';
            break;
          case '11':
            obj.Particular =
              'LAST THREE(3) MONTHS SALARY SLIP FROM PREVIOUS EMPLOYER(for experience employee only)';
            break;
          case '12':
            obj.Particular = 'PARENTS AADHAR CARD';
            break;
          default:
            obj.Particular = ''; // Default value if index doesn't match
            break;
        }
      });
      //this.updateParticular(this.document_submit);

      console.log('this.document_submit after', this.document_submit);
      // this.addPredefinedData(data.Detail5);
      this.spinner.hide();
      console.log(data);
    } catch (err) {
      this.submitDisable = false;
      throw err;
    }
  }


  validateAndSaveForm(data:any): void {
    try{
    if (AppUtil.isNullOrEmpty(this.personalDataForm.EMP_PRO_FILE_PICK)) {
      Swal.fire({
        icon: 'error',
        title: 'Please Upload Profile Picture!',
        showConfirmButton: true,
      });
      this.submitDisable = false;
      return;
    }

    if (AppUtil.isNullOrEmpty(this.personalDataForm.EMP_UPLOAD_SIGNATURE)) {
      Swal.fire({
        icon: 'error',
        title: 'Please Upload Signature!',
        showConfirmButton: true,
      });
      this.submitDisable = false;
      return;
    }

    if (AppUtil.isNullOrEmpty(this.personalDataForm.employeeFirstName)) {
      Swal.fire({
        icon: 'error',
        title: 'Please fill First Name!',
        showConfirmButton: true,
      });
      this.submitDisable = false;
      return;
    }

    if (AppUtil.isNullOrEmpty(this.personalDataForm.employeeFatherName)) {
      Swal.fire({
        icon: 'error',
        title: 'Please fill Father\'s Name!',
        showConfirmButton: true,
      });
      this.submitDisable = false;
      return;
    }

    if (AppUtil.isNullOrEmpty(this.personalDataForm.employeePermanentAddress)) {
      Swal.fire({
        icon: 'error',
        title: 'Please fill Permanent Address!',
        showConfirmButton: true,
      });
      this.submitDisable = false;
      return;
    }

    if (this.personalDataForm.employeePhoneNumber === null) {
      Swal.fire({
        icon: 'error',
        title: 'Please fill Phone Number!',
        showConfirmButton: true,
      });
      this.submitDisable = false;
      return;
    }

    if (this.personalDataForm.employeeAdhar === null) {
      Swal.fire({
        icon: 'error',
        title: 'Please fill Adhar Number!',
        showConfirmButton: true,
      });
      this.submitDisable = false;
      return;
    }

    if (AppUtil.isNullOrEmpty(this.personalDataForm.employeePinCode.toString())) {
      Swal.fire({
        icon: 'error',
        title: 'Please fill Pin Code!',
        showConfirmButton: true,
      });
      this.submitDisable = false;
      return;
    }

    if (AppUtil.isNullOrEmpty(this.personalDataForm.Employeegender)) {
      Swal.fire({
        icon: 'error',
        title: 'Please fill Gender!',
        showConfirmButton: true,
      });
      this.submitDisable = false;
      return;
    }

    if (AppUtil.isNullOrEmpty(this.personalDataForm.employeeemail)) {
      Swal.fire({
        icon: 'error',
        title: 'Please fill Email!',
        showConfirmButton: true,
      });
      this.submitDisable = false;
      return;
    }

    if (AppUtil.isNullOrEmpty(this.personalDataForm.employeeDateofBirth)) {
      Swal.fire({
        icon: 'error',
        title: 'Please fill Date of Birth!',
        showConfirmButton: true,
      });
      this.submitDisable = false;
      return;
    }

    if (AppUtil.isNullOrEmpty(this.personalDataForm.employeeNationality)) {
      Swal.fire({
        icon: 'error',
        title: 'Please fill Nationality!',
        showConfirmButton: true,
      });
      this.submitDisable = false;
      return;
    }

    if (AppUtil.isNullOrEmpty(this.personalDataForm.employeeReligion)) {
      Swal.fire({
        icon: 'error',
        title: 'Please fill Religion!',
        showConfirmButton: true,
      });
      this.submitDisable = false;
      return;
    }

    if (AppUtil.isNullOrEmpty(this.personalDataForm.employeeMaritalStatus)) {
      Swal.fire({
        icon: 'error',
        title: 'Please fill Marital Status!',
        showConfirmButton: true,
      });
      this.submitDisable = false;
      return;
    }

        if (AppUtil.isNullOrEmpty(this.fillingAndverifiedForm.Hrdepartmentname)) {
      Swal.fire({
        icon: 'error',
        title: 'Please fill Recuriter Name!',
        showConfirmButton: true,
      });
      this.submitDisable = false;
      return;
    }


    this.downloadData(ApiGenerator.save_employeeform(data));
  }catch(err){
    this.submitDisable = true;
    throw err;
  }
}


  places: PLACE[] = [
    { value: 'Own House' },
    { value: 'Rented House' },
    { value: 'With Parents' },
    { value: 'With Relative' },
  ];
  gender: GENDER[] = [
    { value: 'Male' },
    { value: 'Female' },
    { value: 'Transgender' },
  ];
  sum_salary() {
    var a: number = 0;
    var b: number = 0;
    var c: number = 0;
    var d: number = 0;
    var e: number = 0;
    var f: number = 0;
    a += +this.personalDataForm.SalaryOtherAllowance;
    b += +this.personalDataForm.SalaryCONV;
    c += +this.personalDataForm.SalaryCCA;
    d += +this.personalDataForm.SalaryHRA;
    e += +this.personalDataForm.SalaryDA;
    f += +this.personalDataForm.SalaryBasic;

    this.personalDataForm.SalaryGrandTotal = a + b + c + d + e + f;
  }
  copyaddress() {
    if (
      !AppUtil.isNullOrEmpty(this.personalDataForm.employeePermanentAddress)
    ) {
      this.personalDataForm.employeePresentAddress =
        this.personalDataForm.employeePermanentAddress;
      this.DeclarationForm.PresentAddress =
        this.personalDataForm.employeePermanentAddress;
      this.InsuranceCorporation.InsCor_Presentaddress =
        this.personalDataForm.employeePermanentAddress;
      this.NominationDeclarationForm.TemporaryAddress =
        this.personalDataForm.employeePermanentAddress;
    } else {
      return;
    }
  }

  // rkk
  ageFromInput: Date;
  CalculateAge() {
    this.DeclarationForm.DateofBirth =
      this.personalDataForm.employeeDateofBirth;
    this.InsuranceCorporation.InsCor_dob =
      this.personalDataForm.employeeDateofBirth;
    this.EPFOForm.EpfoDateofBirth = this.personalDataForm.employeeDateofBirth;
    this.NominationDeclarationForm.EmployeeDateofBirth =
      this.personalDataForm.employeeDateofBirth;
    this.ageFromInput = new Date(this.personalDataForm.employeeDateofBirth);

    var timeDiff = Math.abs(Date.now() - this.ageFromInput.getTime());
    //Used Math.floor instead of Math.ceil
    //so 26 years and 140 days would be considered as 26, not 27.
    this.DeclarationForm.Age = Math.floor(
      timeDiff / (1000 * 3600 * 24) / 365
    ).toString();
    let age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
    if (age < 18 || age > 58) {
      Swal.fire('Age must be between 18 and 58');
    }
    this.InsuranceCorporation.InsCor_Age = this.DeclarationForm.Age;
  }
  getprofilepick(imagename: string) {
    var data = {
      image: imagename,
    };
    if (!AppUtil.isNullOrEmpty(imagename)) {
      this.downloadData(ApiGenerator.ImagePath(data));
    } else {
    }
  }

  // handleInputChange(e) {
  //   var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
  //   var pattern = /image-*/;
  //   var reader = new FileReader();
  //   if (!file.type.match(pattern)) {
  //     alert('invalid format');
  //     return;
  //   }
  //   reader.onload = this._handleReaderLoaded.bind(this);
  //   reader.readAsDataURL(file);
  // }
  // _handleReaderLoaded(e) {
  //   let reader = e.target;
  //   this.imageSrc = reader.result;
  //   console.log(this.imageSrc)
  // }
  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();

    if (!file.type.match(pattern)) {
      alert('Invalid format');
      return;
    }
    if (file.size < 40000 || file.size > 1000000) {
      Swal.fire('Image size must be between 40kb and 120Kb');
      e.target.value = '';
      return;
    }

    reader.onload = (readerEvent) => {
      this.imageSrc = readerEvent.target.result;
      console.log(this.imageSrc);

      // Set the personalDataForm.profilepick property with the Base64 image data
      // testing
      this.personalDataForm.EMP_PRO_FILE_PICK = this.imageSrc;
    };

    reader.readAsDataURL(file);
  }

  handleUploadSignature(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();

    if (!file.type.match(pattern)) {
      alert('Invalid format');
      return;
    }
    if (file.size < 40000 || file.size > 1000000) {
      Swal.fire('Image size must be between 40kb and 120Kb');
      e.target.value = '';
      return;
    }

    reader.onload = (readerEvent) => {
      this.signature = readerEvent.target.result;
      console.log(this.signature);

      //  setting empoyee signature
      this.personalDataForm.EMP_UPLOAD_SIGNATURE = this.signature;
      // Display signature in the div
      //this.showSignature(this.signature);
    };

    reader.readAsDataURL(file);
  }

  //

  // handleInputChanges(e) {
  //   var files = e.dataTransfer ? e.dataTransfer.files : e.target.files;
  //   var pattern = /image-*/;

  //   for (let i = 0; i < files.length; i++) {
  //     const file = files[i];

  //     if (!file.type.match(pattern)) {
  //       alert('Invalid format for file ' + (i + 1));
  //       continue;
  //     }

  //     const reader = new FileReader();

  //     reader.onload = (readerEvent) => {
  //       const imageSrc = readerEvent.target.result.toString(); // Explicitly cast to a string
  //       console.log(imageSrc);

  //       // Assuming you have an 'index' variable indicating the index of the object to update
  //       const index = i; // Set the index based on your logic

  //       if (index >= 0 && index < this.document_submit.length) {
  //         // Set the 'Document_upload' property of the specific object in the array
  //         this.document_submit[index].Document_upload = imageSrc;
  //       } else {
  //         alert('Invalid index or object not found for file ' + (i + 1));
  //       }
  //     };

  //     reader.readAsDataURL(file);
  //   }
  // }

  handleInputChanges(e: any, i: any, params: any) {
    console.log(params);

    const file = e.target.files[0];
    const reader = new FileReader();

    let fileSizeKB = file.size / 1024; // Convert bytes to KB
    if (fileSizeKB < 2 || fileSizeKB > 5000) {
      Swal.fire('File size must be between 2KB and 5MB');
      return;
    }
    reader.readAsDataURL(file);

    switch (params) {
      case '1':
        reader.onload = () => {
          console.log(reader.result);
          this.document_submit[i].CV_UPLOAD = String(reader.result);
        };
        break;
      case '2':
        reader.onload = () => {
          console.log(reader.result);
          this.document_submit[i].INTENTLETTER_UPLOAD = String(reader.result);
        };
        break;
      case '3':
        reader.onload = () => {
          console.log(reader.result);
          this.document_submit[i].GURANTEE_UPLOAD = String(reader.result);
        };
        break;
      case '4':
        reader.onload = () => {
          console.log(reader.result);
          this.document_submit[i].ID_UPLOAD = String(reader.result);
        };
        break;
      case '5':
        reader.onload = () => {
          console.log(reader.result);
          this.document_submit[i].RESS_UPLOAD = String(reader.result);
        };
        break;
      case '6':
        reader.onload = () => {
          console.log(reader.result);
          this.document_submit[i].PHOTO_UPLOAD = String(reader.result);
        };
        break;
      case '7':
        reader.onload = () => {
          console.log(reader.result);
          this.document_submit[i].DEGREE_UPLOAD = String(reader.result);
        };
        break;
      case '8':
        reader.onload = () => {
          console.log(reader.result);
          this.document_submit[i].RELIEVING_LETTER_UPLOAD = String(
            reader.result
          );
        };
        break;
      case '9':
        reader.onload = () => {
          console.log(reader.result);
          this.document_submit[i].BANKSTATEMENT_UPLOAD = String(reader.result);
        };
        break;
      case '10':
        reader.onload = () => {
          console.log(reader.result);
          this.document_submit[i].MEDICALFITNESS_UPLOAD = String(reader.result);
        };
        break;
      case '11':
        reader.onload = () => {
          console.log(reader.result);
          this.document_submit[i].SALARY_SLIP_UPLOAD = String(reader.result);
        };
        break;
      case '12':
        reader.onload = () => {
          console.log(reader.result);
          this.document_submit[i].REFRE_UPLOAD = String(reader.result);
        };
        break;
      default:
        console.log('default');
    }
  }

  generateAndDownloadZip(base64Data: any) {
    try {
      // Create a new instance of JSZip
      let zip = new JSZip();

      // Iterate over each document data
      base64Data.forEach((document) => {
        // Check if the document is a PDF or an image
        if (
          document &&
          document.UPLOAD_URL &&
          document.UPLOAD_URL.trim() !== ''
        ) {
          if (document.UPLOAD_URL.startsWith('data:application/pdf')) {
            let byteCharacters = atob(document.UPLOAD_URL.split(',')[1]);
            let byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
              byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            let byteArray = new Uint8Array(byteNumbers);
            // Add PDF document to the zip file
            zip.file(`${document.SPECIFY_DOCUMENT}.pdf`, byteArray);
          } else if (document.UPLOAD_URL.startsWith('data:image')) {
            // Extract base64 data (remove prefix)
            let imageData = document.UPLOAD_URL.split(',')[1];
            // Add image to the zip file
            zip.file(`${document.SPECIFY_DOCUMENT}.jpg`, imageData, {
              base64: true,
            });
          }
        }
      });

      // Generate the zip file
      zip.generateAsync({ type: 'blob' }).then(function (content) {
        // Save the Blob as a file
        saveAs(content, 'documents.zip');
      });
    } catch (error) {
      console.error('Error generating zip file:', error);
    }
  }

  downloadDocuments() {
    try {
      this.downloadData(ApiGenerator.getPdfData(this.GetAutoNumber));
    } catch (err) {
      console.log(err);
    }
  }

  downloadPdf(base64Data: string, fileName: string) {
    const byteCharacters = atob(base64Data.split(',')[1]);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/pdf' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document body after the download
    document.body.removeChild(link);
  }

  onResponseReceived(taskCode: TaskCode, response: any): boolean {
    try {
      const success = super.onResponseReceived(taskCode, response);
      if (success) {
        switch (taskCode) {
          case TaskCode.save_employeeform:
            this.spinner.hide();
            this.submitDisable = false;
            var saveres = response as AutoBaseApiResponse;
            console.log(saveres);
            if (!saveres.message.error_status) {
              Swal.fire(
                'Congratulations! You have sucessfully Enrolled',
                `Your Application Number is: ${saveres.AutoNumber.toString()}`,
                'success'
              );
              this.resetwholeform();
            } else {
              Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: saveres.message.message,
                showConfirmButton: false,
                timer: 1500,
              });
            }
            break;
          case TaskCode.GET_PDF_DATA:
            this.generateAndDownloadZip(response);
            break;
          case TaskCode.update_employee_form:
            this.spinner.hide();
            var updateddata = response as AutoBaseApiResponse;
            console.log(updateddata);
            let dataUpdated = {
              EMP_AUTO_NO: updateddata.AutoNumber
            };
            let hasError = false;
            for (let i = 0; i < updateddata.length; i++) {
              if (updateddata[i].error) {
                hasError = true;
                break;
              }
            }

            if (!hasError) {
              console.log('this.saveCounter', this.saveCounter);
              Swal.fire('DATA UPDATED SUCCESSFULLY');
              this.downloadData(ApiGenerator.search_emphrd(dataUpdated));
              // this.resetwholeform();
            } else {
              Swal.fire('ERROR: Data update failed. Please try again.');
            }

            // if (!updateddata.message.error_status) {
            //   // if(updateddata){
            //   Swal.fire("DATA UPDATED SUCCESFULLY")
            // }
            // else {
            //   Swal.fire("DATA NO UPDATED")

            // }
            break;
          case TaskCode.search_emphrd:
            console.log('response', response);
             this.GetAutoNumber = response.data.MAIN1[0].AutoNumber;
            var dta = response as emp_datares;
            if (
              dta &&
              dta.data &&
              dta.data.Detail1 &&
              dta.data.Detail1.length
            ) {
              this.empAutoNumber = dta.data.Detail1[0].AutoNumber;
              console.log('empAutoNumber', this.empAutoNumber);
            }
            this.spinner.hide();
            this.hideupload = true;
            this.hidesubmitbtn = true;
            console.log(this.verifier_emp_code);
            if (
              this.verifier_emp_code == null ||
              this.verifier_emp_code == undefined
            ) {
              this.enablecheckemp = false;
            } else {
              this.enablecheckemp = true;
            }

            if (
              this.verifier_emp_code == 33813 ||
              this.verifier_emp_code == 35815 ||
              this.verifier_emp_code == 27707 ||
              this.verifier_emp_code == 14966 ||
              this.verifier_emp_code == 45651 ||
              this.verifier_emp_code == 19237 ||
              this.verifier_emp_code == 30197 ||
              this.verifier_emp_code == 27589 ||
              this.verifier_emp_code == 14650 ||
              this.verifier_emp_code == 18777 ||
              this.verifier_emp_code == 34163 ||
              this.verifier_emp_code == 33892 ||
              this.verifier_emp_code == 19237 ||
              this.verifier_emp_code == 30197 ||
              this.verifier_emp_code == 27589 ||
              this.verifier_emp_code == 14650 ||
              this.verifier_emp_code == 18777 ||
              this.verifier_emp_code == 34163 ||
              this.verifier_emp_code == 33892 ||
              this.verifier_emp_code == 28102 ||
              this.verifier_emp_code == 25759 ||
              this.verifier_emp_code == 36142 ||
              this.verifier_emp_code == 19237 ||
              this.verifier_emp_code == 30197 ||
              this.verifier_emp_code == 27589 ||
              this.verifier_emp_code == 14650 ||
              this.verifier_emp_code == 18777 ||
              this.verifier_emp_code == 34163 ||
              this.verifier_emp_code == 33892 ||
              this.verifier_emp_code == 33371 ||
              this.verifier_emp_code == 33893 ||
              this.verifier_emp_code == 31012 ||
              this.verifier_emp_code == 26598 ||
              this.verifier_emp_code == 27707 ||
              this.verifier_emp_code == 25291 ||
              this.verifier_emp_code == 32609 ||
              this.verifier_emp_code == 35882
            ) {
              this.enableform = true;
              this.editForUser = false;
              var empdata = {
                EMP_EMP_CODE: this.verifier_emp_code,
              };
              this.downloadData(ApiGenerator.gethrdname(empdata));
            } else {
              this.enableform = false;
              this.editForUser = true;
            }
            if (dta && dta.data && dta.data.MAIN1 && dta.data.MAIN1.length) {
              this.imageSrc = dta.data.MAIN1[0].EMP_PRO_FILE_PICK;
            }
              this.personalDataForm = dta.data.MAIN1[0];
            if (dta && dta.data && dta.data.MAIN1 && dta.data.MAIN1.length) {
              this.signature =
                dta.data.MAIN1[0].EMP_UPLOAD_SIGNATURE;
            }
            this.fillingAndverifiedForm = dta.data.MAIN2[0];
            this.form4DeclarationForm = dta.data.MAIN3[0];
            this.DeclarationForm = dta.data.MAIN4[0];
            this.NominationDeclarationForm = dta.data.MAIN5[0];
            this.RevisedForm = dta.data.MAIN6[0];
            this.GratuityRulesForm = dta.data.MAIN7[0];
            this.EPFOForm = dta.data.MAIN8[0];
            this.InsuranceCorporation = dta.data.MAIN9[0];
            if(dta.data && dta.data.Detail1)
            this.secondEducationQualificationArray = dta.data.Detail1;
            if(dta.data && dta.data.Detail2)
            this.secondEmployeeHistoryArray = dta.data.Detail2;
            console.log(this.secondEducationQualificationArray);
            if(dta.data && dta.data.Detail3)
            this.form2LaguageKnownArray = dta.data.Detail3;
            if(dta.data && dta.data.Detail4)
            this.form2FamilyBackgroundArray = dta.data.Detail4;
            this.document_submit = dta.data.Detail5;
            this.consentForm = dta.data.Detail6;
            this.form6FamilyTableForm = dta.data.Detail7;
            this.EPFNominationFamilyArray = dta.data.Detail8;
            this.ePSfamilyMemberArray = dta.data.Detail9;
            this.ePSnomineeformArray = dta.data.Detail10;
            this.gratuityNomineeArray = dta.data.Detail11;
            this.KycdetailstableForm = dta.data.Detail12;
            if (
              !AppUtil.isNullOrEmpty(this.personalDataForm.employeeDateofBirth)
            ) {
              this.personalDataForm.employeeDateofBirth = new Date(
                dta.data.MAIN1[0].employeeDateofBirth
              ).toISOString();
            } else {
            }
            if (this.personalDataForm.agreement == 'true') {
              this.joinessdoc_agreement = true;
            } else {
              this.joinessdoc_agreement = false;
            }
            if (
              !AppUtil.isNullOrEmpty(this.personalDataForm.employeeFirstName)
            ) {
              this.personalDataForm.employeeFirstName =
                this.personalDataForm.employeeFirstName;
            }
            if (!AppUtil.isNullOrEmpty(this.personalDataForm.referencesName1)) {
              this.referencesName1 =this.personalDataForm.referencesName1;
            }
            if (!AppUtil.isNullOrEmpty(this.personalDataForm.referencesName2)) {
              this.referencesName2 =this.personalDataForm.referencesName2;
            }
            if (
              this.secondEmployeeHistoryArray[0].Companydetails == null ||
              this.secondEmployeeHistoryArray[0].Companydetails == undefined
            ) {
              this.fresher_exp_fresher = true;
              this.fresher_exp = 'Fresher';
            } else {
              this.fresher_exp_experience = true;
              this.fresher_exp = 'Experience';
            }

            if (
              !AppUtil.isNullOrEmpty(
                this.personalDataForm.presentconnectbusiness
              )
            ) {
              if (
                !AppUtil.isNullOrEmpty(
                  this.personalDataForm.presentconnectbusinessdtl
                )
              ) {
                this.presentconnectbusiness_radio_yes = true;
              } else {
                this.presentconnectbusiness_radio_no = true;
              }
            } else {
            }

            if (
              !AppUtil.isNullOrEmpty(
                this.personalDataForm.relatedworkingOMgroup
              )
            ) {
              if (
                !AppUtil.isNullOrEmpty(
                  this.personalDataForm.relatedworkingOMgroupdtl
                )
              ) {
                this.relatedworkingOMgroup_radio_yes = true;
              } else {
                this.relatedworkingOMgroup_radio_no = true;
              }
            } else {
            }
            if (
              !AppUtil.isNullOrEmpty(
                this.personalDataForm.relationworkinGovtDep
              )
            ) {
              if (
                !AppUtil.isNullOrEmpty(
                  this.personalDataForm.relationworkinGovtDepDetails
                )
              ) {
                this.relationworkinGovtDep_radio_yes = true;
              } else {
                this.relationworkinGovtDep_radio_no = true;
              }
            } else {
            }
            if (
              !AppUtil.isNullOrEmpty(this.personalDataForm.providentFundAccount)
            ) {
              if (
                !AppUtil.isNullOrEmpty(
                  this.personalDataForm.providentFundAccountDetails
                )
              ) {
                this.providentFundAccount_radio_yes = true;
              } else {
                this.providentFundAccount_radio_no = true;
              }
            } else {
            }
            if (
              !AppUtil.isNullOrEmpty(this.personalDataForm.arrestedforOffence)
            ) {
              if (
                !AppUtil.isNullOrEmpty(
                  this.personalDataForm.arrestedforOffencedetails
                )
              ) {
                this.arrestedforOffence_radio_yes = true;
              } else {
                this.arrestedforOffence_radio_no = true;
              }
            } else {
            }
            if (dta.data.MAIN4[0].DateofAppointment) {
              this.DeclarationForm.DateofAppointment = new Date(
                dta.data.MAIN4[0].DateofAppointment
              ).toISOString();
            }
            this.DeclarationForm.DateofBirth = new Date(
              dta.data.MAIN4[0].DateofBirth
            ).toISOString();

            this.NominationDeclarationForm.EmployeeDateofBirth = new Date(
              dta.data.MAIN5[0].EmployeeDateofBirth
            ).toISOString();

            this.NominationDeclarationForm.EmployeeDateofBirth = new Date(
              dta.data.MAIN5[0].EmployeeDateofBirth
            ).toISOString();
            this.NominationDeclarationForm.EmployeeDateofBirth = new Date(
              dta.data.MAIN5[0].EmployeeDateofBirth
            ).toISOString();

            this.RevisedForm.leftServiceon = new Date(
              dta.data.MAIN6[0].leftServiceon
            ).toISOString();
            this.RevisedForm.DateFrom = new Date(
              dta.data.MAIN6[0].DateFrom
            ).toISOString();
            this.RevisedForm.DateTo = new Date(
              dta.data.MAIN6[0].DateTo
            ).toISOString();
            this.RevisedForm.EstablishFrom = new Date(
              dta.data.MAIN6[0].EstablishFrom
            ).toISOString();
            this.RevisedForm.familyPensionFundFrom = new Date(
              dta.data.MAIN6[0].familyPensionFundFrom
            ).toISOString();
            this.RevisedForm.familyPensionFundTo = new Date(
              dta.data.MAIN6[0].familyPensionFundTo
            ).toISOString();
            this.RevisedForm.DateofAppointment = new Date(
              dta.data.MAIN6[0].DateofAppointment
            ).toISOString();
            console.log(this.RevisedForm.DateofAppointment);

            if (dta.data.MAIN7[0].StatementDateofAppoint) {
              this.GratuityRulesForm.StatementDateofAppoint = new Date(
                dta.data.MAIN7[0].StatementDateofAppoint
              ).toISOString();
            }
            this.RevisedForm.EstablishTo = new Date(
              dta.data.MAIN6[0].EstablishTo
            ).toISOString();

            if (!AppUtil.isNullOrEmpty(this.EPFOForm.OtherthanIndia)) {
              this.CountryofOrigin_radio_otherindia = true;
            } else {
              this.CountryofOrigin_radio_india = true;
            }
            if (
              !AppUtil.isNullOrEmpty(this.EPFOForm.EpfoCategorySpciallyAbled)
            ) {
              this.EpfoSpeciallyAbled_radio_yes = true;
            } else {
              this.EpfoSpeciallyAbled_radio_no = true;
            }

            if (!AppUtil.isNullOrEmpty(this.EPFOForm.PassportNo)) {
              this.InternationalWorker_radio_yes = true;
            } else {
              this.InternationalWorker_radio_no = true;
            }

            if (!AppUtil.isNullOrEmpty(this.EPFOForm.UniversalAccountNo)) {
              this.UniversalAccountNo_radio_UAN = true;
            } else {
              this.UniversalAccountNo_radio_PF = true;
            }

            if (!AppUtil.isNullOrEmpty(this.EPFOForm.MemberofEPFS)) {
              if (this.EPFOForm.MemberofEPFS == 'Yes') {
                this.MemberofEPFS_radio_yes = true;
              } else {
                this.MemberofEPFS_radio_no = true;
              }
            } else {
            }
            if (!AppUtil.isNullOrEmpty(this.EPFOForm.MemberofEPS)) {
              if (this.EPFOForm.MemberofEPFS == 'Yes') {
                this.MemberofEPS_radio_yes = true;
              } else {
                this.MemberofEPS_radio_no = true;
              }
            } else {
            }
            if (dta.data.MAIN8[0].DateofExitforPrevious) {
              this.EPFOForm.DateofExitforPrevious = new Date(
                dta.data.MAIN8[0].DateofExitforPrevious
              ).toISOString();
            }
            this.EPFOForm.EpfoDateofBirth = new Date(
              dta.data.MAIN8[0].EpfoDateofBirth
            ).toISOString();
            this.EPFOForm.PassportValidFrom = new Date(
              dta.data.MAIN8[0].PassportValidFrom
            ).toISOString();
            this.EPFOForm.PassportValidTo = new Date(
              dta.data.MAIN8[0].PassportValidTo
            ).toISOString();
            this.EPFOForm.joinedOn = new Date(
              dta.data.MAIN8[0].joinedOn
            ).toISOString();
            this.InsuranceCorporation.InsCor_dob = new Date(
              dta.data.MAIN9[0].InsCor_dob
            ).toISOString();
            if (dta.data.MAIN9[0].InsCor_Dateofappoinment) {
              this.InsuranceCorporation.InsCor_Dateofappoinment = new Date(
                dta.data.MAIN9[0].InsCor_Dateofappoinment
              ).toISOString();
            }
            this.secondEducationQualificationArray.forEach((Element) => {
              Element.examinationPassed = Element.examinationPassed;
            });

            this.secondEmployeeHistoryArray.forEach((Element) => {
              if (Element.FromDate) {
                Element.FromDate = new Date(Element.FromDate).toISOString();
              }
              if (Element.ToDate) {
                Element.ToDate = new Date(Element.ToDate).toISOString();
              }
            });

            this.form2FamilyBackgroundArray.forEach((Element) => {
              if (Element.famdob) {
                Element.famdob = new Date(Element.famdob).toISOString();
              }
            });

            this.form6FamilyTableForm.forEach((Element) => {
              Element.familyMemberDateofBirth = new Date(
                Element.familyMemberDateofBirth
              ).toISOString();
            });

            this.ePSnomineeformArray.forEach((Element) => {
              if (Element.NomineeDateofbirth) {
                Element.NomineeDateofbirth = new Date(
                  Element.NomineeDateofbirth
                ).toISOString();
              }
            });
            this.ePSfamilyMemberArray.forEach((Element) => {
              Element.EPSfamilydateOfBirth = new Date(
                Element.EPSfamilydateOfBirth
              ).toISOString();
            });

            break;
          case TaskCode.gethrdname:
            var emp_name = response as Rootempres;
            console.log(emp_name);
            if (!emp_name.data.error) {
              this.fillingAndverifiedForm.Hrdepartmentname =
                emp_name.data.data[0].EMP_FIRST_NAME;
              this.fillingAndverifiedForm.hrverifier =
                emp_name.data.data[0].EMP_FIRST_NAME;
              this.form4DeclarationForm.declarationHRSign =
                emp_name.data.data[0].EMP_FIRST_NAME;
              this.DeclarationForm.SignatureofEmppployer =
                emp_name.data.data[0].EMP_FIRST_NAME;
              this.DeclarationForm.EmployerDetails =
                emp_name.data.data[0].EMP_FIRST_NAME;
              this.NominationDeclarationForm.signatureEmployer =
                emp_name.data.data[0].EMP_FIRST_NAME;
              this.GratuityRulesForm.CertiEmployerSign =
                emp_name.data.data[0].EMP_FIRST_NAME;
              this.EPFOForm.SignatureofEmployer =
                emp_name.data.data[0].EMP_FIRST_NAME;
            } else {
              return;
            }

            break;
          case TaskCode.ImagePath:
            var resimags = response as BaseApiResponse;

            console.log(resimags.image);

            this.url = resimags.image;

            break;
          case TaskCode.checkadharcard:
            var dataad = response.data.data;
            if (response.data.data[0].EMP_ADHAR) {
              this.submitDisable = true;
              Swal.fire('AADHAR NUMBER ALREADY EXISTS');
            } else {
              this.submitDisable = false;
              Swal.fire('You can update it ');
            }
            console.log(dataad);

            break;
            case TaskCode.checkPhone:
              const phoneData = response.data.data;
              if (phoneData && phoneData.length > 0 && phoneData[0].REC_CAND_PHONE) {
                this.submitDisable = false;
                Swal.fire('You Can Go Ahead');
              } else {
                this.submitDisable = true;
                Swal.fire('Fill Screening Form First');
              }
            
              console.log(dataad);
              break;
            
        }
      }
      return success;
    } catch (err) {
      console.log(err);
    }
  }
  onErrorReceived (taskCode: TaskCode,response: any) {
    if (response.error) {
    Swal.fire("Some Error Occured");
    console.log(response.error)
    }
    this.spinner.hide();
    }

  print() {
    let popupWinindow;
    let innerContents = document.getElementById('needtoprint').innerHTML;
    popupWinindow = window.open(
      '',
      '_blank',
      'width=1000px,height=1000px,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no'
    );
    popupWinindow.document.open();
    popupWinindow.document.write(
      `<html>
      <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
      <style>

@media print {
  h3 {
    color: black;
  }
  .headings{
    font-size:large;

  }

  .border-botton{
    border-bottom: 2px solid black;
    width: 80%;
   }

   .first-table{
    border: #D24545;
    color: red;
  }


  .app-table{
    border: #D24545;
    background: none;
  }

  .input-group p {
    width: 60%;
    margin: 0;
  }

  .border-botton {
    border-bottom: 2px solid black;
    padding-bottom: 2px;
  }


  .input-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px; /* Adjust as needed */
  }

  .backgroundcolors{
    font-size: large;
    padding: 6px;
    font-weight: bold;
    color:black;
    margin: 0;
    text-align: center;
    }
    #ed{
      border: 2px solid black;
      width: 28%;
    }


    .flex-container {
      display: flex;
      justify-content: space-between;
    }

    .flex-item {
      text-align: center;
    }

    .value-box {
      border: 2px solid black; /* Add border style for values */
      padding: 10px; /* Add padding for better spacing */
    }

    .horizontal-line {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
  }
  table{
    width:100% !important;
  }

  .horizontal-line hr {
      width: 60%; /* Adjust the width of the line as needed */
      border: none;
      border-top: 2px solid #000; /* Adjust the color and thickness of the line */
      margin-top: 5px; /* Optional: Add some space between text and the line */
  }

  .formone{
    display: flex;
    justify-content: space-between;
  }

  .formone div {
    margin-bottom: 10px;
  }

  .formone hr {
    border-top: 1px solid #000;
    margin: 5px 0;
  }
  .top-right {
    float: right ;
    font-weight: bolder;
    }
}
} </style>
      </head>
      <body style="font-size: 20px;" onload="window.print();window.close();">
      <div id="printContent">
      </div>` +
        innerContents +
        `</div></body></html>`
    );
    popupWinindow.document.close();
  }

  downloadDOCFiles(e) {
    e.preventDefault();
    var urldow =
      'https://ors.omlogistics.co.in/api/MakeZip/Joinkit?id=1&type=task&fileName=' +
      this.emp_auto_number.toString().split(',')[0];
    window.open(urldow, '_blank');

    //  window.open(DOWNLOAD_MEETING_ATTACH + data.Filename,"_blank")
  }

}
interface PLACE {
  value: string;
}
interface GENDER {
  value: string;
}
