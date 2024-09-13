
import { HttpRequest, HttpGenericRequest } from './HttpRequest';
import * as global from './globals';
import { classToPlain, plainToClass } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';
import { AutoBaseApiResponse, BaseApiResponse } from '../Model/BaseResponse';
import { LoginResp } from '../Model/LoginResp';
import { emp_datares, Rootempres } from '../Model/DataEmployee';

import { candidatesearchdetail } from "../Model/CandidateScreening";

export class ApiGenerator {
  static file(data: { image: string; }): HttpRequest {
    throw new Error('Method not implemented.');
  }
  http: any;

  static CNAPITEST(data): HttpRequest {

    const req = new HttpRequest(global.CN_TEST_SAVE_NODE);
    req.setPostMethod();
    req.params = classToPlain(data as Object);
    req.classTypeValue = AutoBaseApiResponse;
    req.taskCode = global.TaskCode.CN_TEST_SAVE_NODE;

    return req;
  }
  static Login(data): HttpRequest {
    const req = new HttpRequest(global.LOGIN);
    req.setPostMethod();
    req.params = classToPlain(data as Object);
    req.classTypeValue = LoginResp;
    req.taskCode = global.TaskCode.LOGIN;

    return req;
  }

  static updateStatus(data): HttpRequest {
    const req = new HttpRequest(global.UPDATE_CN);
    req.setPostMethod();
    req.params = classToPlain(data as Object);
    // req.classTypeValue = LoginResp;
    req.taskCode = global.TaskCode.UPDATE_CN;
    return req;
  }
  static save_employeeform(data): HttpRequest {
    const req = new HttpRequest(global.save_employeeform);
    req.setPostMethod();
    req.params = classToPlain(data as Object);
    req.classTypeValue = AutoBaseApiResponse;
    req.taskCode = global.TaskCode.save_employeeform;

    return req;
  }

  static SaveCandidateScreening(data): HttpRequest {
    const req = new HttpRequest(global.SAVE_CANDIDATE_SCREENING);
    req.setPostMethod();
    req.params = classToPlain(data as Object);
    req.classTypeValue = AutoBaseApiResponse;
    req.taskCode = global.TaskCode.SAVE_CANDIDATE_SCREENING;
    return req;
  }

  static SearchCandidateScreening(data): HttpRequest {
    const req = new HttpRequest(global.SEARCH_CANDIDATE_SCREENING);
    req.setPostMethod();
    req.params = classToPlain(data as Object);
    req.classTypeValue = candidatesearchdetail;
    req.taskCode = global.TaskCode.SEARCH_CANDIDATE_SCREENING;
    return req;
  }

  static UpdateCandidateScreening(data): HttpRequest {
    const req = new HttpRequest(global.UPDATE_CANDIDATE_SCREENING);
    req.setPostMethod();
    req.params = classToPlain(data as Object);
    req.classTypeValue = BaseApiResponse;
    req.taskCode = global.TaskCode.UPDATE_CANDIDATE_SCREENING;
    return req;
  }


  static checkadharcard(data): HttpRequest {
    const req = new HttpRequest(global.checkadharcard);
    req.setPostMethod();
    req.params = classToPlain(data as Object);
    req.classTypeValue = emp_datares;
    req.taskCode = global.TaskCode.checkadharcard;

    return req;
    }

    static checkPhoneNumber(data): HttpRequest {
      const req = new HttpRequest(global.checkPhone);
      req.setPostMethod();
      req.params = classToPlain(data as Object);
      req.classTypeValue = emp_datares;
      req.taskCode = global.TaskCode.checkPhone;
  
      return req;
      }
  static search_emphrd(data): HttpRequest {
    const req = new HttpRequest(global.search_emphrd);
    req.setPostMethod();
    req.params = classToPlain(data as Object);
    req.classTypeValue = emp_datares;
    req.taskCode = global.TaskCode.search_emphrd;

    return req;
  }

  file(data) {

    return this.http.get('http://omsanchar.omlogistics.co.in/oracle/profile_pick_image.php?imagename='+data.image);
  }
  static ImagePath (data): HttpRequest {

    const req = new HttpRequest('http://omsanchar.omlogistics.co.in/oracle/profile_pick_image.php?imagename='+data.image);
    req.setGetMethod
    req.params = classToPlain(data as Object);
    req.classTypeValue = BaseApiResponse;
    req.taskCode = global.TaskCode.ImagePath;

    return req;
  }
  static getprofile(data): HttpRequest {
    const req = new HttpRequest(global.getprofile);
    req.setPostMethod();
    req.params = classToPlain(data as Object);
    req.classTypeValue = emp_datares;
    req.taskCode = global.TaskCode.getprofile;

    return req;
  }

  static update_employee_form(data): HttpRequest {
    const req = new HttpRequest(global.update_employee_form);
    req.setPostMethod();
    req.params = classToPlain(data as Object);
    req.classTypeValue = emp_datares;
    req.taskCode = global.TaskCode.update_employee_form;

    return req;
  }

  static gethrdname(data): HttpRequest {
    const req = new HttpRequest(global.gethrdname);
    req.setPostMethod();
    req.params = classToPlain(data as Object);
    req.classTypeValue = Rootempres;
    req.taskCode = global.TaskCode.gethrdname;

    return req;
  }

  static getDocketData(): HttpRequest {
    const req = new HttpRequest(global.GET_ALL_DOCKET);
    req.setGetMethod();
    // req.params = classToPlain(data as Object);
    // req.classTypeValue = LoginResp;
    req.taskCode = global.TaskCode.GET_ALL_DOCKET;
    return req;
  }

  static getPdfData(data): HttpRequest {
    const req = new HttpRequest(global.GET_PDF_DATA + `?autoNumber=${data}`);
    req.setGetMethod();
    // req.params = classToPlain(data as Object);
    // req.classTypeValue = LoginResp;
    req.taskCode = global.TaskCode.GET_PDF_DATA;
    return req;
  }

  // static hitLoginApi(): HttpRequest{
  //   const req = new HttpRequest(global.LOGIN_USER);
  //   // req.setGetMethod();
  //   req.classTypeValue = LoginResponse;
  //   req.taskCode = global.TaskCode.LOGIN_USER;
  //   return req;
  // }

  // static getAllUserData(): HttpRequest {
  //   const req = new HttpRequest(global.GET_ALL_USERS_DATA);
  //   req.classTypeValue = UsersResponse;
  //   req.taskCode = global.TaskCode.GET_ALL_USERS_DATA;
  //   return req;
  // }

  // static savePackageDataWithPOQuantityEnable (methodId: number,data: any) {
  //   let req = new HttpRequest(URL.GET_METHOD_DATA + methodId);
  //   req.setPostMethod();
  //   req.params = classToPlain(data as Object)
  //   req.classTypeValue = MethodDataResponse;
  //   req.taskCode = TaskCode.SAVE_PO_ENABLE_STATUS;
  //   console.log(req.params);
  //   console.log(JSON.stringify(req.params))
  //   return req;
  // }

  // static loginUser (userName: string,password: string) {
  //   let req = new HttpRequest(URL.LOGIN);
  //   req.setPostMethod();
  //   req.headers.append('token','1234')
  //   req.params = { 'userName': userName,'password': password }
  //   req.classTypeValue = LoginResponse;
  //   req.taskCode = TaskCode.LOGIN;
  //   return req;
  // }

  // static deleteSubCriteria (packageId: number,subCriteriaId: number) {
  //   let req = new HttpRequest(URL.PATH_SUB_CRITERIA + packageId + '/' + subCriteriaId);
  //   req.setDeleteMethod();
  //   req.classTypeValue = MethodDataResponse;
  //   req.taskCode = TaskCode.DELETE_ITEM;
  //   return req;
  // }

  // static getDepartmentList (instId: number) {
  //   const http = new HttpRequest(URL.GET_DEPARTMENTS + instId);
  //   http.classTypeValue = DepartmentModel;
  //   http.taskCode = TaskCode.GET_DEPARTMENTS;
  //   http.isArrayResponse = true;
  //   return http;
  // }


  static getDashboardData() {
    const req = new HttpRequest(global.DASHBOARD_DATA, 'report');
    req.setPostMethod();
    req.params = classToPlain({
      "BranchCode": "1389"
    } as Object);
    req.taskCode = global.TaskCode.DASHBOARD_DATA;
    return req;
  }

  static getMIS(query) {
    const req = new HttpRequest(global.MIS, 'report');
    req.setPostMethod();
    req.params = classToPlain(query as Object);
    req.taskCode = global.TaskCode.MIS;
    return req;
  }
}


export class JsonParser {
  static parseJson<T>(response: any, type: ClassType<T>): T {
    const parsedResponse = plainToClass(type, response as object);
    return parsedResponse;
  }

  static parseJsonString(response: any, type: ClassType<any>): any {
    const parsedResponse = plainToClass(type, response as object);
    return parsedResponse;
  }

  static parseJsonArray(response: any, type: ClassType<any>): any {
    const parsedResponse = plainToClass(type, response);
    return parsedResponse;
  }

  static parseResponse(taskCode: global.TaskCode, response: any) {
    switch (taskCode) {
      // case global.TaskCode.GET_CITY:
      //   return JsonParser.parseJson<any>(response, CitiesResponse);
      // case TaskCode.GET_AREAS:
      //   return JsonParser.parseJson<any>(response, AreaResponse);
    }
    return response;
  }
}
