import { Injectable } from "@angular/core";
import { UserModel } from "src/app/models/user.model";

@Injectable({
    providedIn: 'root'
})

export class AuthPageService {
    private users: UserModel[] = []

    getUsers(): UserModel[] {
        return this.users;
    }

    getUser(id: string): UserModel | undefined {
        return this.users.find(res => res.id === id);
    }

    addUser(user: UserModel): void {
        this.users.push(user);
    }
}