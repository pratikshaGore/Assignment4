import { Component, OnInit } from '@angular/core';

import { BookService } from '../book.service';

@Component({
  selector: 'app-subcomponent1',
  templateUrl: './subcomponent1.component.html',
  styleUrls: ['./subcomponent1.component.css']
})
export class Subcomponent1Component implements OnInit {
public bookDetails=[];
  constructor(private book_details1:BookService) 
  {

  }

  ngOnInit() 
  {
    this.bookDetails=this.book_details1.getBookDetails()
  }

}