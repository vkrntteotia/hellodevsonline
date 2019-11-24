import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private postsData:any=[];
  constructor( private route: ActivatedRoute, 
               private router: Router, 
               private dataService:DataService ) { }

  ngOnInit(){
    this.dataService.getAllPostsWP().subscribe(res=>{
      this.postsData = JSON.parse(res);
      console.log(this.postsData);
    }, 
    err => {
      //console.log('oops some error in Project Financial year selection'); 
      console.log(err);
    })
  }

  get_full_post(postid:any){
    var postData:any=[{ post_id:postid, category_name:'all' }]
    this.dataService.setData("categoryId", postData);
    this.router.navigateByUrl("/show-post/categoryId");
  }

}
