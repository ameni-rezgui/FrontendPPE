import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-section',
  templateUrl: './dash-section.component.html',
  styleUrls: ['./dash-section.component.css']
})
export class DashSectionComponent implements OnInit {

  constructor() { }


  ngOnInit() {
    var nucleoView = document.getElementsByClassName('icons-container')[0];
    window.addEventListener('scroll', function (event) {
      if (this.isInViewport(nucleoView)) {
        nucleoView.classList.add('on-screen');
      }
      else {
        nucleoView.classList.remove('on-screen');
      }
    }.bind(this), false);
  }
  isInViewport(elem) {
    var bounding = elem.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

}
