import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  readonly API_URL = 'http://localhost:8089';
  
  constructor(private httpClient: HttpClient) { }

  getAllBooks() {
    return this.httpClient.get(`${this.API_URL}/all-Books`)
  }
  addBook(Book : any) {
    return this.httpClient.post(`${this.API_URL}/add-Book`, Book)
  }
  editBook(Book : any){
    return this.httpClient.put(`${this.API_URL}/edit-Book`, Book)
  }
  deleteBook(idBook : any){
    return  this.httpClient.delete(`${this.API_URL}/delete-Book/${idBook}`)
  }

}
