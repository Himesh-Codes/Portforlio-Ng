import { Injectable } from '@angular/core';
import { WorkExperienceItemComponent } from '../work-experience/work-experience-item/work-experience-item.component';

@Injectable({
  providedIn: 'root'
})
export class UserActivityService {

  private currentSeeMoreActive: WorkExperienceItemComponent = {} as WorkExperienceItemComponent;

  constructor() { }

  public seeMoreSwitch(workItem: WorkExperienceItemComponent) {
    if(this.currentSeeMoreActive) this.currentSeeMoreActive.isMore = true;
    this.currentSeeMoreActive = workItem;
  }
}
