import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';
import { IFireBaseSignInResult, ILoginForm } from 'src/types/iLogin';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formData: ILoginForm = {
    email: '',
    password: ''
  };
  public errorMessage: string = '';
  public isLoading: boolean = false;

  constructor(private loginService: LoginService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  public async submitLogin(){
    this.isLoading = true;
    if (this.formData.email !== '' && this.formData.password !== '') {
      const result: IFireBaseSignInResult = await this.loginService.getSigninFirebase(this.formData.email, this.formData.password);
      if (result.status !== '200') {
        this.errorMessage = result.message;
      }else{
        this.errorMessage =  '';
      }
    }
    this.isLoading = false;
  }

}
