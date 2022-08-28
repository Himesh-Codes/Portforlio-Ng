import { Injectable } from '@angular/core';
import { IWork } from 'src/types/iWork';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  private workExperiences: IWork[] = [];
  
  constructor() { 
    this.workExperiences = [
      {company: "Oracle", position: "CX Service Technical Specialist", tenure: 1, description: "I had the responsibility for helping in migration of dekstop apllication customizations of Oracle Service Cloud which is used by the bussiness, to web application extensions, And successfully helped four different customers to migrate their bussiness."},
      {company: "Triassic Solutions PVT LTD", position: "Software Engineer", tenure: 2.2, description: "I had handled responsibility working in SDLC life cycle of each of projects, customer connects, demo of POCs, worked in agile development. I was a full-stack developer, worked as team player and also managed projects single handedly. As a result 2 projects I had worked and also managed was able to go live."}
    ]
  }

  public getExperiences(){
    return this.workExperiences;
  }
}
