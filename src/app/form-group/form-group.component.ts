import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  ourform = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  addClient(): void {
    console.log(this.ourform.value);
    /*const formValues = this.ourform.value;
    const c = new Client(formValues.firstName, formValues.lastName, formValues.email);
    /this.clientService.addClient(c);*/
    this.ourform.reset();
  }
}
