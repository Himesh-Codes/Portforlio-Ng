import { Component, Input, OnInit } from '@angular/core';
import { UserActivityService } from 'src/app/services/user-activity.service';
import { IWork } from 'src/types/iWork';

@Component({
  selector: 'app-work-experience-item',
  templateUrl: './work-experience-item.component.html',
  styleUrls: ['./work-experience-item.component.css']
})
export class WorkExperienceItemComponent implements OnInit {

  @Input() public work: IWork = {} as IWork;

  public isMore: boolean = true;

  constructor(private userActivityService: UserActivityService) { }

  ngOnInit(): void {
  }

  public seeMoreClicked(){
    this.isMore = false;
    this.userActivityService.seeMoreSwitch(this);
  }
}
