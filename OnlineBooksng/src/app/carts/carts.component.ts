import { Component, OnInit } from '@angular/core';

import { Cart } from '../cart'
import { CartService } from '../Services/cart.service';
import { Book } from '../book';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {

  Carts: Cart[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  /*getCart():void{
    this.cartService.getCart()
    .subscribe(cart => this.Carts = cart)
}*/

  addToCart(): void{
    this.cartService.addToCart()
      .subscribe(carts => this.Carts = carts)
  }

}
