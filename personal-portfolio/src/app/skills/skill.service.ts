import { Injectable } from '@angular/core';
import { iSkills } from 'src/types/iSkills';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor() { }

  public getSkills(): iSkills[]{
    return [
      {
        name: 'Typescript',
        image: 'assets/code.png'
      },
      {
        name: 'JavaScript',
        image: 'assets/code.png'
      },
      {
        name: 'Angular',
        image: 'assets/code.png'
      },
      {
        name: 'Python',
        image: 'assets/code.png'
      },
      {
        name: 'Java',
        image: 'assets/code.png'
      },
      {
        name: 'OJET',
        image: 'assets/code.png'
      },
      {
        name: 'PHP',
        image: 'assets/code.png'
      },
      {
        name: 'PHP Frameworks',
        image: 'assets/code.png'
      },
      {
        name: 'HTML',
        image: 'assets/code.png'
      },
      {
        name: 'CSS',
        image: 'assets/code.png'
      },
      {
        name: 'Jquery',
        image: 'assets/code.png'
      }
    ];
  }
}
