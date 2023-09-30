import { Injectable } from "@angular/core";
import { 
    storeConstants, 
    addToStore, 
    getFromStore 
} from "src/app/helper/storage.helper";
import { UserModel } from "src/app/models/auth.model";

@Injectable({
    providedIn: 'root'
})

export class AuthPageService {
    private users: UserModel[] = []

    constructor() {
        const usersStore = getFromStore(storeConstants.users)
        this.users = usersStore ?  usersStore : []
    }

    getUsers(): UserModel[] {
        return this.users;
    }

    signUserIn(user: UserModel): void {
        this.users.push(user);
        addToStore(storeConstants.users, this.users)
        this.logUserIn(user)
    }

    logUserIn(user: UserModel | undefined): void {
        const authData = {
            isLoggedIn: true,
            username: user?.username,
            isRemember: user?.checkbox,
        }

        addToStore(storeConstants.isLoggedIn, authData)
    }

    checkLogIn() {
        return getFromStore(storeConstants.isLoggedIn)
    }
}