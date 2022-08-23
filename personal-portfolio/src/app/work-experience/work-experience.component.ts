import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { IWork } from 'src/types/iWork';
import { WorkService } from './work.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  public workIcon: IconDefinition = {} as IconDefinition;
  public works: IWork[] = [];

  constructor(private workService: WorkService) { }

  ngOnInit(): void {
    this.workIcon = faBriefcase;
    this.works = this.workService.getExperiences();
  }

}
