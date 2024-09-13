import { Headers } from '@angular/http';
import { ClassType } from 'class-transformer/ClassTransformer';
import { BaseResponse } from './BaseResponseModel';
import { StorageUtil, KEYS } from './StorageUtil';

export class HttpRequest {

  url: string;
  params: any;
  method: string;
  taskCode: number;
  headers: Headers;
  classTypeValue: ClassType<any> = BaseResponse;
  isArrayResponse = false;

  constructor(url: string, type?: string) {
    this.url = url;
    this.method = 'GET';
    this.headers = new Headers();
    if (type) {
      this.addDefaultForReportHeaders();
    } else {
      this.addDefaultHeaders();
    }
  }
  addDefaultHeaders() {
    this.headers.append('Content-Type', 'application/json');
    //   let token = StorageUtil.getAuthToken();
    let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWJqZWN0IjoiOTkgMjY2NDcgMTMwNiA0MDAwMDEiLCJpYXQiOjE2NTE2NDE5NTZ9.a2XdBsVzJyTqcvID0Rs9MJNTr5LpaTjccr-wMwlm62c';
    //  console.log("Token Is: " + token);
    if (token) {
      this.headers.append('Authorization', 'Bearer ' + token);
    }
    this.headers.append('Access-Control-Allow-Origin', '*');

  }

  addDefaultForReportHeaders() {
    this.headers.append('Content-Type', 'application/json');
    //   let token = StorageUtil.getAuthToken();
    let token = 'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.bQTnz6AuMJvmXXQsVPrxeQNvzDkimo7VNXxHeSBfClLufmCVZRUuyTwJF311JHuh';
    //  console.log("Token Is: " + token);
    if (token) {
      this.headers.append('Authorization', 'Bearer ' + token);
    }
    this.headers.append('Access-Control-Allow-Origin', '*');

  }
  removeDefaultHeaders() {
    this.headers.delete('Content-Type');
    this.headers.delete('Authorization');
    this.headers.delete('roleType');
  }
  removeHeaders(key: string) {
    this.headers.delete(key);
  }
  addHeaders(key: string, value: string) {
    this.headers.append(key, value);
  }
  setPostMethod() {
    this.method = 'POST';
  }
  setGetMethod() {
    this.method = 'GET';
  }
  getCompleteUrl() {
    if (this.headers !== undefined && this.headers.values.length > 0) {
      var paramString = "";
      for (let key of this.headers.keys()) {
        let value = this.headers.get(key)
        paramString = paramString + key + "=" + value + "&"
      }
      this.url = this.url + paramString;
    }
  }

  setDeleteMethod() {
    this.method = 'DELETE';
  }
  setPatchMethod() {
    this.method = 'PATCH';
  }
  setPutMethod() {
    this.method = 'PUT';
  }
}

export class HttpGenericRequest<T> extends HttpRequest {
  classType: ClassType<T>;
  constructor(url: string) {
    super(url);
  }
}
