import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CartsComponent } from '../carts/carts.component';
import { Cart } from '../cart'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  url: string = "Api/cart";

  carts: Observable<CartsComponent>[];

  constructor(private client: HttpClient) { }


  addCart(): Observable<Cart[]>{
    return this.client.get<Cart[]>(this.url)

  }

}
