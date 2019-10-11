import { Directive } from '@angular/core';
import { Validators, Validator, AbstractControl, ValidationErrors, ValidatorFn, NG_VALIDATORS } from '@angular/forms';

function nonZeroFactory(): ValidatorFn {
  return (c: AbstractControl) => {
    debugger
    let isValid = c.value && !isNaN(c.value) && c.value > 0;

    if (!isValid) {
      return {'nonZero' : {value: c.value}};
    } else {
      return null;
    }
  }
}

@Directive({
  selector: '[appNonZero]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: NonZeroValidator, multi: true }
  ]
})
export class NonZeroValidator implements Validator {

  validator: ValidatorFn;

  constructor() {
    this.validator = nonZeroFactory();
  }

  validate(control: AbstractControl): ValidationErrors {
    return this.validator(control);
  }


}
