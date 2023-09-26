import { AuthPageService } from './authPage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn, } from '@angular/forms';
import { getFromStore } from 'src/app/helper/storage.helper';
import { FormModel, InputModel, UserModel } from 'src/app/models/auth.model';

@Component({
    selector: 'app-authPage',
    templateUrl: './authPage.component.html',
    styleUrls: ['./authPage.component.scss'],
})

export class AuthPageComponent implements OnInit {

    constructor ( 
        private formBuilder: FormBuilder,
        private authPageService: AuthPageService,
        ) {

    }

    classPrefix = 'app-formInputs'
    useForm: FormGroup = new FormGroup({})
    showLogin = false 
    isLogin: boolean = this.showLogin

    formInputs = [
        { title: "Username", type: "text", isRequired: true, formControlName: "username", message: "Min. length: 4"},
        { title: "Password", type: "password", isRequired: true, formControlName: "password", message: "Min. length: 4"},
        this.isLogin ? 
            { title: "Remember me?", type: "checkbox", isRequired: false, formControlName: "checkbox", message: ""}
        : 
            { title: "Confirm password", type: "password", isRequired: true, formControlName: "passwordConfirm", message: "Passwords must be matched"}
    ]

    ngOnInit(): void {
        const formToUse = this.createForm()
        this.useForm = this.formBuilder.group(formToUse)
    }

    onSubmit(): void {
        if(this.useForm.valid) {
            const user: UserModel = this.useForm.value;

            if(this.isLogin) {
                // this.authPageService.getUser()
            } else {
                this.authPageService.addUser(user)
            }
        }
    }

    createForm(): FormModel {
        let formToUse: FormModel = {
            username: ['', [Validators.minLength(4),Validators.required, this.usernameValidator()]],
            password: ['', [Validators.minLength(4),Validators.required]],
        }

        if(this.isLogin) {
            formToUse = {
                ...formToUse,
                checkbox: ['', []], 
            }
        } else {
            formToUse = {
                ...formToUse,
                passwordConfirm: ['', [Validators.minLength(4), Validators.required, this.passwordValidator()]],
                id: [(Math.random() * Math.floor(Math.random() * Date.now())).toString(), []],
            }
        }
        return formToUse;
    }

    passwordValidator(): ValidatorFn {
        return (control: AbstractControl) : ValidationErrors | null => {
            const value = control.value
            const password = this.useForm.get('password')?.value
            const passwordConfirm = this.useForm.get('passwordConfirm')?.value
            const isValid = password === passwordConfirm

            if(!value) {
                return null;
            }

            return !isValid ? {passwordMissmatch: true} : null;
        }
    }

    usernameValidator(): ValidatorFn {
        return (control: AbstractControl) : ValidationErrors | null => {
            const value = control.value
            const users = getFromStore('users')
            const username = this.useForm.get('username')?.value
            const usernameInput = this.formInputs.find((input: InputModel) => input?.title === 'Username')
            const isTaken = users.find((user: UserModel) =>
                user.username === username
            )

            if(!value) {
                return null;
            }

            if(usernameInput?.message !== undefined) {
                if(isTaken) {
                    usernameInput.message = 'Username is taken';
                } else {
                    usernameInput.message = 'Min. length: 4';
                }
            } 

            return isTaken ? {usernameTaken : true} : null;
        }
    }
}