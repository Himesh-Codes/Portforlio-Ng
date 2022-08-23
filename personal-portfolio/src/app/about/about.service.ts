import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private about: string;

  constructor() { 
    this.about = "I would like to start with a qoute, \n 'If passion drives you, let reason hold the reins.' \n - Benjamin Franklin \n Well I am a tech enthusiastic, eagerly watching the developing technology, and learning how to efficiently get use of it. I hardly believe that technology is the future, and the future relies on the technological advancement. I am interested in solving problems with finding optimal soloutions, automate the things and make reduce man efforts."
  }

  public getAbout(){
    return this.about;
  }
}
