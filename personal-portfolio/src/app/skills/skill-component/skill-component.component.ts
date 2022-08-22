import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { iSkills } from 'src/types/iSkills';

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill-component.component.html',
  styleUrls: ['./skill-component.component.css']
})
export class SkillComponentComponent implements OnInit {

  // input decorator used to declare the data passed from parent component
  @Input() public skillShow: boolean = false;
  @Input() public isSkillsDisplayed: string = '';
  @Input() public searchText: string|null = '';
  @Input() public skills: iSkills[] = [];


  // output decorator used to emit data
  @Output() public clickOnSkill = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {}

  public skillClick(event: string){
      this.clickOnSkill.emit(event);
  }

}
