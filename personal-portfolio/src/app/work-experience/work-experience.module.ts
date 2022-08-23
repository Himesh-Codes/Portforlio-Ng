import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExperienceItemComponent } from './work-experience-item/work-experience-item.component';
import { WorkExperienceComponent } from './work-experience.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    WorkExperienceItemComponent,
    WorkExperienceComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    WorkExperienceComponent
  ]
})
export class WorkExperienceModule { }
