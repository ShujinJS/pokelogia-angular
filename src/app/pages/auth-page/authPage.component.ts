import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormModel } from 'src/app/models/auth.model';

@Component({
    selector: 'app-authPage',
    templateUrl: './authPage.component.html',
    styleUrls: ['./authPage.component.scss'],
})

export class AuthPageComponent implements OnInit {
    classPrefix = 'app-formInputs'
    // registerForm: FormGroup = new FormGroup({})
    // loginForm: FormGroup = new FormGroup({})
    useForm: FormGroup = new FormGroup({})

    showLogin = false 
    isLogin: boolean = this.showLogin

    constructor ( private formBuilder: FormBuilder ) {

    }

    loginInputs = [ 
        { title: "Username", type: "text", isRequired: true, formControlName: "usernameInput", message: "Min. length: 4"},
        { title: "Password", type: "password", isRequired: true, formControlName: "passwordInput", message: "Min. length: 4"}, 
        { title: "Remember me?", type: "checkbox", isRequired: false, formControlName: "checkboxInput", message: ""}, 
    ]

    registerInputs = [ 
        { title: "Username", type: "text", isRequired: true, formControlName: "usernameInput", message: "Min. length: 4"}, 
        { title: "Password", type: "password", isRequired: true, formControlName: "passwordInput", message: "Min. length: 4"}, 
        { title: "Confirm password", type: "password", isRequired: true, formControlName: "passwordConfirmInput", message: "Passwords must be matched"}, 
    ]

    inputsToUse = this.isLogin ? this.loginInputs : this.registerInputs

    ngOnInit(): void {
        const formToUse = this.createForm()
        this.useForm = this.formBuilder.group(formToUse)
        // this.loginForm = this.formBuilder.group({
        //     usernameInput: ['', [Validators.minLength(4),Validators.required]],
        //     passwordInput: ['', [Validators.minLength(4),Validators.required]],
        //     checkboxInput: [''],
        // })

        // this.registerForm = this.formBuilder.group({
        //     usernameInput: ['', [Validators.minLength(4),Validators.required]],
        //     passwordInput: ['', [Validators.minLength(4),Validators.required]],
        //     passwordConfirmInput: ['', [Validators.minLength(4), Validators.required]],
        // })
        
    }

    createForm(): FormModel {
        let formToUse: FormModel = {
            usernameInput: ['', [Validators.minLength(4),Validators.required]],
            passwordInput: ['', [Validators.minLength(4),Validators.required]],
        }

        if(this.isLogin) {
            formToUse = {
                ...formToUse,
                checkboxInput: ['', []], 
            }
        } else {
            formToUse = {
                ...formToUse,
                passwordConfirmInput: ['', [Validators.minLength(4), Validators.required]],
            }
        }
        return formToUse;
    }

    onSubmit(): void {
        
    }
}