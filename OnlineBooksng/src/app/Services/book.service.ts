import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BooksComponent } from '../books/books.component';
import { Book } from '../book';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  url: string = "api/Books";

  books: Observable<BooksComponent>[];

  constructor(private client: HttpClient) { }

  getBooks():Observable <Book[]>{
    return this.client.get<Book[]>(this.url);
  }

  searchBooks(person: string): Observable<Book[]>{
    if(!person.trim){
      return of([]);
    }
    return this.client.get<Book[]>('${this.url}/?name=${person}');
  }
}
