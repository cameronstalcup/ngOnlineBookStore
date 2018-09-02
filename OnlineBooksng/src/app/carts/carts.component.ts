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

  Temp: [];
  Carts: Cart[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addCart(): void{
    this.cartService.addCart()
      .subscribe(carts => this.Carts = carts)
  }

}
