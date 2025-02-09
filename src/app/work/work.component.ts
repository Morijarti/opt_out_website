import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  private workPage: number;
  @ViewChild('work1', {read: ElementRef, static: false}) work1: ElementRef;
  @ViewChild('work2', {read: ElementRef, static: false}) work2: ElementRef;
  @ViewChild('work3', {read: ElementRef, static: false}) work3: ElementRef;
  private scrolling: boolean;

  constructor() {
    this.workPage = 1;
    this.scrolling = false;
  }

  ngOnInit() {
  }

  @HostListener('window:scroll')
  onScroll() {
    if (!this.scrolling) {
      if (window.pageYOffset % window.innerHeight  !== 0) {
        this.scrolling = true;
      }
      if ((window.pageYOffset > window.innerHeight) && (window.pageYOffset < window.innerHeight * 2)) {
        if (this.workPage === 2) {
          window.scrollTo(0, 2 * window.innerHeight);
        } else {
          window.scrollTo(0, window.innerHeight);
        }
      } else if ((window.pageYOffset > 0) && (window.pageYOffset < window.innerHeight)) {
        if (this.workPage === 1) {
          window.scrollTo(0, window.innerHeight);
        } else {
          window.scrollTo(0, 0);
        }
      }
    }
    if (window.pageYOffset % window.innerHeight  === 0 ) {
      this.scrolling = false;
      this.workPage = window.pageYOffset / window.innerHeight + 1;
    }
  }

}
