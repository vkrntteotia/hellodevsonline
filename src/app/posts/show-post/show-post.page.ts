import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.page.html',
  styleUrls: ['./show-post.page.scss'],
})
export class ShowPostPage implements OnInit {
  private data: any=[];
  private postsData:any=[];
  constructor( private route: ActivatedRoute, 
               private router: Router, 
               private dataService:DataService ) { }

  ngOnInit() {
    if (this.route.snapshot.data['special']) {
      this.data = this.route.snapshot.data['special'];
      if (this.data.length>0){ this.get_post_by_id(this.data) }
    }
  }

  get_post_by_id(data:any){
      this.dataService.getPostsByIdWP(data[0].post_id).subscribe(res=>{
        this.postsData = JSON.parse(res);
        console.log(this.postsData)
      }, 
      err => {
        //console.log('oops some error in Project Financial year selection'); 
        console.log(err);
      })
  }

}
