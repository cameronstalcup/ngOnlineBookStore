import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CartsComponent } from '../carts/carts.component';
import { Cart } from '../cart'
import { Book } from '../book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  url: string = "Api/cart";

  carts: Observable<CartsComponent>[];
  cart: Cart;

  constructor(private client: HttpClient) { }


  addToCart(): Observable<Cart[]>{
    this.client.get<Cart[]>(this.url)
    return 

  }

}
