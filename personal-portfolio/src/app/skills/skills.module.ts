import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillComponentComponent } from './skill-component/skill-component.component';
import { SkillItemComponentComponent } from './skill-item-component/skill-item-component.component';
import { SkillsComponent } from './skills.component';
import { SkillNameTranformPipe } from 'src/pipes/skillNamePipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SkillsComponent,
    SkillComponentComponent,
    SkillItemComponentComponent,
    SkillNameTranformPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SkillsComponent
  ]
})
export class SkillsModule { }
