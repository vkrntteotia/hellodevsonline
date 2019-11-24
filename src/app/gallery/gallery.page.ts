import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  private data:any=[];
  constructor( private dataService:DataService, private elementRef:ElementRef ) { }

  ngOnInit() {
    this.dataService.getPagesByIdWP('162').subscribe(res=>{
      this.data = JSON.parse(res);
    }, 
    err => {
      console.log('oops some error in Project Financial year selection'); 
      console.log(err);
    })
   }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
     this.elementRef.nativeElement.lastElementChild.lastElementChild.style.setProperty('text-align', 'center');
  }

}
