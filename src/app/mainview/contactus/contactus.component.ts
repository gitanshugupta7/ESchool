import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  @Output() someEventClicked=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  someEvent(data){
    this.someEventClicked.emit(data);

  }

}
