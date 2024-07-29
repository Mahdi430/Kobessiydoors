import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkWithHref, UrlMatcher, UrlMatchResult } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { CommonModule } from '@angular/common';
import { URL } from 'url';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [AboutComponent,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(private router:Router){

  }

}
