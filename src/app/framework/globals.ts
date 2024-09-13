'use strict';

import { environment } from 'src/environments/environment';

export const WEB_BASE_URL: string = environment.BASE_URL + '/api';
export const OPERATION: string = WEB_BASE_URL + '/cncreation';
export const HRD: String = environment.BASE_URL + '/api/hrd';
export const checkadharcard: string = HRD + '/checkadharcard';
export const checkPhone: string = HRD + '/checkaphonenumber';

export const SAVE_CANDIDATE_SCREENING: string = HRD + "/save-ReceptionEntry";
export const SEARCH_CANDIDATE_SCREENING: string =
  HRD + "/Search-CandidateScreening";
export const UPDATE_CANDIDATE_SCREENING: string =
  HRD + "/update-ReciptionEntry";





export const CN_TEST_SAVE_NODE: string = OPERATION + '/Save-DominoCN';
export const LOGIN: string = OPERATION + '/Domino-Login';
export const UPDATE_CN: string = OPERATION + '/Update-DominoCN';
export const save_employeeform: string = HRD + '/Save-NewEmpHRD';
export const search_emphrd: string = HRD + '/Search-JoiningApp';
export const getprofile: string = HRD + '/pathRead';
export const GET_PDF_DATA: string = HRD + '/getPdfData';

export const update_employee_form: string = HRD + '/newemphrd_update';
export const gethrdname: string = HRD + '/searchempname';


export const GET_ALL_DOCKET: string = OPERATION + '/get-Dockets';
export const DASHBOARD_DATA: string = environment.REPORT_BASE_URL + '/api/challan/DominoDashboard';
export const MIS: string = environment.REPORT_BASE_URL + '/api/callprocedure/procedurecall';
export enum TaskCode {
  GET_ALL_USERS_DATA,
  LOGIN_USER,
  CN_TEST_SAVE_NODE,
  LOGIN,
  UPDATE_CN,
  save_employeeform,
  GET_ALL_DOCKET,
  DASHBOARD_DATA,
  MIS,
  search_emphrd,
  checkadharcard,
  checkPhone,
  getprofile,
  gethrdname,
  update_employee_form,
  ImagePath,
  GET_PDF_DATA,
  SAVE_CANDIDATE_SCREENING,
  SEARCH_CANDIDATE_SCREENING,
UPDATE_CANDIDATE_SCREENING


}
