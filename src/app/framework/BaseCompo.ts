import { JsonParser,ApiGenerator } from './ApiGenerator';

import { CommonService } from './common.service';

import { BaseResponse } from './BaseResponseModel';
import { HttpRequest,HttpGenericRequest } from './HttpRequest';
import { DownloadManager } from './DownloadManager';
import { StorageUtil } from './StorageUtil';
// import Swal from 'sweetalert2'
import { AppUtil } from './Utils/AppUtil';
import { TaskCode } from './globals';
// declare var $: any;
// declare var jquery: any;
export class BaseComponent {
  ACCEPT_TYPES: string = "application/msword, application/vnd.ms-excel, .docx, .xlsx, application/pdf";
  CURRENCY = ["USD", "INR", "EURO", "AED"]
  constructor(protected commonService: CommonService) {
  }



  downloadData (req: HttpRequest) {
    const manager = new DownloadManager(this,this.commonService);
    manager.downloadData(req);
  }

  onPreExecute (taskCode: TaskCode) {
    // Swal.showLoading()
    // showLoader()
  }

  mouseEnter () {
    //alert('aaaa');
    //$('[data-toggle="tooltip"]').tooltip();
    // $('[data-toggle="popover"]').popover();
  }

  onApiError (taskCode: TaskCode,error: any,req: HttpRequest) {
    // Swal.close();
    if (error) {
      if (error._body) {
        // console.log(JSON.stringify(error._body).toString())
        // return
        const response = JsonParser.parseJsonString(JSON.parse(error._body),req.classTypeValue);
        if (response.code == '401') {
          this.logoutUser(taskCode,response)
        } else {
          this.onErrorReceived(taskCode,response);
        }

      } else {
        this.onServerError(taskCode,error,req);
      }
    } else {
      this.onServerError(taskCode,error,req);
    }
  }

  logoutUser (taskCode: TaskCode,response: any) {
    StorageUtil.clearAllData();
    // AppComponent.router.navigate(['../login']);
    if (response && response.message) {
      alert(response.message)
    }
  }

  onServerError (taskCode: TaskCode,error: any,req: HttpRequest) {
    alert("Oops some unknown error occurred");
  }

  onErrorReceived (taskCode: TaskCode,response: any) {
    // stopLoader()
  }

  logOut () { }

  showErrorAlert (taskCode: TaskCode,message: string) {
    if (AppUtil.isNotNull(message)) {
      alert(message);
    }
  }

  onResponseReceived (taskCode: TaskCode,response: any) {
    // Swal.close();
   // console.log(response);

    if (response instanceof BaseResponse) {
      if (response.error) {
        return !response.error;
      }
    }
    // switch (taskCode) {
    //   case TaskCode.REFRESH_METHOD_DATA:
    //     this.onMethodDataRefreshed(response)
    //     break;
    // }
    return true;
    // stopLoader()
  }

  showSuccessMessage (taskCode: TaskCode) {
    let msg = this.getToastMsg(taskCode);
    if (!AppUtil.isNullOrEmpty(msg)) {
      this.showToast(msg)
    }
  }

  getToastMsg (taskCode: TaskCode) {
    return "Saved Successfully"
  }

  showDeleteToast () {
    this.showToast("Deleted Successfully")
  }

  showToast (msg: string) {
    // Swal({
    //   text: msg,
    //   type: 'success',
    //   showConfirmButton: false,
    //   timer: 1500
    // })
  }

  sortObjectList(a, b) {
    var ax = [], bx = [];

    a.replace(/(\d+)|(\D+)/g, function (_, $1, $2) { ax.push([$1 || Infinity, $2 || ""]) });
    b.replace(/(\d+)|(\D+)/g, function (_, $1, $2) { bx.push([$1 || Infinity, $2 || ""]) });

    while (ax.length && bx.length) {
      var an = ax.shift();
      var bn = bx.shift();
      var nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
      if (nn) return nn;
    }

    return ax.length - bx.length;
 }
}
