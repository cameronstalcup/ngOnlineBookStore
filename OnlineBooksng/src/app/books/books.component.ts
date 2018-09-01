import { Component, OnInit } from '@angular/core';

import { BookService } from '../Services/book.service';
import { Book } from '../book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(private bookService: BookService) { }
  books: Book[];

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void{
    this.bookService.getBooks()
      .subscribe(books => this.books = books)
  }
}
