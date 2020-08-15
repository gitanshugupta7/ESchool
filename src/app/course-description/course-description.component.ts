import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-description',
  templateUrl: './course-description.component.html',
  styleUrls: ['./course-description.component.scss']
})
export class CourseDescriptionComponent implements OnInit {
  @Output() goToHome=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  gotohome(){
    this.goToHome.emit();

  }

}
