import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Client } from '../models/client';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers/index'
import { AddClientAction } from '../actions/client.actions';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.less']
})
export class ClientComponent implements OnInit {

  /*clientForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });*/
  clientForm: FormGroup;
  client$: Observable<Client>

  constructor(private fb: FormBuilder, public store: Store<fromRoot.State>) { 
    this.client$ = store.select(fromRoot.getClientState)
  }

  ngOnInit() {
    this.clientForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: ['', Validators.email]});
  }

  onSubmit() {
    var client = new Client();
    client.firstName = this.clientForm.value.firstName;
    client.lastName = this.clientForm.value.lastName;
    client.email = this.clientForm.value.email;
    this.store.dispatch(new AddClientAction(client))
  }

}
