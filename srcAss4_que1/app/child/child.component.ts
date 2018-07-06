import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() public event1=new EventEmitter();
public sendE()
{
  this.event1.emit("I Am In Child Data");
}
 
@Input() public pData;

  ngOnInit() {
  }

}
