import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../framework/BaseCompo';
import { CommonService } from '../framework/common.service';
import { ApiGenerator } from '../framework/ApiGenerator';
import { TaskCode } from '../framework/globals';
import { LoginResp } from '../Model/LoginResp';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {
  UserId = '';
  Pwd = '';
  mobileNumber :string = '';
  Otp:string='';
  showOtp:boolean=false;
  selectedLogin: string = 'domino';

  constructor(public services: CommonService, public router: Router,private http: HttpClient,) {
    super(services);
  }

  ngOnInit(): void {



  }

  generateOtp() {

    if(!this.mobileNumber){
      Swal.fire({
        icon:'warning',
        title:'Please Enter Mobile Number First!'
      })
      return;
    }
    try {
      this.showOtp= true;
      this.http.get(
        `https://omsanchar.omlogistics.co.in/oracle/generateOtp.php?no=${this.mobileNumber}&status=generate`, {})
        .subscribe((resp: any) => {
          if (resp.error=== 'false' && resp.message === 'Otp generated. pls check sms') {
          Swal.fire({
            icon:'success',
            title:'Otp generated,Please Check SMS'
          })
          }
          else {
            Swal.fire({
              icon:'error',
              title:'Something went wrong!'})
          }
        });

    } catch (err) {
      this.showOtp= false;
      throw err;
    }
  }
  Login() {
    const data = {
      // CustomerId:'345637',
      // Pwd:'qw23@mk3'
      CustomerId: this.UserId,
      Pwd: this.Pwd
    };
    if (this.selectedLogin === 'hrd') {
    this.http.get(
      `https://omsanchar.omlogistics.co.in/oracle/generateOtp.php?no=${this.mobileNumber}&status=validate&otp=${this.Otp}`, {})
      .subscribe((resp: any) => {
        console.log(resp);
        if(resp && resp.error === 'false' && resp.message === 'OTP matched'){
          localStorage.setItem('session', this.mobileNumber);
          this.router.navigateByUrl('/newemloyeform/joindash');
      }
        else{
          this.router.navigateByUrl('/login');
        }
      });
    }
    else{
    this.downloadData(ApiGenerator.Login(data));
    }
  }

  onLoginChange(value: string) {
    this.selectedLogin = value;
    //this.showOtp = (value === 'hrd');
  }


  onResponseReceived(taskCode: TaskCode, response: any) {
    const success = super.onResponseReceived(taskCode, response);
    if (success) {
      switch (taskCode) {
        case TaskCode.LOGIN:
          const LoginResp = response as LoginResp;
          if (!LoginResp.data.error) {
            delete LoginResp.data.data[0].PASSWORD;
            localStorage.setItem('session', JSON.stringify(LoginResp));
            if(this.UserId === '345637'){
              this.router.navigateByUrl('/dashboard');
            }
            else{
              this.router.navigateByUrl('/newemloyeform/empdocupload');
            }
          }
          else {
            Swal.fire('Authentication Failed', 'kindly Fill Valid Details', 'warning')
          }
      }
    }
    return success;
  }

}
