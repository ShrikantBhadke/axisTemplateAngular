import { Component, OnInit } from '@angular/core';
import { Inavlist } from '../../models/navlist';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navlist: Inavlist[] = [
    {
      link: 'features',
      name: 'Features'
    },
    {
      link: 'about',
      name: 'About'
    },
    {
      link: 'pricing',
      name: 'Pricing'
    },
    {
      link: 'reviews',
      name: 'Reviews'
    },
    {
      link: 'contact',
      name: 'Contact'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
