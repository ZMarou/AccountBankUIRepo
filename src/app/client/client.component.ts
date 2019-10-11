import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from '../shared/client.service';
import { Client } from '../models/client';

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

  clientForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: ['', Validators.email]});


  constructor(private fb: FormBuilder, private clientService: ClientService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.clientForm.value);
    var client = new Client();
    client.firstName = this.clientForm.value.firstName;
    client.lastName = this.clientForm.value.lastName;
    client.email = this.clientForm.value.email;
    this.clientService.addClient(client).subscribe();
  }

}
