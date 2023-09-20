import { BuilderHelper } from './../../helper/builder';

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

    loginInputs = [ { title: "username", type: "text", isRequired: true, }, { title: "password", type: "password", isRequired: true, } ]

    registerInputs = [ { title: "username", type: "text", isRequired: true }, { title: "password", type: "password", isRequired: true }, { title: "password match", type: "password", isRequired: true }, { title: "Remember me?", type: "checkbox", isRequired: false } ]

    inputsToUse = this.isLogin ? this.loginInputs : this.registerInputs

    ngOnInit(): void {
        
    }

    onSubmit(): void {

    }
}