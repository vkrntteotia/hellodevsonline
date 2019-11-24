import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
import { map,catchError } from 'rxjs/operators';
import { Observable,throwError } from "rxjs";
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {
  private data:any=[];
  constructor( private dataService:DataService,public httpClient:HttpClient ) { }

  ngOnInit() {
   this.dataService.getPagesByIdWP('519').subscribe(res=>{
     this.data = JSON.parse(res).content.rendered.replace(/<[^>]*>/g, '');
   }, 
   err => {
     console.log('oops some error in Project Financial year selection'); 
     console.log(err);
   })
  }
}
