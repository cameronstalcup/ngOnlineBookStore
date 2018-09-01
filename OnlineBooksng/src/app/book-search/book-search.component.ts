import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

import { Book } from '../book';
import { BookService } from '../Services/book.service'

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

  books$: Observable<Book[]>;
  private searchTerm = new Subject<string>();

  constructor(private bookService: BookService) { }

  search(person: string): void{
    this.searchTerm.next(person);
  }
  ngOnInit(): void {
    this.books$ = this.searchTerm.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((person: string)=> this.bookService.searchBooks(person)),
    );
  }
  
}
