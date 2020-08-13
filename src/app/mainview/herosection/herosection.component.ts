import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-herosection',
  templateUrl: './herosection.component.html',
  styleUrls: ['./herosection.component.scss']
})
export class HerosectionComponent implements OnInit {

  constructor() { }

  

  ngOnInit(): void {
    $('.carousel-item', '.show-neighbors').each(function () {
      var next = $(this).next();
      if (!next.length) {
          next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
  }).each(function () {
      var prev = $(this).prev();
      if (!prev.length) {
          prev = $(this).siblings(':last');
      }
      prev.children(':nth-last-child(2)').clone().prependTo($(this));
  });
  
  
  // **navScroll**
  
  
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
      
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navgo").style.top = "0";
    } else {
      document.getElementById("navgo").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  }        
  
  window.onscroll = function() {scrollFunction()};
          
          function scrollFunction() {
            if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
              document.getElementById("menu").style.top = "0";
            } else {
              document.getElementById("menu").style.top = "-80px";
            }
          }
  
  
  
      
  }

}
