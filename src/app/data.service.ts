import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { of } from 'rxjs';
import { Idea, Idea_List } from './models/idea';


export class DataService {

  private ideas: Idea[];
  private init: boolean;
  private update = new Subject<string>();
  updateAnnounced$ = this.update.asObservable();

  constructor() {

    this.ideas = Idea_List;
    this.init = true;
   }

  getData() {
    return this.ideas;
  }

  addIdea(idea: Idea) {
    this.ideas.push(idea);
    this.announceUpdate('update');
  }


  announceUpdate(data: string) {
    this.update.next(data);
  }






}
