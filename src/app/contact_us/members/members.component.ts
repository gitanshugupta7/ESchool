import { PlatformLocation } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  @Output() goToHome=new EventEmitter();

  constructor(private _location:PlatformLocation) { 
    this._location.onPopState (() => {
      // You could write code to display a custom pop-up here.
     
       window.location.href = ''; //Navigate to another location when the browser back is clicked.
     
     
     });
  }

  ngOnInit(): void {
  }
  gotohome(){
    this.goToHome.emit();
  }

}
