import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.scss']
})
export class NavmenuComponent implements OnInit {

  navbarOpen = false;

  toggleNavbar() {

    this.navbarOpen = !this.navbarOpen;

  }
  constructor() { }

  ngOnInit(): void {
  }

}
