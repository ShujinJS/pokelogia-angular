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

    getUser(username: string, password: string): UserModel | undefined {
        return this.users.find(res => res.username === username && res.password === password);
    }

    addUser(user: UserModel): void {
        this.users.push(user);
        addToStore('users', this.users)
    }
}