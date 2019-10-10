import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less']
})
export class AccountComponent implements OnInit {

  clientId: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() { console.log("OK") ;}
  

}
