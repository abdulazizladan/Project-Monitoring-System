import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contractor',
  templateUrl: './add-contractor.component.html',
  styleUrls: ['./add-contractor.component.scss']
})
export class AddContractorComponent implements OnInit {

  AddContractorForm : any;

  constructor( private fb : FormBuilder ){ 

  }

  ngOnInit(): void {
    this.AddContractorForm = this.fb.group({
      name : ['', [
        Validators.required
      ]],
      contact_first_name : ['', [
        Validators.required
      ]],
      contact_last_name : ['', [
        Validators.required
      ]],
      contact_phone_number : ['', [
        Validators.required
      ]],
      contact_email : ['', [
        Validators.required
      ]],
      contact_password : ['', [
        Validators.required,
        Validators.min(8)
      ]],
      contact_password_confirm : ['', [
        Validators.required,
        Validators.min(8)
      ]]
    })
  }

  addContractor(){

  }

}
