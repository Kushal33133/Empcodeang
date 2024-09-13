import { Component, OnInit } from '@angular/core';
import { LoginResp } from 'src/app/Model/LoginResp';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userDetails: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userDetails = (JSON.parse(localStorage.getItem('session')) as LoginResp).data.data[0].CUST_NAME;
  }

  logout(): void {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
