import { Injectable } from '@angular/core';
import { getAuth, UserCredential, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { IFireBaseSignInResult } from 'src/types/iLogin';
import { IFireBaseSignupResult } from 'src/types/iRegister';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuthorized: boolean = false;

  constructor() { }

  // getter is used to avoid overwrite
  public get isAuthorized(){
    return this._isAuthorized;
  }

  public checkAuth(){
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      this._isAuthorized = true;
    }else{
      this._isAuthorized = false;
    }
  }

  public async login(email: string, password: string): Promise<IFireBaseSignInResult>{
    const auth = getAuth();
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
      this._isAuthorized = true;
      return {user: userCredential.user, status: "200", message: "LoggedIn Successfully."}
    } catch (error: any) {
      return {status: error?.code, message: error?.message};
    }
  }

  public async register(email: string, password: string): Promise<IFireBaseSignupResult>{
    const auth = getAuth();
    try{
      const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
      return {user: userCredential.user, status: '200', message: "Created the user successfully."};
    }catch(error: any){
      return {status: error.code, message: error.message};
    }
  }
}

