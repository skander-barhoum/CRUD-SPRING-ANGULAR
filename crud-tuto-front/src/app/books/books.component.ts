import {  Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Book } from '../shared/Model/book';
import { BookService } from '../shared/Service/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  listBooks : any; 
  form : boolean = false;
   book!: Book;
   closeResult! : string;

  constructor(private bs : BookService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllBooks();;

    this.book = {
      id_book: null,
      title: null,
      nbPage: null,
      price: null,
      quantity: null
    }
  }

  getAllBooks(){
    this.bs.getAllBooks().subscribe(res => this.listBooks = res)
  }

  addBook(book: any){
    this.bs.addBook(book).subscribe(() => {
      this.getAllBooks();
      this.form = false;
    });
  }

  editBook(book : Book){
    this.bs.editBook(book).subscribe();
  }
  deleteBook(idBook : any){
    this.bs.deleteBook(idBook).subscribe(() => this.getAllBooks())
  }
  open(content: any) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  closeForm(){

  }
  cancel(){
    this.form = false;
  }
}
