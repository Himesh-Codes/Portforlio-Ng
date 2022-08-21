import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { iSkills } from 'src/types/iSkills';
import { SkillService } from './skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public skills: iSkills[] = [];
  public codeimage: string = 'assets/code.png';
  public arrowImage: string = 'assets/arrows.gif';
  public typescriptSkill: string = 'Typescript';
  public isSkillsDisplayed: string = 'none';
  public searchTags: string|null = null;
  public skillShow: boolean = false;

  private searchTimeout: any = null;
  private jqueryInstance = $;

  constructor(private skillService: SkillService) { 
    this.skills = this.skillService.getSkills();
  }

  ngOnInit(): void {
  }

  public skillDisplayToggle(){
    this.isSkillsDisplayed = 'flex';
    this.skillShow = true;
  }

  public inputSearch(event: any){
    this.searchTags = '';
    // done typing
     clearTimeout(this.searchTimeout);
     this.searchTimeout = setTimeout(() => {
      this.searchTags = event.target.value ? `Searching for ${event.target.value} ...` : '';
    }, 1500);
  }

  public skillClick(value: string){
    this.searchTags = `Skill: ${value} is clicked`;
  }

}
