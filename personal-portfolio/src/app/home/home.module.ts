import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AboutComponent } from '../about/about.component';
import { SkillsModule } from '../skills/skills.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WorkExperienceModule } from '../work-experience/work-experience.module';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    SkillsModule,
    FontAwesomeModule,
    WorkExperienceModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
