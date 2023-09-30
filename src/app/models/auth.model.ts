export interface UserModel {
    id?: string,
    username: string,
    password: string,
    checkbox?: boolean,
}

export interface FormModel {
    id?: [string,  Function[]]
    username: [string, Function[]],
    password: [string, Function[]],
    passwordConfirm?: [string, Function[]],
    checkbox?: [string, Function[]],
}

export interface InputModel {
    title: string,
    type: string,
    isRequired: boolean,
    formControlName: string,
    message: string,
}