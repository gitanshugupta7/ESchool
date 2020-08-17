import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-member-page',
  templateUrl: './member-page.component.html',
  styleUrls: ['./member-page.component.scss']
})
export class MemberPageComponent implements OnInit {
  @Output() goToHome=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  gotohome(){
    this.goToHome.emit();

  }

}
