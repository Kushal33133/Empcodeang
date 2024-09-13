import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/framework/BaseCompo';
import { CommonService } from 'src/app/framework/common.service';
import { ApiGenerator } from 'src/app/framework/ApiGenerator';
import { TaskCode } from 'src/app/framework/globals';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-update-docket',
  templateUrl: './update-docket.component.html',
  styleUrls: ['./update-docket.component.scss']
})
export class UpdateDocketComponent extends BaseComponent implements OnInit {

  Alldata = [];

  dtOptions: DataTables.Settings = {};

  form = new FormGroup({
    cnno: new FormControl({
      value: null,
      disabled: false
    }, [Validators.required, Validators.min(1)]),
    invno: new FormControl({
      value: null,
      disabled: false
    }, Validators.required),
    qty: new FormControl(null, Validators.required),
    ebill: new FormControl(),
    status: new FormControl(null, Validators.required)
  });

  constructor(public services: CommonService, private currencyPipe: CurrencyPipe) {
    super(services);
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      processing: true
    };
    this.loadList();
  }

  loadList(): void {
    this.downloadData(ApiGenerator.getDocketData());
  }

  onResponseReceived(taskCode: TaskCode, response: any): boolean {
    const success = super.onResponseReceived(taskCode, response);
    if (success) {
      switch (taskCode) {
        case TaskCode.GET_ALL_DOCKET:
          console.log(response.Result);
          this.Alldata = response.Result;
          break;
        case TaskCode.UPDATE_CN:
          if (response.Result.error_status === false) {
            this.Alldata.forEach(Element => {
              if (Element.CNNO === response.Data.CN) {
                Object.assign(Element, { CN_CN_STATUS: Number(response.Data.Status) });
                Object.assign(Element, { 'EWAY_BILL_#': response.Data.ebill });
                Object.assign(Element, { QUANTITY: Number(response.Data.qty) });
              }
            });
            Swal.fire('Status updated successfully');
            this.form.reset();
          } else {
            Swal.fire(`Can't update status. Please contact to admin`);
          }
          break;
      }
    }
    return success;
  }

  onClickRow(data): void {
    this.form.setValue({
      cnno: data.CNNO,
      invno: data.INVNO,
      qty: data.QUANTITY,
      ebill: data['EWAY_BILL_#'],
      status: data.CN_CN_STATUS
    });
  }

  updateCN() {
    console.log(this.form.value);

    Swal.fire({
      title: 'Confirm',
      text: `Do you really want to ${this.form.value.cnno} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.downloadData(ApiGenerator.updateStatus({
          status: this.form.value.status,
          cnno: this.form.value.cnno,
          qty: this.form.value.qty,
          ebill: this.form.value.ebill
        }));
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    });
  }

  printCN(data) {
    if (data.CN_NET_VALUE >= 50000 && data['EWAY_BILL_#'] == null) {
      Swal.fire({
        title: 'Confirm',
        text: `Net value is ${this.currencyPipe.transform(data.CN_NET_VALUE, 'INR')} for the Docket: ${data.CNNO} but EWay-Bill is not updated. So, do you still want to print Docket ?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
          window.open('http://omsanchar.omlogistics.co.in/oracle/print/cnprint11.php?cn=' + data.CNNO, '_blank');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
        }
      });
    }
    else {
      window.open('http://omsanchar.omlogistics.co.in/oracle/print/cnprint11.php?cn=' + data.CNNO, '_blank');
    }
  }
}
