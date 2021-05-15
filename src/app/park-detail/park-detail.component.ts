import { Component, OnInit } from '@angular/core';
import {ParksService} from "../parks.service";

@Component({
  selector: 'app-park-detail',
  templateUrl: './park-detail.component.html',
  styleUrls: ['./park-detail.component.css']
})
export class ParkDetailComponent implements OnInit {
  parks:any;

  constructor(private parkservice:ParksService) {
    this.parkservice.getParks().then(data=>{this.parks=data})
  }

  ngOnInit(): void {
  }

}
