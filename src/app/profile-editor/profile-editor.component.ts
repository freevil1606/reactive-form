import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  profileForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([
      this.fb.control(''),
    ])
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  updateProfile() {
    this.profileForm.patchValue({
        firstName: "Nancy",
        address: {
          street: "123 Drew Street",
        }
      }
    )
  }

  submit(): void {
    console.warn(this.profileForm.value);
  }

  get aliases() {
    return this.profileForm.get("aliases") as FormArray
  }

  addAlias(): void {
    this.aliases.push(this.fb.control(''));
  }
}
