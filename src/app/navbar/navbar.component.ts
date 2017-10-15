import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  onWindowScroll(e: Event) {
    if (scrollY > 750) {
      document.getElementById('navbar').style.backgroundColor = 'rgba(0, 0, 0, 1)';
      document.getElementById('navbar').style.boxShadow = '0 9px 18px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.3)';
    } else {
      document.getElementById('navbar').style.backgroundColor = 'rgba(0, 0, 0, 0)';
      document.getElementById('navbar').style.boxShadow = '';

    }
  }


}
