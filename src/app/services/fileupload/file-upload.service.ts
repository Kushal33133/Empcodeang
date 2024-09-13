import { Injectable } from '@angular/core';
import { Observable,Subject,BehaviorSubject } from 'rxjs';
import { HttpClient,HttpHeaders,HttpEvent } from '@angular/common/http';
import { environment } from '../../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private Http: HttpClient) { }
  EmpFileAttachment (data,url): Observable<HttpEvent<any>> {
  //  console.log(data);
console.log(environment.BASE_URL + '/api/hrd/UploadNewEmpDoc/' + url)
    return this.Http.post(environment.BASE_URL + '/api/hrd/UploadNewEmpDoc/' + url,data,{
      responseType: "blob",reportProgress: true,observe: "events",headers: new HttpHeaders(
        { Authorization: 'Bearer ' + sessionStorage.getItem('token') },
      )
    });

  }
  EmpFileAttachment_ProfilePick (data,url): Observable<HttpEvent<any>> {
   console.log(data);
    return this.Http.post(environment.BASE_URL + '/api/hrd/ProfilePick_doc/' + url,data,{
      responseType: "blob",reportProgress: true,observe: "events",headers: new HttpHeaders(
        { Authorization: 'Bearer ' + sessionStorage.getItem('token') },
      )
    });

  }
  
}
