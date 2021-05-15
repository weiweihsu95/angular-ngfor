import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ParksService {
 // parks:any;
  constructor(private  http:HttpClient) {

  }
 getParks(){
  //  this.http.get('asset/data/data.json').toPromise()
   return this.http.get("assets/data/data.json").toPromise()


  }
}
