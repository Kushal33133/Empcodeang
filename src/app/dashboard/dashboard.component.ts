import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginResp } from 'src/app/Model/LoginResp';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userDetails: string;

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.userDetails = (JSON.parse(localStorage.getItem('session')) as LoginResp).data.data[0].CUST_NAME;
  }
}
