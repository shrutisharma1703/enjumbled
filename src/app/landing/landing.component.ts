import { Component, OnInit } from '@angular/core';
import { Idea, Mock_Ideas } from './../models/idea';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  ideatypes: string[];
  ideas: Idea[];

  constructor( private router: Router ) {
    this.ideas = Mock_Ideas;
    this.ideatypes = [
      'ideas on how to spend your weekend',
      'ideas on how to plan your day',
      'ideas on how to be more productive',
      'ideas on how to be more compassionate',
      'and many more'
    ];
   }
  ngOnInit() {
  }

  goToDetails() {
    this.router.navigate(['list']);
  }

}
