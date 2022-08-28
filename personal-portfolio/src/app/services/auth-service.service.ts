import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, UserCredential, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { IFireBaseSignInResult } from 'src/types/iLogin';
import { IFireBaseSignupResult } from 'src/types/iRegister';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuthorized: boolean = false;

  constructor(private router: Router) { }

  // getter is used to avoid overwrite
  public get isAuthorized(){
    return this._isAuthorized;
  }

  private set isAuthorized(value: boolean){
    this._isAuthorized = value;
    if (value === true) {
      // redirect to home
      this.router.navigate(['']);
    }else {
      this.router.navigate(['login']);
    }
  }

  public async login(email: string, password: string): Promise<IFireBaseSignInResult>{
    const auth = getAuth();
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
      this.isAuthorized = true;
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

  public async logout(){
    this.isAuthorized = false;
    const auth = getAuth();
    signOut(auth).then(()=>{
      this.router.navigate(['login']);
    });
  }

  public redirectHome(){
    this.router.navigate(['']);
  }

  public redirectLogin(){
    this.router.navigate(['login']);
  }
}

