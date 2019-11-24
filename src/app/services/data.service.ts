import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = `http://www.hellodevs.online/testing.php`;
  totalPosts = null;
  pages: any;
// posts=all for all posts
// postById=get_post_by_id,postid for particular post
// categories=all_category for get all categories
// postsByCategory=get_post_by_category, categoryId for get all posts by categoryId

// https://nairobilawmonthly.innoappstech.com/nairobi/public/api/getArticles?currentpage=${currentpage}
// https://www.hellodevs.online/wp-json/wp/v2/posts  
  private category_id = [];
  constructor(public httpClient: HttpClient) {
  }

  async getData(id:any) {
    return this.category_id[id];
  }

  async setData(id:any, data:any) {
    this.category_id[id] = data;
  }

  getAllPagesWP(){
    return this.httpClient.get(`${this.url}?pages=all`)
      .pipe(
        map(
          (response: any) =>{ return response; }      
        )
      );
  }

  getPagesByIdWP(id:any){
    var pageid:any='';
    pageid=id;
    return this.httpClient.get(`${this.url}?pageById=get_page_by_id&pageId=${pageid}`)
      .pipe(
        map(
          (response:any) =>{ return response; }
        )
      );
  }

  getAllPostsWP() {
    return this.httpClient.get(`${this.url}?posts=all`)
      .pipe(
        map(
          (response: any) =>{ return response; }      
        )
      );
  }

  getPostsByIdWP(id:any){
    var postid:any='';
    postid=id;
    return this.httpClient.get(`${this.url}?postById=get_post_by_id&postId=${postid}`)
      .pipe(
        map(
          (response:any) =>{ return response; }
        )
      );
  }

  getAllCategoriesWP(){
    return this.httpClient.get(`${this.url}?categories=all_category`)
    .pipe(
      map(
        (response:any) =>{ return response; }
      )
    )
  }

  getPostsByCategoryWP(catgId:any){
    return this.httpClient.get(`${this.url}?postsByCategory=get_post_by_category&categoryId=${catgId}`)
    .pipe(
      map(
        (response:any) =>{ return response; }
      )
    );
  }

}


