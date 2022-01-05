import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {emailValidator} from "../custom-validators/email-validator.directive";

@Component({
  selector: 'app-validate-form',
  templateUrl: './validate-form.component.html',
  styleUrls: ['./validate-form.component.css']
})
export class ValidateFormComponent implements OnInit {

  personalForm: FormGroup = this.fb.group({
    firstName: this.fb.control('', Validators.required),
    email: this.fb.control(
      '',
      [Validators.required, emailValidator()]
    ),
    phone: this.fb.control(''),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
}
