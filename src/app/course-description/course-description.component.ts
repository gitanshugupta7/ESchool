import { PlatformLocation } from '@angular/common';
import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { event } from 'jquery';

@Component({
  selector: 'app-course-description',
  templateUrl: './course-description.component.html',
  styleUrls: ['./course-description.component.scss']
})

export class CourseDescriptionComponent implements OnInit {
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
