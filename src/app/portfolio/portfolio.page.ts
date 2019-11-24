import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage implements OnInit {
  private data:any=[];
  constructor( private dataService:DataService ) { }

  ngOnInit() {
   this.dataService.getPagesByIdWP('160').subscribe(res=>{
     this.data = JSON.parse(res);
   }, 
   err => {
     console.log('oops some error in Project Financial year selection'); 
     console.log(err);
   })
  }

}
