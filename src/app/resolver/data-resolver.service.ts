import { Injectable } from '@angular/core';
import { DataService } from './../services/data.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve<any> {

  constructor(public dataService: DataService) { }
  resolve(route: ActivatedRouteSnapshot){
      let id = route.paramMap.get('categoryId');
      return this.dataService.getData(id);
  }

}

