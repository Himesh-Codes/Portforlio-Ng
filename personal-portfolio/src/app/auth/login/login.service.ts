import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';
import { IFireBaseSignInResult } from 'src/types/iLogin';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private authService: AuthService) { }

  public async getSigninFirebase(email: string, password: string): Promise<IFireBaseSignInResult>{
    return await this.authService.login(email, password);
  }
}
