import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BaseComponent } from 'src/app/framework/BaseCompo';
import { CommonService } from 'src/app/framework/common.service';
import { ApiGenerator } from 'src/app/framework/ApiGenerator';
import { TaskCode } from 'src/app/framework/globals';
import { LoginResp } from 'src/app/Model/LoginResp';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DynamicTableComponent } from '../shared/dynamic-table/dynamic-table.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent extends BaseComponent implements OnInit {

  userDetails: string;

  total = 0; hold = 0; intransit = 0; pod = 0; outdly = 0; dly = 0;
  date = new Date();
  progress = false;
  reportTitle = '';
  type: number;

  @ViewChild('dialog', {
    static: false
  }) dialog;


  form = new FormGroup({
    'startDt': new FormControl(null, Validators.required),
    'endDt': new FormControl(null, Validators.required)
  });

  constructor(public services: CommonService, private datePipe: DatePipe, public matDialog: MatDialog) {
    super(services);
  }


  ngOnInit(): void {
    this.getData();
    this.autoRefresh();
    this.userDetails = (JSON.parse(localStorage.getItem('session')) as LoginResp).data.data[0].CUST_NAME;
  }
  getData() {
    this.downloadData(ApiGenerator.getDashboardData());
  }

  openDialog() {
    // this.dialog.open(DynamicTableComponent, { data: { Table: [{ name: 'Anurag', Job: 'ABC' }], Edit: true } });
  }


  onResponseReceived(taskCode: TaskCode, response: any): boolean {
    const success = super.onResponseReceived(taskCode, response);
    if (success) {
      switch (taskCode) {
        case TaskCode.DASHBOARD_DATA:
          const res = response['data']['data'][0];
          this.total = res.TOTAL ? res.TOTAL : 0;
          this.hold = res.HOLD ? res.HOLD : 0;
          this.intransit = res.INTRANSIT ? res.INTRANSIT : 0;
          this.outdly = res.OUT_DLY ? res.OUT_DLY : 0;
          this.dly = res.DLY ? res.DLY : 0;
          this.pod = res.POD_REC ? res.POD_REC : 0;
          break;

        case TaskCode.MIS:
          this.progress = false;
          window.open('https://ors.omlogistics.co.in/api/callprocedure/filecheck/?page=DOMINO_MIS.CSV', '_blank');
          this.form.reset();
          break;
      }
    }
    return success;
  }

  autoRefresh() {
    setInterval(() => {
      super.downloadData(ApiGenerator.getDashboardData());
      this.date = new Date();
    }, 30000);
  }

  onMisClick(type: number) {
    this.type = type;
    if (this.type === 1) { this.reportTitle = 'Total Booking'; }
    if (this.type === 2) { this.reportTitle = 'In-Transit'; }
    if (this.type === 3) { this.reportTitle = 'Out For Delivered'; }
    if (this.type === 4) { this.reportTitle = 'Delivered'; }
    if (this.type === 5) { this.reportTitle = 'POD Recieved'; }
    if (this.type === 6) { this.reportTitle = 'All'; }
     this.dialog.nativeElement.showModal();
  }

  onConfirm() {
    const fromDate = this.datePipe.transform(this.form.value.startDt, 'dd-MMM-yyyy');
    const toDate = this.datePipe.transform(this.form.value.endDt, 'dd-MMM-yyyy');
    this.downloadMIS(fromDate, toDate);
  }

  onCancel() {
    this.dialog.nativeElement.close();
  }

  downloadMIS(from, to) {
    // this.dialog.nativeElement.close();
    // this.matDialog.open(DynamicTableComponent, { data: { Table: [{ name: 'Anurag', Job: 'ABC' }], Edit: true } });
    this.progress = true;
    if (this.type === 6) {
      this.downloadData(ApiGenerator.getMIS({
        "query1": `OLL.DOMINOS_REPORT_Xl('DOMINO_MIS','400001','${from}','${to}')`
      }));
    } else {
      this.downloadData(ApiGenerator.getMIS({
        "query1": `OLL.DOMINOS_REPORT_WITH_TYPE_XL('DOMINO_MIS','400001','${from}','${to}','${this.type}')`
      }));
    }
  }

}
