import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { CommonService } from 'src/app/framework/common.service';
import { DatePipe } from '@angular/common';
import { ExcelServiceService } from 'src/app/framework/excel-service.service';
import Swal from 'sweetalert2';
import * as _ from 'lodash';
import * as XLSX from 'xlsx';
import * as moment from 'moment';
import { AppUtil } from 'src/app/framework/Utils/AppUtil';
import { ApiGenerator } from 'src/app/framework/ApiGenerator';
import { TaskCode } from 'src/app/framework/globals';
import { AutoBaseApiResponse } from 'src/app/Model/BaseResponse';
import { BaseComponent } from 'src/app/framework/BaseCompo';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent extends BaseComponent implements OnInit {

  excelArray: any = [];
  Response = [];
  i = 0;
  disable = true;
  progress = 0;
  DataSend = [];
  TotalQuantity = 0;
  TotalNetValue = 0;
  TotalGross = 0;
  TotalActValue = 0;
  TotalCharge = 0;
  AddedDescription = '';
  TempInvoiceNo: string;
  TempInvoicedate: string;
  UniqueManual = [];
  TempDescriptionArray = [];
  ExistingManualNo: any = [];
  ExistingInvoiceNo: any = [];
  OtherErrorExcel: any = [];
  FinalExcelArray: any = [];
  ProgressFlag = true;
  FileFlag = false;
  displayedColumns = ['CN_NUMBER'];

  dtOptions: DataTables.Settings = {};

  search: string;
  form = new FormGroup({
    input: new FormControl(null, Validators.required)
  });
  // -----------------Export Excel------------------
  TempExcelExport = [];
  // tslint:disable-next-line: max-line-length
  Format = ['DIL_NO', 'DIL_DATE', 'NO_OF_BOX', 'Cargovalue_SUM', 'Actualwt', 'Chargewt', 'Consigneename', 'Address1', 'Address2', 'Address3', 'City', 'Pin', 'State', 'Phone', 'Order_No'];
  constructor(public services: CommonService, public datePipe: DatePipe, public ExcelService: ExcelServiceService) {
    super(services);
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    };
  }

  async onFileChange(ev) {

    this.excelArray = [];
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, {
        type: 'binary', cellDates: true

      });
      // let date = moment.utc(stringValue).local();

      jsonData = workBook.SheetNames.reduce((initial, Consigneename) => {
        const sheet = workBook.Sheets[Consigneename];
        initial[Consigneename] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});


      // tslint:disable-next-line: prefer-const
      var keys = _.map(jsonData, (Element, Index) => {
        return Index;
      });
      var keysvalue = _.map(jsonData[keys[0]][0], (Element, Index) => {
        return Index;
      });

      if (_.isEqual(keysvalue, this.Format)) {
        jsonData[keys[0]].forEach(Element => {
          this.excelArray.push(Element);
        });
        this.FinalExcelArray = this.excelArray;
        this.disable = false;
      }
      else {
        Swal.fire('Incorrect Excel Format !!', 'error');
      }
    };
    reader.readAsBinaryString(file);
  }

  CheckSave() {
    try {
      this.FileFlag = true;
      this.disable = true;
      this.UniqueManual = [...new Set(this.excelArray.map((Excel) => Excel.DIL_NO))];
      //  console.log(this.UniqueManual);
      // var TotalQuantity = 0;
      this.UniqueManual.forEach(invoiceNumber => {
        this.TotalQuantity = 0;
        this.TotalNetValue = 0;
        this.TotalGross = 0;
        this.TotalActValue = 0;
        this.TotalCharge = 0;
        this.AddedDescription = '';

        this.excelArray.forEach(Element => {

          if (Element.DIL_NO === invoiceNumber) {
            var dt = new Date(Element.DIL_DATE);
            // dt.setSeconds(dt.getSeconds() + 9);

            this.TempInvoiceNo = Element.DIL_NO.toString();
            this.TempInvoicedate = moment.utc(dt.toString()).local().format('DD/MMM/YYYY');
            this.TotalQuantity = Element.NO_OF_BOX + this.TotalQuantity;
            this.TotalNetValue = Element.Cargovalue_SUM + this.TotalNetValue;
            this.TotalGross = Element.Cargovalue_SUM + this.TotalGross;
            this.TotalActValue = Element.Actualwt + this.TotalActValue;
            this.TotalCharge = Element.Chargewt + this.TotalCharge;
          }
        }

        );
        if (this.TotalCharge < 10) {
          var d = {
            PCKGS: this.TotalQuantity.toString(),
            PCK_TYPE: 'CRTN_BOX',
            QTY: this.TotalQuantity.toString(),
            NET_VAL: this.TotalNetValue.toFixed(2).toString(),
            GROSS_VAL: this.TotalGross.toFixed(2).toString(),
            ACT_WT: this.TotalActValue.toFixed(2).toString(),
            CH_WT: '10',
            // Desc: this.AddedDescription,
            INV_NO: invoiceNumber.toString(),
            INV_DT: this.TempInvoicedate

          }
        }
        else {
          var d = {
            PCKGS: this.TotalQuantity.toString(),
            PCK_TYPE: 'CRTN_BOX',
            QTY: this.TotalQuantity.toString(),
            NET_VAL: this.TotalNetValue.toFixed(2).toString(),
            GROSS_VAL: this.TotalGross.toFixed(2).toString(),
            ACT_WT: this.TotalActValue.toFixed(2).toString(),
            CH_WT: this.TotalCharge.toFixed(0).toString(),
            INV_NO: invoiceNumber.toString(),
            INV_DT: this.TempInvoicedate

          };
        }
        this.DataSend.push(d);
      });
      this.NewSaveData();
    }
    catch (e) {
      console.log(e);
      Swal.fire('Some Field is Missing in Your Excel', 'error');
    }
  }

  NewSaveData() {

    if (this.i === this.UniqueManual.length) {
      // console.log(this.TempExcelExport);
      this.ProgressFlag = true;
      this.FileFlag = false;
      this.DataSend = [];

      this.i = 0;
      //  this.excel.exportAsExcelFile(this.TempExcelExport,'DELIVERY_EXCEL_10_jun');
      // this.excel.exportAsExcelFile(this.TempExcelExport2,'DELIVERY_EXCEL_27_MAY2');
      if (this.ExistingInvoiceNo.length === 0 && this.ExistingManualNo.length === 0) {
        //  console.log(this.FinalExcelArray);
        // this.ExcelService.exportAsExcelFile(this.FinalExcelArray,'FINAL_INVOICE');
        Swal.fire('Total ' + this.UniqueManual.length + 'GR is Saved', 'success');
        this.form.reset();
      }
      else {
        this.ProgressFlag = true;
        this.FileFlag = false;
        this.DataSend = [];

        this.i = 0;
        this.ExcelService.exportAsExcelFile(this.FinalExcelArray, 'FINAL_INVOICE');
        // tslint:disable-next-line: max-line-length
        Swal.fire(this.ExistingManualNo.length + 'Total Repeated Manual No ' + this.ExistingManualNo.length + ' Total Repeated Invoice No ' + this.ExistingInvoiceNo.length, 'success');
        this.ExistingInvoiceNo = [];
      }
    }
    else {
      this.excelArray.find(Element => {

        if (Element.DIL_NO === this.UniqueManual[this.i]) {
          var data = {
            cee_name: AppUtil.isChangeData(Element.Consigneename).toString(),
            cee_address1: AppUtil.isChangeData(Element.Address1).toString(),
            cee_address2: AppUtil.isChangeData(Element.Address2).toString(),
            cee_landmark: AppUtil.isChangeData(Element.Address3).toString(),
            cee_city: AppUtil.isChangeData(Element.City).toString(),
            // cee_district: AppUtil.isChangeData(Element.DISTICT).toString(),
            cee_state: AppUtil.isChangeData(Element.State).toString(),
            cee_pincode: AppUtil.isChangeData(Element.Pin).toString(),
            cee_mobile: AppUtil.isChangeData(Element.Phone).toString(),
            orderid: AppUtil.isChangeData(Element.Order_No).toString(),
            empcode: sessionStorage.getItem('EmpCode'),
            invoices: [this.DataSend[this.i]]
          };
          this.downloadData(ApiGenerator.CNAPITEST(data));
          return true;

        }
      });

    }
  }

  PrepareFinalExcel(Invoice: any, CNNumber: string) {
    this.FinalExcelArray.forEach(Element => {
      if (Element.DIL_NO == Invoice.INV_NO) {
        Object.assign(Element, { CN_NUMBER: CNNumber });
        Object.assign(Element, { CN_PRINT_LINK: 'http://omsanchar.omlogistics.co.in/oracle/print/cnprint11.php?cn=' + CNNumber });
      }
    });
  }

  onResponseReceived(taskCode: TaskCode, response: any) {
    const success = super.onResponseReceived(taskCode, response);
    if (success) {
      switch (taskCode) {
        case TaskCode.CN_TEST_SAVE_NODE:
          const CNTESTRESPO = response as AutoBaseApiResponse;
          if (!CNTESTRESPO.message.error_status) {

            this.PrepareFinalExcel(this.DataSend[this.i], CNTESTRESPO.AutoNumber.toString());
            this.i += 1;

            // tslint:disable-next-line: radix
            this.progress = parseInt(((this.i / this.UniqueManual.length) * 100).toFixed(0));
            this.ProgressFlag = false;

            this.NewSaveData();

          }
          else {
            //  Swal.fire(CNTESTRESPO.message.message,'error');
            if (CNTESTRESPO.message.message.includes('Invoice Number is Already Exist')) {

              this.ExistingInvoiceNo.push(this.DataSend[this.i]);
              // console.log(this.ExistingInvoiceNo);
            }
            if (CNTESTRESPO.message.message.includes('Manual Number is Already Exist')) {
              this.ExistingManualNo.push(this.UniqueManual[this.i]);
            }
            // this.FileFlag = false;

            this.i += 1;
            //  console.log(this.i);
            this.Response.push(CNTESTRESPO.AutoNumber);
            // tslint:disable-next-line: radix
            this.progress = parseInt(((this.i / this.UniqueManual.length) * 100).toFixed(0));
            this.ProgressFlag = false;
            this.NewSaveData();

          }
          break;
        case TaskCode.UPDATE_CN:
          if (response.Result.error_status === false) {
            this.FinalExcelArray.forEach(Element => {
              if (Element.CN_NUMBER === response.Data.CN) {
                Object.assign(Element, { CN_STATUS: Number(response.Data.Status) });
              }
            });
            Swal.fire('Status updated successfully');
          } else {
            Swal.fire(`Can't update status. Please contact to admin`);
          }
          break;
      }
    }
    return success;
  }

  onChange(cnStatus, data): void {
    Swal.fire({
      title: 'Confirm',
      text: `Do you really want to ${cnStatus === 1 ? 'Allow' : 'Hold'} ${data.CN_NUMBER} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.downloadData(ApiGenerator.updateStatus({
          status: cnStatus,
          cnno: data.CN_NUMBER,
          qty: data.NO_OF_BOX,
          ebill: ''
        }));
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    });
  }

  exportArray(): void {
    this.ExcelService.exportAsExcelFile(this.FinalExcelArray.slice(), 'FINAL_INVOICE');
  }
}

