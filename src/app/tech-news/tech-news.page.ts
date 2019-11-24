import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.page.html',
  styleUrls: ['./tech-news.page.scss'],
})
export class TechNewsPage implements OnInit {
  
  private data:any=[];
  constructor( private dataService:DataService ) { }

  ngOnInit() {
   this.dataService.getPagesByIdWP('734').subscribe(res=>{
     console.log('response is here',res);
     this.data = JSON.parse(res);
     console.log('id is here for post',this.data);
   }, 
   err => {
     console.log('oops some error in Project Financial year selection'); 
     console.log(err);
   })
  }

}
