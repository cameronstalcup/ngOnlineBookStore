import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CartsComponent } from './carts/carts.component';
import { BooksComponent } from './books/books.component';
import { BookSearchComponent } from './book-search/book-search.component';

const routes: Routes = [
  { path: 'Cart', component: CartsComponent},
  { path: 'Books', component: BooksComponent},
  { path: 'BookSearch', component: BookSearchComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
