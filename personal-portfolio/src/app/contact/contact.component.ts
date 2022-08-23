import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faContactCard } from '@fortawesome/free-solid-svg-icons';
import { IContactDetails } from 'src/types/iContact';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contact: IContactDetails = {} as IContactDetails;
  public contactIcon: IconDefinition = {} as IconDefinition;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contact = this.contactService.getContactDetails();
    this.contactIcon = faContactCard;
  }

}
