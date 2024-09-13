import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  mobileNumber :string = '';
  Otp:string='';



  constructor(public router: Router,private http: HttpClient) { }


  loginAuthSer(){
     this.http.get(
      `https://omsanchar.omlogistics.co.in/oracle/generateOtp.php?no=${this.mobileNumber}&status=validate&otp=${this.Otp}`, {})
      .subscribe((resp: any) => {
        console.log(resp);
        if(resp && resp.error === 'false' && resp.message === 'OTP matched')
          {
          localStorage.setItem('session', this.mobileNumber);
          this.router.navigateByUrl('/newemloyeform/joindash');
        }
        else{
          this.router.navigateByUrl('/login');
        }
      });
  }
}
