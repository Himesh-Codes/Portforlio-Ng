import { Injectable } from '@angular/core';
import { IContactDetails } from 'src/types/iContact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public contactDetails: IContactDetails = {} as IContactDetails;

  constructor() { 
    this.contactDetails = {mailId: "himeshsylesh@gmail.com", address: "532, Thuravoor, Alleppey, Kerala, India", phone: "+919992221110"}
  }

  public getContactDetails(){
    return this.contactDetails;
  }
}
