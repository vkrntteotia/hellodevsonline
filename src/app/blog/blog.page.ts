import { Component, AfterViewInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements AfterViewInit {
   data:any=[];
  constructor( private router:Router, private dataService:DataService, public httpClient:HttpClient ) { }
  ngAfterViewInit(){
    this.dataService.getAllCategoriesWP().subscribe(res=>{
      console.log('response is here',res);
      this.data = JSON.parse(res);
      console.log('id is here for post',this.data[0].id);
    }, 
    err => {
      console.log('oops some error in Project Financial year selection'); 
      console.log(err);
    })
  }

  postsByCategory(categoryId:any,categoryName:any){
    var postData:any=[{ category_id:categoryId, category_name:categoryName }]
      console.log('category id is here',postData);
      this.dataService.setData("categoryId", postData);
      this.router.navigateByUrl("/posts-by-category/categoryId");
  }

}
