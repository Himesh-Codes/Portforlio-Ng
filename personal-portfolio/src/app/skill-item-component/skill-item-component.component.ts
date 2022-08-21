import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { iSkills } from 'src/types/iSkills';

@Component({
  selector: 'app-skill-item-component',
  templateUrl: './skill-item-component.component.html',
  styleUrls: ['./skill-item-component.component.css']
})
export class SkillItemComponentComponent implements OnInit, OnDestroy {

  @Input() public skill: iSkills = {} as iSkills;
  
  // output decorator used to emit data
  @Output() public clickOnSkill = new EventEmitter<string>();

  constructor() { }

  // This hook works on when component is initialised and ready to show in DOM.
  ngOnInit(): void {
    console.log("Loading...")
  }

  // This hook works on when component is initialised and ready to show in DOM.
  ngOnDestroy(): void {
    console.log("Toggle Closed!")
  }

  public skillClick(value: string){
    this.clickOnSkill.emit(value);
  }

}
