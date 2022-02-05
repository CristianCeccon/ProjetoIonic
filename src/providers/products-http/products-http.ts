import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


/*
  Generated class for the ProductsHttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductsHttp {

  constructor(public http: HttpClient) {
    
  }
  
  // query(): void {
  //   this.http.get('http://localhost:3000/products')
  //     .subscribe(response => console.log(response));
  // }

  // query(): Observable<any> {
  //   return this.http.get('http://localhost:3000/products')
  //     .map((result: Response) => Response.json())
      
  // }


  query(): Observable<Array<any>> {
    return this.http.get('http://localhost:3000/products')
    .map(response=>response.json());

  // }

}