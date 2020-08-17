import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  @Output() goToHome=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  gotohome(){
    this.goToHome.emit();
  }

}
