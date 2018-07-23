import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Observable } from 'rxjs';
import { Idea } from './../models/idea';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  data: Idea[];
  constructor(private ds: DataService) {
    ds.updateAnnounced$.subscribe(
      data => {
        this.data = this.ds.getData();
      });
   }

  ngOnInit() {
    this.data = this.ds.getData();
  }


}
