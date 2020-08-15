import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  @Output() someEventClicked=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  someEvent(data){
    this.someEventClicked.emit(data);
  }

}
