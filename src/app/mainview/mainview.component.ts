import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.scss']
})
export class MainviewComponent implements OnInit {
  rendermain:boolean=true;
  message:String;
  @Output() changed=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  toggleBoolean(data){
    this.rendermain=false;
    this.message=data;
    this.changed.emit(data);
    
    
  }

}
