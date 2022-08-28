import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';
import { IFireBaseSignupResult } from 'src/types/iRegister';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private authService: AuthService) { }

  public async signUpFirebase(email: string, password: string): Promise<IFireBaseSignupResult> {
    return await this.authService.register(email, password);
  }
}
