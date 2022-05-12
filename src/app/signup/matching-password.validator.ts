import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms";

export function matchingPasswordValidator(passwordKey: string, passwordConfirmationKey: string): ValidatorFn {
    return (control: AbstractControl) => {
      const group = (control as FormGroup);
      
      const passwordInput = group.controls[passwordKey],
          passwordConfirmationInput = group.controls[passwordConfirmationKey];
      
      const isDifferent = passwordInput.value === passwordConfirmationInput.value;
      
      return isDifferent ? { matchingPassword: true } : null;
    }
  }