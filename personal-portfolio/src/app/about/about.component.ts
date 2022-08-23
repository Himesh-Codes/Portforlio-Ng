import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public aboutIcon: IconDefinition = {} as IconDefinition;
  public about: string = '';

  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    this.aboutIcon = faInfoCircle;
    this.about = this.aboutService.getAbout();
  }

}
