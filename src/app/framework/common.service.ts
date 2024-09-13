import { Injectable } from '@angular/core';
import { HttpRequest } from './HttpRequest';
import { RequestOptions, Headers, Http } from '@angular/http';

// import 'rxjs/Rx';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
// import { Logger } from '../utils/Logger';
// import { KEYS } from '../globals';

@Injectable()
export class CommonService {

    constructor(private http: Http) {
    }

    callHttpReq(req: HttpRequest) {
        const options = new RequestOptions({ headers: req.headers });
        if (req.method === 'GET') {
            return this.http.get(req.url, options).pipe(map((res) => res.json()));
            // return this.http.get(req.url, options).map(res => res.json());
        } else if (req.method === 'POST') {
            return this.http.post(req.url, req.params, options).pipe(map((res) => res.json()));
            // return this.http.post(req.url, req.params, options).map(res => res.json());
        }
        else if (req.method === 'PATCH') {
            return this.http.patch(req.url, req.params, options).pipe(map((res) => res.json()));
            // return this.http.patch(req.url, req.params, options).map(res => res.json());
        }else if (req.method === 'DELETE') {
            return this.http.delete(req.url, options).pipe(map((res) => res.json()));
            // return this.http.delete(req.url, options).map(res => res.json());
        }
    }

    getResponseAsFile() {
      (res => new Blob([res], { type: 'application/vnd.ms-excel' }));

  }

  throwError(error: any) {
      // if (error != "") {
      //     alert("Server Error\n" + error + "\nYou may see dummy data or nothing");
      // }
  }
  appendUrlSearchParams(options: RequestOptions, req: HttpRequest) {
      if (req.headers) {
          const params = new URLSearchParams()
          req.headers.keys().forEach(element => {
              const value = req.headers.get(element);
              params.append(element, value);
              console.log(element + ", " + value);
          });
          // options.params = params;
      }
  }

//   printRequest(req: HttpRequest) {
//       Logger.log(req.url);
//       Logger.log(req.params);
//       Logger.log(req.method);
//   }



  // uploadFile(req: HttpRequest){
  //     const options = new RequestOptions({ headers: req.headers });
  //     return this.http.post(req.url, req.params, options).map(res => res.json());
  // }

  // sendFileRequest(req: HttpRequest){
  //     var xhr = new XMLHttpRequest();
  //     xhr.withCredentials = true;

  //     xhr.addEventListener("readystatechange", function () {
  //     //   if (this.readyState === 4) {
  //     //     console.log(this.responseText);
  //     //   }
  //       console.log(this.responseText);
  //     });

  //     xhr.open('POST', req.url);
  //     xhr.setRequestHeader('content-type', undefined);

  //     // xhr.setRequestHeader('Accept', 'application/json');
  //     // xhr.setRequestHeader('Access-Control-Allow-Origin', '*');


  //     // xhr.setRequestHeader("postman-token", "364163bb-850c-119b-904d-8c4819352c1d");
  //     xhr.send(req.params)
  // }
}
