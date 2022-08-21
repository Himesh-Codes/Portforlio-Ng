import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SkillNameTranformPipe } from 'src/pipes/skillNamePipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillComponentComponent } from './skill-component/skill-component.component';
import { SkillItemComponentComponent } from './skill-item-component/skill-item-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    SkillNameTranformPipe,
    SkillComponentComponent,
    SkillItemComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
