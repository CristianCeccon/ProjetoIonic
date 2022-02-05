import { ProductsHttp } from './../../providers/products-http/products-http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/Observable/SubscribeOnObservable';
import 'rxjs/'


/**
 * Generated class for the ProductsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products-list',
  templateUrl: 'products-list.html',
})
export class ProductsListPage {

  products = [];
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public ProductsHttp: ProductsHttp
    ) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ProductsListPage');
    this.ProductsHttp
    .query()
    .subscribe(data => this.products = data);
    
  }

}
