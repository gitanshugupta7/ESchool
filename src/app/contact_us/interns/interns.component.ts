import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-interns',
  templateUrl: './interns.component.html',
  styleUrls: ['./interns.component.scss']
})
export class InternsComponent implements OnInit {
  @Output() goToHome=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  gotohome(){
    this.goToHome.emit();
  }

}
