// form1
export class CandidateScreening {
  AutoNumber: string = "";
ASSIN_TO: string = "";

  companyCode: string = sessionStorage.getItem('companycode');
  branchCode: string = sessionStorage.getItem('branchid');
  candidatePurpose: string = "";
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
  candidateDateofBirth: string;
  candidateMartialStatus: string = "";
  candiResultStatus: string = "";
  candidatePrevExperience: string = "";
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
EnterBy: string = sessionStorage.getItem('EmpCode');
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
employeeCode1: string = "";
employeeCode2: string = "";

// Level: string = '';
}


// form1 Candidate Education table
export class CandidateEducation {
  AutoNumber: string = "";
  Qualification: string = "";
  Degree: string = "";
  Institute: string = "";
  PassingYear: string = "";
  Grade: string = "";
  btnType: number = 0;
}


// form 1 previous work experience table
export class Experience {
  AutoNumber: string = "";
  Organization: string = "";
  Designation: string = "";
  FromValue: string = "";
  ToValue: string = "";
  ReportingSenior: string = "";
  HRmanager: string = "";
  reasonforleaving: string = "";
  btnType: number = 0;
}


// form2
export class personalData {
  AutoNumber: string = "";
  companyCode: string =sessionStorage.getItem('companycode') ;
  branchCode: string=sessionStorage.getItem('branchid');
  employeeFirstName: string = "";
  employeeLastName: string = "";
  employeeFatherName: string = "";
  employeePermanentAddress: string = "";
  employeePresentAddress: string = "";
  employeePhoneNumber: number;
  employeeAdhar: number;
  Employeelivein: string = "";
  employeeDateofBirth: string = "";
  employeePlaceofBirth: string = "";
  employeeNationality: string = "";
  employeeReligion: string = "";
  employeeMaritalStatus: string = "";
  employeeDependents: string = "";
  technicalTyping: string = "";
  technicalStenography: string = "";
  technicalComputer: string = "";
  technicalOther: string = "";
  SalaryBasic: number;
  SalaryDA: number;
  SalaryHRA: number;
  SalaryCCA: number;
  SalaryCONV: number;
  SalaryOtherAllowance: number;
  SalaryGrandTotal: number;
  ExpectedGrossSalary: number;
  ExtraCurricularAct: string = "";
  presentconnectwithbusiness: string = "";
  presentconnectwithbusinessdetails: string = "";
  relatedtoyouworkinginOMgroup: string = ''
  relatedtoyouworkinginOMgroupdetails: string = ''
  relationworkinGovtDep: string = "";
  relationworkinGovtDepDetails: string = "";
  providentFundAccount: string = "";
  providentFundAccountDetails: string = "";
  arrestedforOffence: string = "";
  arrestedforOffencedetails: string = "";
  PhysicalHeight: string = "";
  PhysicalWeight: string = "";
  PhysicalDisability: string = "";
  PhysicalSeriousIllness: string = "";
  PhysicalAccident: string = "";
  referencesName1: string = "";
  referencesDetails1: string = "";
  referencesName2: string = "";
  referencesDetails2: string = "";
  declarationName: string = "";
  employeeSign: string = "";
  EnterBy: string = sessionStorage.getItem('EmpCode');
  EnterDate: string = "";
}

// form2 education table
export class form2Educationtable {
  examinationPassed: string = "";
  yearofPassing: string = "";
  BoardCollege: string = "";
  Subject: string = "";
  percentageofMarks: string = "";
  GradeObtained: string = "";
}

// form2 employment history
export class form2EmployeeHistory {
  FromDate: string = "";
  ToDate: string = "";
  Totalyear: string = "";
  Companydetails: string = "";
  Designation: string = "";
  Gross: string = "";
  Reasonofleave: string = "";
}

//form2 language know
export class form2LaguageKnown {
  language: string = "";
  understand: string = "";
  speak: string = "";
  read: string = "";
  write: string = "";
  otherRemarks: string = "";
}

//form2 Family background

export class form2FamilyBackground {
  FamilyName: string = "";
  FamilyRelation: string = "";
  FamilyQualification: string = "";
  FamilyAge: string = "";
  FamilyOccupation: string = "";
  FamilyMobileNo: string = "";
}

//form3
export class DocumentAttached {
  Particular: string = "";
  Submit: string = "";
  Recieved: string = "";
}

//form3 filling up and verifying

export class fillingAndverified {
  AutoNumber: string = "";
  employeeName: string = "";
  Hrdepartmentname: string = "";
  hrverifier: string = "";
}

//form4
export class CandidateconsentForm {
  Question: string = "";
  candidateRemarks: string = "";
  hrRemarks: string = "";
}

export class CandidateconsentForm2 {
  Question = 'Department Deputation - विभाग की प्रतिनियुक्ति Accounts/Cash, Audit, Operations, Credit Control, Marketing, Admin, Data Entry/MIS, KOM/Co-Ordination, Customer Care';
  candidateRemarks = "";
  hrRemarks = "";
}

//form4 decalartion

export class form4Declaration {
  candidateName: string = "";
  declarationCandidateSign: string = "";
  declarationHRSign: string = "";
}

//form6 Declaration Forms

export class Declaration {
  InsuranceNo: string = "";
  Sex: string = "";
  MaritalStatus: string = "";
  EmployeeCode: string = "";
  EmployeeName: string = "";
  DateofBirth: string = "";
  EmployeeFatherorHusband: string = "";
  DateofAppointment: string = "";
  PermanentAddress: string = "";
  PresentAddress: string = "";
  LocalOffice: string = "";
  Dispensary: string = "";
  Age: string = "";
  Department: string = "";
  NatureofWork: string = ''
  nomineeName: string = "";
  nomineeAge: string = "";
  nomineeYears: string = "";
  nomineeFatherHusbandName: string = "";
  nomineeAddress: string = "";
  nomineeRelation: string = "";
  place: string = "";
  employeeSignature: string = "";
  SignatureofEmppployer: string = "";
  EmployerDetails: string = "";
}

//form6 Family member table

export class form6FamilyTable {
  familyMemberName: string = "";
  familyMemberDateofBirth: string = "";
  familyMemberRelationship: string = "";
  familyMemberResidewith: string = "";
}

//form7

export class NominationDeclaration {
  EmployeeName: string = "";
  EmployeeFatherHusbandName: string = "";
  EmployeeDateofBirth: string = "";
  EmployeeSex: string = "";
  EmployeeMarital: string = "";
  AccountNo: string = "";
  PermanentAddress: string = "";
  TemporaryAddress: string = "";
  DateofMembershipEPF: string = "";
  Eps: string = "";
  subscriberSign: string = "";
  secondsubscriberSign: string = "";
  certPlace: string = "";
  signatureEmployer: string = "";
  FactoryDetails: string = "";
  designationSign: string = "";
}

//Form7 EPF TABLE

export class EPFNominationFamily {
  NomineeName: string = "";
  NomineeAddress: string = "";
  NomineeRelationship: string = "";
  NomineeAge: string = "";
  NomineeTotalShare: string = "";
  NomineeminorGuardName: string = "";
}

// form 7 partB EPS FAMILY TABLE
export class EPSfamilyMember {
  EPSfamilyName: string = "";
  EPSfamilyAddress: string = "";
  EPSfamilydateOfBirth: string = "";
  EPSfamilyrelationship: string = "";
}

// FORM 7 EPS NOMINEE FORM
export class EPSnomineeform {
  NomineeNameAddress: string = "";
  NomineeDateofbirth: string = "";
  Nomineerelationship: string = "";
}

// Form 8 Revised
export class Revised {
  RevisedName: string = "";
  RevisedFatherName: string = "";
  EstablishmentDetails: string = "";
  leftServiceon: string = "";
  wasEmployee: string = "";
  EstablishFrom: string = "";
  EstablishTo: string = "";
  provideFundName: string = "";
  familyPensionFundFrom: string = "";
  familyPensionFundTo: string = "";
  familypensionfundAccountno: string = "";
  RevisedEmployeeSign: string = "";
}

// Form 8 Revised partB
export class Revisedsecondpart {
  EmployeeName: string = "";
  EmployeeDesignation: string = "";
  FactoryName: string = "";
  DateofAppointment: string = "";
  DateFrom: string = "";
  DateTo: string = "";
  NoofDays: string = "";
  providingFund: string = "";
  secondAcountNo: string = ''
  ManagerSign: string = "";
}

// form 9
export class GratuityRules {
  EstablishmentDetails: string = "";
  particularName: string = "";
  noticeDated: string = "";
  StatementNameofEmployee: string = "";
  StatementSex: string = "";
  StatementReligion: string = "";
  StatementMaritalStatus: string = "";
  StatementDepartment: string = "";
  StatementTicketNo: string = "";
  StatementDateofAppointment: string = "";
  StatementVillage: string = "";
  StatementThana: string = "";
  StatementSubDivision: string = "";
  StatementPostOffice: string = "";
  StatementDistrict: string = "";
  StatementState: string = "";
  StatementPlace: string = "";
  StatementEmployeeSign: string = "";
  witnessesDetails1: string = "";
  witnessesDetails2: string = "";
  witnessesSign1: string = "";
  witnessesSign2: string = "";
  witnessesPlace: string = "";
  EmployerReferenceNo: string = "";
  CertificateEmployerSign: string = "";
  CertificateEstablishmentDetails: string = "";
}

//Form 9 Nomineee Table
export class GratuityNominee {
  NomineeeNameAddress: string = "";
  NomineeeRelationship: string = "";
  NomineeeAge: string = "";
  NomineeeGratuityShared: string = "";
}

//Form 10
export class EPFO {
  EpfoName: string = "";
  EpfoFatherHusbandName: string = "";
  EpfoRelationwithABove: string = "";
  EpfoDateofBirth: string = "";
  EpfoGender: string = "";
  EpfoMobile: string = "";
  EpfoEmail: string = "";
  MemberofEPFS: string = "";
  MemberofEPS: string = "";
  CheckUANorPF: string = "";
  UniversalAccountNo: number;
  PfRegionCode: string = "";
  PfOfficeCode: string = "";
  PfEstablishmentId: string = "";
  PfExtension: string = "";
  PfAccountNo: number;
  DateofExitforPrevious: string = "";
  SchemeCertificateNo: string = "";
  PPONo: string = "";
  InternationalWorker: string = "";
  CountryofOrigin: string = "";
  OtherthanIndia: string = "";
  PassportNo: number;
  PassportValidFrom: string = "";
  PassportValidTo: string = "";
  EpfoEducationalQualification: string = "";
  EpfoMaritalStatus: string = "";
  EpfoSpeciallyAbled: string = "";
  EpfoCategorySpciallyAbled: string = "";
  EpfoMemberSign: string = "";
  DeclarationmemberName: string = "";
  joinedOn: string = "";
  AllotedPFmember: string = "";
  UANallotedformember: string = "";
  KYCdetailsinUANdatabase: string = "";
  memberofEPFCoption: string = "";
  SignatureofEmployer: string = "";
}

//form 10 kyc details table

export class Kycdetailstable {
  KYCDocumenttype: string = "";
  NameasonDocument: string = "";
  KycNumber: string = "";
  KycRemarks: string = "";
}

//------------------search----------------
export class candidatesearchdetail {
error: boolean;
Main: CandidateScreening[];
Detail: CandidateEducation[];
Experience: Experience[];
}

// export class Experience{
//   Organization?: any;
//   Designation?: any;
//   FromValue?: any;
//   ToValue?: any;
//   ReportingSenior?: any;
//   HRmanager?: any;
//   reasonforleaving?: any;
// }

// export class Detail {
//   Qualification: string;
//   Degree: string;
//   Institute: string;
//   PassingYear: number;
//   Grade: string;
// }

// export class Main {
//   companyCode?: any;
//   branchCode: number;
//   candidatePurpose: string;
//   candidateMeet?: any;
//   candidatePositionApplied: string;
//   candidateLocation: string;
//   CandidateFirstName: string;
//   CandidateLastName?: any;
//   CandiateFatherName: string;
//   candiateAddress: string;
//   candiateCity: string;
//   candiateState: string;
//   candiatePhone: number;
//   candidateEmail: string;
//   candidateDateofBirth: string;
//   candidateMartialStatus: string;
//   candidatePrevExperience?: any;
//   currentCompensation: number;
//   paFixes: number;
//   Variable: number;
//   benefits: string;
//   Joiningtime: string;
//   expectedSalary: number;
//   referenceName1: string;
//   referenceDesignation1: string;
//   referenceCompany1: string;
//   referenceTelNo1: number;
//   referenceName2?: any;
//   referenceDesignation2?: any;
//   referenceCompany2?: any;
//   referenceTelNo2?: any;
//   candidateplace: string;
//   candidatesignature?: any;
//   candidateStatus?: any;
//   candidatefeedback?: any;
//   candidatePositiveRemarks: string;
//   candidateNegativeRemarks?: any;
//   EnterBy?: any;
//   EnterDate?: any;
// }
