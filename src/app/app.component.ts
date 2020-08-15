import { Component, ViewChild } from '@angular/core';
import { MainviewComponent } from './mainview/mainview.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(MainviewComponent) main:MainviewComponent;
  toggleviews:boolean=true;
  message:string;
  title = 'eschool';
  ngOnInit(){
    //this.setToggle();
  }
  setToggle(data){
    this.toggleviews=!this.toggleviews;
    this.message=data;
  }

}
