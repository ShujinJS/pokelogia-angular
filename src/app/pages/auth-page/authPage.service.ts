import { Injectable } from "@angular/core";
import { addToStore, getFromStore } from "src/app/helper/storage.helper";
import { UserModel } from "src/app/models/auth.model";

@Injectable({
    providedIn: 'root'
})

export class AuthPageService {
    private users: UserModel[] = []

    constructor() {
        const usersStore = getFromStore('users')
        this.users = usersStore ?  usersStore : []
    }

    getUsers(): UserModel[] {
        return this.users;
    }

    getUser(username: string, password: string) {
        const matchedUser: UserModel | undefined = this.users.find(res => res.username === username && res.password === password);
        this.logUserIn(matchedUser)
    }

    signUserIn(user: UserModel): void {
        this.users.push(user);
        addToStore('users', this.users)
        this.logUserIn(user)
    }

    logUserIn(user: UserModel | undefined): void {
        const authData = {
            isLoggedIn: true,
            userData: user,
        }
        const isValid = this.users.find(usr => usr.username === user?.username && usr.password === user.password)

        if(isValid) {
            addToStore('loggedUser', authData)
        } else {
            return
        }
    }






}