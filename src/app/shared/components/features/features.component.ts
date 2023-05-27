import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  social_icon: any[] = [
    {
      link: 'javascript:;',
      icon_html: '<i class="fa-brands fa-facebook-f"></i>'
    },
    {
      link: 'javascript:;',
      icon_html: '<i class="fa-brands fa-twitter"></i>'
    }, {
      link: 'javascript:;',
      icon_html: '<i class="fa-brands fa-google-plus-g"></i>'
    },
    {
      link: 'javascript:;',
      icon_html: '<i class="fa-brands fa-pinterest-p"></i>'
    },
    {
      link: 'javascript:;',
      icon_html: '<i class="fa-brands fa-instagram"></i>'
    },
    {
      link: 'javascript:;',
      icon_html: '<i class="fa-solid fa-wifi"></i>'
    },
    {
      link: 'javascript:;',
      icon_html: '<i class="fa-solid fa-rss"></i>'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
