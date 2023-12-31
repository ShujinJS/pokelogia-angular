import { UserModel } from 'src/app/models/auth.model';
import { AbstractControl, ValidationErrors, ValidatorFn, } from '@angular/forms';
import { getFromStore } from './storage.helper';

export function usernameValidator( username: string ): ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {
        const value = control.value
        const users = getFromStore('users')
        const isTaken = users.find((user: UserModel) =>
        user.username === username
    )

    if(!value) {
        return null;
    }
    return isTaken ? {usernameTaken : true} : null;
    }
}

export function passwordValidator( password: string, passwordConfirm: string ): ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {
        const value = control.value
        const isValid = password === passwordConfirm

        if(!value) {
            return null;
        }

        return isValid ? null : {passwordValid: true};
    }
}