

// form2
export class personalData {
    AutoNumber: number ;//16
    EMPLOY_DATA_CODE : number = 0;//6
    EMP_COMP_CD: number = 0;
    EMP_BRANCH_CD: number = 0;
    employeeFirstName: string = '';//30
    //EMP_AUTO_DATE : string='';
    // employeeMiddleName: string = '';
    employeePinCode:number=0;
    employeeLastName: string = '';//30
    employeeFatherName: string = '';//50
    employeePermanentAddress: string = '';//100
    employeePresentAddress: string = '';//100
    employeePhoneNumber: number = 0;//10
    employeeAdhar: number = 0;//15
    employeeemail: string = '';//50    ////new changes savi 1102
    Employeelivein: string = '';//15
    Employeegender: string = '';//15   ////new changes savi 1102
    employeeDateofBirth: string = '';//date
    employeePlaceofBirth: string = '';//20
    employeeNationality: string = '';//20
    employeeReligion: string = '';//20
    employeeMaritalStatus: string = '';//20
    employeeDependents: string = '';//20
    technicalTyping: string = '';//20
    technicalStenography: string = '';//20
    technicalComputer: string = '';//20
    technicalOther: string = '';//20
    SalaryBasic: number = 0;//7
    SalaryDA: number = 0;//7
    SalaryHRA: number = 0;//7
    SalaryCCA: number = 0;//7
    SalaryCONV: number = 0;//7
    SalaryOtherAllowance: number = 0;//7
    SalaryGrandTotal: number = 0;//7
    ExpectedGrossSalary: number = 0;//7
    ExtraCurricularAct: string = '';//30
    presentconnectbusiness: string = '';//10
    presentconnectbusinessdtl: string = '';//30
    relatedworkingOMgroup: string = ''//10
    relatedworkingOMgroupdtl: string = ''//30
    relationworkinGovtDep: string = '';//10
    relationworkinGovtDepDetails: string = '';//30
    providentFundAccount: string = '';//10
    providentFundAccountDetails: string = '';//30
    arrestedforOffence: string = '';//10
    arrestedforOffencedetails: string = '';//30
    PhysicalHeight: string = '';//5
    PhysicalWeight: string = '';//5
    PhysicalDisability: string = '';//20
    PhysicalSeriousIllness: string = '';///20
    PhysicalAccident: string = '';//20
    referencesName1: string = '';//20
    referencesDetails1: string = '';//20
    referencesName2: string = '';//20
    referencesDetails2: string = '';//20
    declarationName: string = '';//20
    employeeSign: string = '';//20
    agreement: string = "false";
     EMPLOYEE_PARENTS_NUMBER:number = 0;
    EMP_PRO_FILE_PICK : string ='';
    EMP_UPLOAD_SIGNATURE:string = '';
    // emp_pro_file_pick:any;




    // profilepick: any;
    // employeeparentsnumber:string =''//10
    // emp_profile_pick: string = '100'
    // emp_pro_file_pick:any ;
    // EMPLOYEE_PARENTS_NUMBER:string = '';
    // EMPLOYEEPARENTSNUMBER:string = '';
    // EnterBy: string = '9999';
    // EnterDate: string = '';
}

// form2 education table
export class form2Educationtable {
    AutoNumber: number = null;//16
    examinationPassed: string = '';//20
    yearofPassing: number = null;//4
    BoardCollege: string = '';//30
    Subject: string = '';//30
    percentageofMarks: string = '';//4
    GradeObtained: string = '';//4
}

// form2 employment history
export class form2EmployeeHistory {
    AutoNumber: number = null;//16
    FromDate: string = '';//date
    ToDate: string = '';//date
    Totalyear: number = null;//2
    Companydetails: string = '';//20
    Designation: string = '';//20
    Gross: number = null;//10
    Reasonofleave: string = '';//30
}

//form2 language know
export class form2LaguageKnown {
    AutoNumber: number = null;//16
    language: string = '';//20
    understand: string = '';//10
    speak: string = '';//10
    read: string = '';//10
    write: string = '';//10
    otherRemarks: string = '';//20
}

//form2 Family background

export class form2FamilyBackground {
    AutoNumber: number = null;//16
    FamilyName: string = '';//100
    FamilyRelation: string = '';//50
    FamilyQualification: string = '';//50
    FamilyAge: number = null;//3
    FamilyOccupation: string = '';//50
    FamilyMobileNo: number = null;//12
    famaddress: string = '';//100
    famdob: string = '';
    nomniyesorno:string='';
    famresidewith:string='';
    // nom_percentage:string='';
    // percentage:string='';
}

//form3
export class DocumentAttached {
    AutoNumber: number = null;//16
    Particular_index: string = "";//5
    Particular: string = '';
    Specify_document: string="";
    Submit: string = '';//10
    Recieved: string = '';//100
    Document_upload: string = "";
}

//form3 filling up and verifying

export class fillingAndverified {
    AutoNumber: number = null;//16
    employeeName: string = '';//50
    Hrdepartmentname: string = '';//50
    hrverifier: string = '';//50
}

//form4
export class CandidateconsentForm {
    AutoNumber: number = null;//20
    Question_index: string = '';//5
    Question: string = '';
    candidateRemarks: string = '';//20
    hrRemarks: string = '';//20
}

export class CandidateconsentForm2 {
    AutoNumber: number = null;
    Question_index: string = '13';
    Question = 'Department Deputation - विभाग की प्रतिनियुक्ति Accounts/Cash, Audit, Operations, Credit Control, Marketing, Admin, Data Entry/MIS, KOM/Co-Ordination, Customer Care';
    candidateRemarks = '';
    hrRemarks = '';
}

//form4 decalartion

export class form4Declaration {
    AutoNumber: number = null;//16
    candidateName: string = '';//30
    declarationCandidateSign: string = '';//30
    declarationHRSign: string = '';//30
}
export class InsuranceCorporation {
    AutoNumber: number = null;//16
    InsCor_Insuranceno: string = '';//30
    InsCor_sex: string = '';//30
    InsCor_martialstatus: string = '';//30
    InsCor_exployeecode: string = '';//30
    InsCor_Name: string = '';//30
    InsCor_Age: string = '';//30
    InsCor_dob: string = '';//30
    InsCor_Fath_hus_name: string = '';//30
    InsCor_Dateofappoinment: string = '';//30
    InsCor_Presentaddress: string = '';//30
    InsCor_Localoffice: string = '';//30
    InsCor_Dispensary: string = '';//30
    InsCor_signinsuredpersn: string = '';//30
}

//form6 Declaration Forms

export class Declaration {
    AutoNumber: number = null;//16
    InsuranceNo: string = '';//10
    Sex: string = '';//10
    MaritalStatus: string = '';//10
    EmployeeCode: string = '';//10
    EmployeeName: string = '';//50
    DateofBirth: string = '';//date
    EmployeeFatherorHusband: string = '';//50
    DateofAppointment: string = '';//date
    PermanentAddress: string = '';//100
    PresentAddress: string = '';//100
    LocalOffice: string = '';//20
    Dispensary: string = '';//20
    Age: string = '';//3
    Departments: string = '';//20
    NatureofWork: string = ''//20
    nomineeName: string = '';//100
    nomineeAge: string = '';//3
    nomineeYears: string = '';//4
    nomineeFatherHusbandName: string = '';//100
    nomineeAddress: string = '';//100
    nomineeRelation: string = '';//40
    place: string = '';//25
    employeeSignature: string = '';//20
    SignatureofEmppployer: string = '';//20
    EmployerDetails: string = '';//100
}

//form6 Family member table

export class form6FamilyTable {
    AutoNumber: number = null;//16
    familyMemberName: string = '';//100
    familyMemberDateofBirth: string = '';//date
    familyMemberRelationship: string = '';//20
    familyMemberResidewith: string = '';//20

}

//form7

export class NominationDeclaration {
    AutoNumber: number = null;//16
    EmployeeName: string = '';//100
    EmployeeFatherHusbandName: string = '';//100
    EmployeeDateofBirth: string = '';//date
    EmployeeSex: string = '';//10
    EmployeeMarital: string = '';//10
    AccountNo: string = '';//20
    PermanentAddress: string = '';//100
    TemporaryAddress: string = '';//100
    DateofMembershipEPF: string = '';//10
    Eps: string = '';//10
    subscriberSign: string = '';//10
    secondsubscriberSign: string = '';//10
    certPlace: string = '';//20
    signatureEmployer: string = '';//10
    FactoryDetails: string = '';//30
    designationSign: string = '';//30
}

//Form7 EPF TABLE

export class EPFNominationFamily {
    AutoNumber: number = null;//16
    NomineeName: string = '';//100
    NomineeAddress: string = '';//100
    NomineeRelationship: string = '';//50
    NomineeAge: string = '';//3
    NomineeTotalShare: string = '100%';//4
    NomineeminorGuardName: string = '';//100
}

// form 7 partB EPS FAMILY TABLE
export class EPSfamilyMember {
    AutoNumber: number = null;//16
    EPSfamilyName: string = '';//100
    EPSfamilyAddress: string = '';//100
    EPSfamilydateOfBirth: string = '';//date
    EPSfamilyrelationship: string = '';//20
}

// FORM 7 EPS NOMINEE FORM
export class EPSnomineeform {
    AutoNumber: number = null;//16
    NomineeNameAddress: string = '';//100
    NomineeDateofbirth: string = '';//date
    Nomineerelationship: string = '';//20
}

// Form 8 Revised

export class Revised {
    AutoNumber: number = null;//16
    RevisedName: string = '';//100
    RevisedFatherName: string = '';//100
    EstablishmentDetails: string = '';//100
    leftServiceon: string = '';//date
    wasEmployee: string = '';//30
    EstablishFrom: string = '';//date
    EstablishTo: string = '';//date
    provideFundName: string = '';//30
    familyPensionFundFrom: string = '';//date
    familyPensionFundTo: string = '';//date
    familypensionfundAccountno: string = '';//20
    RevisedEmployeeSign: string = '';//20
    EmployeeName: string = '';//20
    EmployeeDesignation: string = '';//20
    FactoryName: string = '';//40
    DateofAppointment: string = '';//date
    DateFrom: string = '';//date
    DateTo: string = '';//date
    NoofDays: string = '';//3
    providingFund: string = '';//10
    secondAcountNo: string = ''//16
    ManagerSign: string = '';//20
}

// Form 8 Revised partB
// export class Revisedsecondpart {
//     AutoNumber: number = null;//16
//     EmployeeName: string = '';//20
//     EmployeeDesignation: string = '';//20
//     FactoryName: string = '';//40
//     DateofAppointment: string = '';//date
//     DateFrom: string = '';//date
//     DateTo: string = '';//date
//     NoofDays: string = '';//3
//     providingFund: string = '';//10
//     secondAcountNo: string = ''//16
//     ManagerSign: string = '';//20
// }

// form 9
export class GratuityRules {
    AutoNumber: number = null;//16
    EstablishmentDetails: string = '';//100
    particularName: string = '';//50
    noticeDated: string = '';//30
    StatementNameofEmployee: string = '';//100
    StatementSex: string = '';//10
    StatementReligion: string = '';//20
    StatementMaritalStatus: string = '';//20
    StatementDepartment: string = '';//30
    StatementTicketNo: string = '';//30
    StatementDateofAppoint: string = '';//date
    StatementVillage: string = '';//25
    StatementThana: string = '';//25
    StatementSubDivision: string = '';//25
    StatementPostOffice: string = '';//25
    StatementDistrict: string = '';//25
    StatementState: string = '';//25
    StatementPlace: string = '';//25
    StatementEmployeeSign: string = '';//25
    witnessesDetails1: string = '';//100
    witnessesDetails2: string = '';//100
    witnessesSign1: string = '';//50
    witnessesSign2: string = '';//50
    witnessesPlace: string = '';//50
    EmployerReferenceNo: string = '';//50
    CertiEmployerSign: string = '';//50
    CertiEstDtl: string = '';//50
}

//Form 9 Nomineee Table
export class GratuityNominee {
    AutoNumber: number = null;//16
    NomineeeNameAddress: string = '';//100
    NomineeeRelationship: string = '';//30
    NomineeeAge: string = '';//3
    NomineeeGratuityShared: string = '100%';//5
}

//Form 10
export class EPFO {
    AutoNumber: number = null;//16
    EpfoName: string = '';//100
    EpfoFatherHusbandName: string = '';//100
    EpfoRelationwithABove: string = '';//30
    EpfoDateofBirth: string = '';//date
    EpfoGender: string = '';//15
    EpfoMobile: string = '';//10
    EpfoEmail: string = '';//30
    MemberofEPFS: string = '';//5
    MemberofEPS: string = '';//5
    CheckUANorPF: string = '';//5
    UniversalAccountNo: string = '';;//15
    PfRegionCode: string = '';//5
    PfOfficeCode: string = '';//7
    PfEstablishmentId: string = '';//10
    PfExtension: string = '';//10
    PfAccountNo: string = '';;//20
    DateofExitforPrevious: string = '';//date
    SchemeCertificateNo: string = '';//15
    PPONo: string = '';//12
    InternationalWorker: string = '';//5
    CountryofOrigin: string = '';//5
    OtherthanIndia: string = '';//20
    PassportNo: string = '';//8
    PassportValidFrom: string = '';//date
    PassportValidTo: string = '';//date
    EpfoEducationalQualification: string = '';//20
    EpfoMaritalStatus: string = '';//20
    EpfoSpeciallyAbled: string = '';//5
    EpfoCategorySpciallyAbled: string = '';//30
    EpfoMemberSign: string = '';//50
    DeclarationmemberName: string = "";//100
    joinedOn: string = '';//date
    AllotedPFmember: string = '';//16
    UANallotedformember: string = "";//16
    KYCdetailsinUANdatabase: string = '';//16
    memberofEPFCoption: string = "";//20
    SignatureofEmployer: string = '';//50
}

//form 10 kyc details table

export class Kycdetailstable {
    AutoNumber: number = null;//20
    KYCDocumenttype: string = '';//30
    NameasonDocument: string = '';//30
    KycNumber: string = '';//20
    KycRemarks: string = '';//50
}
export class emp_datares {
    data: emp_data;
  }

  export class emp_data {
    error: boolean;
    MAIN1: personalData[];
    MAIN2: fillingAndverified[];
    MAIN3: form4Declaration[];
    MAIN4: Declaration[];
    MAIN5: NominationDeclaration[];
    MAIN6: Revised;
    MAIN7: GratuityRules[];
    MAIN8: EPFO[];
    MAIN9: InsuranceCorporation[];
    Detail1: form2Educationtable[];
    Detail2: form2EmployeeHistory[];
    Detail3: form2LaguageKnown[];
    Detail4: form2FamilyBackground[];
    Detail5: document_submit[];
    Detail6: CandidateconsentForm[];
    Detail7: form6FamilyTable[];
    Detail8: EPFNominationFamily[];
    Detail9: EPSfamilyMember[];
    Detail10: EPSnomineeform[];
    Detail11: GratuityNominee[];
    Detail12: Kycdetailstable[];
  }
  export class document_submit
{
    AutoNumber: number;
    Particular_index: string;
    Particular: string;
    Specify_document: string;
    Submit: string;
    Recieved: string ;
    Document_upload: string;
    CV_UPLOAD:any;
    INTENTLETTER_UPLOAD: any;
    GURANTEE_UPLOAD:any;
    ID_UPLOAD:any ;
    RESS_UPLOAD:any;
    PHOTO_UPLOAD:any;
    DEGREE_UPLOAD:any;
    RELIEVING_LETTER_UPLOAD:any;
    BANKSTATEMENT_UPLOAD:any;
    MEDICALFITNESS_UPLOAD:any;
    SALARY_SLIP_UPLOAD:any;
    REFRE_UPLOAD:any;
    // RELIEVING_LETTER_UPLOAD:any;
    // BANKSTATEMENT_UPLOAD:any;
    //
}


export class Rootempdata {
    EMP_FIRST_NAME: string;
    EMP_EMP_CODE: number;
}

export class Rootempmain {
    error: boolean;
    data: Rootempdata[];
}

export class Rootempres {
    data: Rootempmain;
}




