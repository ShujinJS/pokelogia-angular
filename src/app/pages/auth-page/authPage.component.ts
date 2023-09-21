import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-authPage',
    templateUrl: './authPage.component.html',
    styleUrls: ['./authPage.component.scss'],
})

export class AuthPageComponent implements OnInit {
    classPrefix = 'app-formInputs'
    registerForm: FormGroup = new FormGroup({})
    loginForm: FormGroup = new FormGroup({})

    mockData = true 
    isLogin: boolean = this.mockData

    constructor ( private formBuilder: FormBuilder ) {

    }

    loginInputs = [ 
        { title: "Username", type: "text", isRequired: true, formControlName: "usernameInput", message: "Min. length: 4"},
        { title: "Password", type: "password", isRequired: true, formControlName: "passwordInput", message: "Min. length: 4"}, 
        { title: "Remember me?", type: "checkbox", isRequired: false, formControlName: "checkboxInput", message: "None"}, 
    ]

    registerInputs = [ 
        { title: "Username", type: "text", isRequired: true, formControlName: "usernameInput", message: "Min. length: 4"}, 
        { title: "Password", type: "password", isRequired: true, formControlName: "passwordInput", message: "Min. length: 4"}, 
        { title: "Password match", type: "password", isRequired: true, formControlName: "paswordMatchInput", message: "Passwords must be matched"}, 
    ]

    inputsToUse = this.isLogin ? this.loginInputs : this.registerInputs

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            usernameInput: ['', [Validators.minLength(4),Validators.required]],
            passwordInput: ['', [Validators.minLength(4),Validators.required]],
            checkboxInput: [''],
        })  
    }

    onSubmit(): void {
        
    }
}