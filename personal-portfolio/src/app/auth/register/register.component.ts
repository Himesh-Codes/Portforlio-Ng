import { Component, OnInit } from '@angular/core';
import { RegisterMessageType } from 'src/types/enum/register';
import { IRegisterForm } from 'src/types/iRegister';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formData: IRegisterForm = {
    email: '',
    password: '',
    confirmpassword: ''
  };

  public passWordMatched: boolean = true;
  public isLoading: boolean = false;
  public messageClass: string = '';
  public message: string = '';

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  public async submit() {
    this.isLoading = true;
    if(this.formData.password !== this.formData.confirmpassword){
      this.passWordMatched = false;
    }else{
      this.passWordMatched = true;
      const signUpResult = await this.registerService.signUpFirebase(this.formData.email, this.formData.password);
      if (signUpResult.status === '200') {
        this.messageClass = RegisterMessageType.success;
        this.message = signUpResult.message;
      }else {
        this.messageClass = RegisterMessageType.error;
        this.message = signUpResult.message;
      }
    }
    this.isLoading = false;
  }
}
