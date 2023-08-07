import { AbstractControl, ValidationErrors } from "@angular/forms";


export function PasswordPatternValidator(control :AbstractControl) : ValidationErrors {
    const valid = 
    /([A-Z]){2,}/.test(control.value) &&
    /([a-z]){2,}/.test(control.value) &&
    /([0-9]){2,}/.test(control.value) &&
    /([$!@!%]){2,}/.test(control.value);
    return valid ? null : { passwordPattern : true};
}