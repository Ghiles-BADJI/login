import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function matchingPasswordValidator(passwordKey: string, passwordConfirmationKey: string): ValidatorFn {
  return (control: AbstractControl) => {
    const group = (control as FormGroup);

    const passwordInput = group.controls[passwordKey],
      passwordConfirmationInput = group.controls[passwordConfirmationKey];

    const isDifferent = passwordInput.value !== passwordConfirmationInput.value;

    const error: ValidationErrors = { matchingPassword: true }

    return isDifferent ? error : null;
  }
}