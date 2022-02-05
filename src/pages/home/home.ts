import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public produtos;

  constructor(public navCtrl: NavController) {

    this.produtos= [
      {nome:'Arroz', preco: 34},
      {nome:'Feijão', preco: 28},
      {nome:'Macarrão', preco: 80},
      {nome:'Panetone', preco: 40},
      {nome:'Leite Caixa', preco: 7},
      {nome:'Batata', preco: 10},
      {nome:'Banana', preco: 5},
      {nome:'Carne Alcatra', preco: 200},
      {nome:'Peixe Sardinha', preco: 100},
      {nome:'Suco de caixa', preco: 20},
    ]

  }

}
