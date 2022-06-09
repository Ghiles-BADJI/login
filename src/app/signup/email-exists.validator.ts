import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { debounceTime, distinctUntilChanged, first, map, Observable, of, switchMap } from "rxjs";
import { UserHttpService } from "../user-http/user-http.service";

export class EmailExistsValidator {
    static createValidator(userService: UserHttpService): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
          return of(control.value).pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap((value) => userService.checkIfEmailExists(value)),
            map((result: boolean) => result ? { emailExists: true } : null),
            first()
          )
        };
      }
}