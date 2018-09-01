import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class OrderServiceService {
  url: string = "URL Destination";

  //orders: Observable<Filler[]>();
  //order: Observable<Filler>;
  

  constructor(private client: HttpClient) { }

  getOrder(id){
    var newUrl = this.url + `/${id}`;
    //var order = this.client.get<Order>(newUrl);
    //return order;
  }

  getOrders() {
    //return this.client.get<Order[]>(this.url);
  }
}
