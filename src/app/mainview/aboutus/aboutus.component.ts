import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
  @Output() someEventClicked=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  someEvent(data){
      this.someEventClicked.emit(data);
  }

}
