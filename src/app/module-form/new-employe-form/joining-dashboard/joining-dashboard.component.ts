import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiGenerator } from 'src/app/framework/ApiGenerator';
import { BaseComponent } from 'src/app/framework/BaseCompo';
import { CommonService } from 'src/app/framework/common.service';
import { TaskCode } from 'src/app/framework/globals';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-joining-dashboard',
  templateUrl: './joining-dashboard.component.html',
  styleUrls: ['./joining-dashboard.component.scss']
})
export class JoiningDashboardComponent  extends BaseComponent implements OnInit {
  CanPhoneNo = localStorage.getItem('session');
  hidemodal:boolean;


  constructor(private router: Router, public services: CommonService,) { 

    super(services);
  }

  ngOnInit(): void {
 this.checkPhone()
    
  }
  
  checkPhone() {
    let data = {
      REC_CAND_PHONE: this.CanPhoneNo
    };
    this.downloadData(ApiGenerator.checkPhoneNumber(data));
  }

  navigateTo(path: string): void {
    this.router.navigateByUrl(path);
  }

  onResponseReceived(taskCode: TaskCode, response: any) {
    const success = super.onResponseReceived(taskCode, response);
    if (success) {
      switch (taskCode) {
        case TaskCode.checkPhone:
              const phoneData = response.data.data;
              if (phoneData && phoneData.length > 0 && phoneData[0].REC_CAND_PHONE) {
                // Swal.fire('You Can Go Ahead');
                this.hidemodal = true
              } else {
                // Swal.fire('Fill Screening Form First');
                this.hidemodal = false
              }
          
      }
    }
    return success;
  }  
}
