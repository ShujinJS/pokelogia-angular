import { NotificationComponentService } from './../../components/notification/notification.service';
import { NotificationModel } from 'src/app/models/store.models';
import { AuthPageService } from './authPage.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { idGenerator } from 'src/app/helper/common.helper';
import {
  addToStore,
  getFromStore,
  storeConstants,
} from 'src/app/helper/storage.helper';
import { FormModel, InputModel, UserModel } from 'src/app/models/auth.model';
import { AppStore } from 'src/app/store/app.store';

@Component({
  selector: 'app-authPage',
  templateUrl: './authPage.component.html',
  styleUrls: ['./authPage.component.scss'],
})
export class AuthPageComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private authPageService: AuthPageService,
    private router: Router,
    private appStore: Store<AppStore>,
    private notificationComponentService: NotificationComponentService
  ) {
    this.isDark$ = appStore.select('theme');
    this.notifications$ = appStore.pipe(select('notifications'));
  }

  classPrefix = 'app-formInputs';
  useForm: FormGroup = new FormGroup({});
  showLogin = false;
  isDark$: Observable<boolean>;
  notifications$: Observable<NotificationModel[]>;
  signInInput = {
    id: 'confirmPasswordInput',
    title: 'Confirm password',
    type: 'password',
    isRequired: true,
    formControlName: 'passwordConfirm',
    message: 'Passwords must be matched',
  };
  users: UserModel[] = [];

  formInputs = [
    {
      id: 'usernameInput',
      title: 'Username',
      type: 'text',
      isRequired: true,
      formControlName: 'username',
      message: 'Min. length: 4',
    },
    {
      id: 'passwordInput',
      title: 'Password',
      type: 'password',
      isRequired: true,
      formControlName: 'password',
      message: 'Min. length: 4',
    },

    // INFO: This approach couldn't be used of unavailability of dynmaic usage of "input.type" in "input type="input.type" in case of "input.type" equals to "checkbox", checkbox should be specificly set

    // this.showLogin ?
    //     { title: "Remember me?", type: "checkbox", isRequired: false, formControlName: "checkbox", message: ""}
    // :
    //     { title: "Confirm password", type: "password", isRequired: true, formControlName: "passwordConfirm", message: "Passwords must be matched"}
  ];

  ngOnInit(): void {
    localStorage.removeItem(storeConstants.users);
    localStorage.removeItem(storeConstants.isLoggedIn);
    this.users = getFromStore(storeConstants.users) || [];

    if (this.users.length) {
      return;
    } else {
      const testData = {
        username: 'testUser',
        password: '1234',
      };
      this.users.push(testData);
      addToStore(storeConstants.users, this.users);
    }

    const formToUse = this.createForm();
    if (this.showLogin) {
      //this.formInputs.pop()
    } else {
      this.formInputs.push(this.signInInput);
    }
    this.useForm = this.formBuilder.group(formToUse);
  }

  onSubmit(): void {
    if (this.useForm.valid) {
      const user: UserModel = this.useForm.value;

      if (this.showLogin) {
        this.authPageService.logUserIn(user);
        this.notificationComponentService.showNotification(
          user.username + ' logged in.'
        );
      } else {
        this.authPageService.signUserIn(user);
        this.notificationComponentService.showNotification(
          user.username + ' signed in.'
        );
      }
      this.useForm.reset();
      this.router.navigate(['/']);
    }
  }

  createForm(): FormModel {
    const passwordValidators = [Validators.minLength(4), Validators.required];
    if (this.showLogin) {
      passwordValidators.push(this.passwordValidator());
    }
    let formToUse: FormModel = {
      username: [
        '',
        [
          Validators.minLength(4),
          this.usernameValidator(),
          Validators.required,
        ],
      ],
      password: ['', passwordValidators],
    };

    if (this.showLogin) {
      formToUse = {
        ...formToUse,
        checkbox: ['', []],
      };
    } else {
      const randomId = idGenerator();
      formToUse = {
        ...formToUse,
        passwordConfirm: [
          '',
          [
            Validators.minLength(4),
            this.passwordValidator(),
            Validators.required,
          ],
        ],
        id: [randomId, []],
      };
    }
    return formToUse;
  }

  usernameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      const users = getFromStore('users');
      const username = this.useForm.get('username')?.value;
      const usernameInput = this.formInputs.find(
        (input: InputModel) => input?.title === 'Username'
      );
      const isTaken = users?.find(
        (user: UserModel) => user.username === username
      );

      if (!value) {
        return null;
      }

      if (this.showLogin) {
        return null;
      }

      if (usernameInput?.message !== undefined) {
        if (isTaken) {
          usernameInput.message = 'Username is taken!';
        } else {
          usernameInput.message = 'Min. length: 4';
        }
      }

      return isTaken ? { usernameTaken: true } : null;
    };
  }

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      const username = this.useForm.get('username')?.value;
      const password = this.useForm.get('password')?.value;
      const passwordConfirm = this.useForm.get('passwordConfirm')?.value;
      const passwordInput = this.formInputs.find(
        (input: InputModel) => input?.title === 'Password'
      );
      const users = this.authPageService.getUsers();
      let isLoginValid;
      const isMatched = users?.find(
        (usr) => usr.username === username && usr.password === password
      );

      if (!value) {
        return null;
      }

      if (passwordInput?.message !== undefined) {
        if (this.showLogin) {
          passwordInput.message = 'Password is incorrect!';
          isLoginValid = isMatched;
        } else {
          passwordInput.message = 'Min. length: 4';
          isLoginValid = password === passwordConfirm;
        }
      }

      return isLoginValid ? null : { passwordMissmatch: true };
    };
  }
}
