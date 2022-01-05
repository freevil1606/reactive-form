import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function emailValidator(): ValidatorFn  {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value.includes("@") ? null : {emailValidator: {value: control.value}};
  }
}
