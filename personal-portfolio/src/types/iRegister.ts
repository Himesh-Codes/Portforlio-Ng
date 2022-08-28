import { User } from "firebase/auth";

export interface IRegisterForm{
    email: string;
    password: string;
    confirmpassword: string;
}

export interface IFireBaseSignupResult{
    user?: User;
    status: string;
    message: string;
}