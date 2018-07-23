import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { interval } from 'rxjs';
import { fromEvent } from 'rxjs';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})


export class EventsComponent implements OnInit {

  date: Date;
  time: number;
  mouseData: any;
  key_code: any;
  secondsCounter = interval(1000);
  mouseMoves = fromEvent(document, 'mousemove');
  keyEvents = fromEvent(document , 'keydown');
  amount: number;
  name: string;
  constructor() {
    this.date = new Date();
    this.mouseData = {
      X: 0,
      Y: 0
    };
    this.amount = 1200;
    this.name = 'Larry';
   }

  ngOnInit() {
    this.secondsCounter.subscribe(n => {
      this.time = n;
  });
  this.mouseMoves.subscribe((evt: MouseEvent) => {
    // Log coords of mouse movements
    this.mouseData.X = evt.clientX;
    this.mouseData.Y = evt.clientY;

  });

  this.keyEvents.subscribe( ( evt: KeyboardEvent) => {
    this.key_code = evt.keyCode;
  });

  }

}
