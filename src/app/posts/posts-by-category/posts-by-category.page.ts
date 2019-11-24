import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts-by-category',
  templateUrl: './posts-by-category.page.html',
  styleUrls: ['./posts-by-category.page.scss'],
})

export class PostsByCategoryPage implements OnInit {
  private data: any=[];
  private postsData:any=[];
  constructor( private route: ActivatedRoute, 
               private router: Router, 
               private dataService:DataService ) { }

  ngOnInit() {
    if (this.route.snapshot.data['special']) {
      this.data = this.route.snapshot.data['special'];
      if (this.data.length>0){ this.get_posts_by_category_id(this.data) }
    }
  }

  get_posts_by_category_id(data:any){
      this.dataService.getPostsByCategoryWP(data[0].category_id).subscribe(res=>{
        this.postsData = JSON.parse(res);
        console.log(this.postsData);
      }, 
      err => {
        //console.log('oops some error in Project Financial year selection'); 
        console.log(err);
      })
  }

  get_full_post(postid:any,categoryName:any){
    var postData:any=[{ post_id:postid, category_name:categoryName }]
      this.dataService.setData("categoryId", postData);
      this.router.navigateByUrl("/show-post/categoryId");
  }

}
