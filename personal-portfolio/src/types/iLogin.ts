import { User } from "firebase/auth";

export interface ILoginForm{
    email: string;
    password: string;
}

export interface IFireBaseSignInResult{
    user?: User;
    status: string;
    message: string;
}