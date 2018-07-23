import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Idea } from './../models/idea';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  name: string;
  desc: string;
  author: string;
  constructor(private ds: DataService) {
   }

  ngOnInit() {
  }

  addNewIdea() {
    console.log(this.name + this.desc + this.author );
    this.ds.addIdea(new Idea(this.name, this.desc, this.author));
  }

}
