import { Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  storeConstants,
  addToStore,
  getFromStore,
} from 'src/app/helper/storage.helper';
import { UserModel } from 'src/app/models/auth.model';
import { logUserIn } from 'src/app/store/auth/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthPageService implements OnInit {
  private users: UserModel[] = [];

  constructor(private store: Store<{ auth: boolean }>) {
    const usersStore = getFromStore(storeConstants.users);
    this.users = usersStore ? usersStore : [];
  }

  ngOnInit(): void {}

  getUsers(): UserModel[] {
    return this.users;
  }

  signUserIn(user: UserModel): void {
    this.users.push(user);
    addToStore(storeConstants.users, this.users);
    this.logUserIn(user);
  }

  logUserIn(user: UserModel | undefined): void {
    const authData = {
      isLoggedIn: true,
      username: user?.username,
      isRemember: user?.checkbox,
    };

    addToStore(storeConstants.isLoggedIn, authData);
    this.store.dispatch(logUserIn());
  }

  checkLogIn() {
    return getFromStore(storeConstants.isLoggedIn);
  }

  isFtpSupported(): boolean {
    // Modern browsers no longer support FTP
    const unsupportedBrowsers = ['Chrome', 'Firefox', 'Edge', 'Safari'];

    const userAgent = navigator.userAgent;
    const isUnsupported = unsupportedBrowsers.some((browser) =>
      userAgent.includes(browser)
    );

    // Return false for unsupported browsers
    if (isUnsupported) {
      return false;
    }

    // For older browsers (e.g., IE or legacy ones), fallback behavior
    try {
      const testUrl = new URL('ftp://example.com');
      return testUrl.protocol === 'ftp:';
    } catch {
      return false;
    }
  }
}
