import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-developer-page',
  templateUrl: './developer-page.component.html',
  styleUrls: ['./developer-page.component.scss']
})
export class DeveloperPageComponent implements OnInit {
  @Output() goToHome=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  gotohome(){
    this.goToHome.emit();
  }

}
