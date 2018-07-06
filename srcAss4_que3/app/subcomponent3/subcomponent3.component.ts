import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-subcomponent3',
  templateUrl: './subcomponent3.component.html',
  styleUrls: ['./subcomponent3.component.css']
})
export class Subcomponent3Component implements OnInit {
public bookDetails=[];
  constructor(private book:BookService) { }

  ngOnInit() 
  {
    this.bookDetails=this.book.getBookDetails();
  }

}
