import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from '../sidenav/sidenav.component';

import { MatListModule } from '@angular/material/list';

@Component({
  
  selector: 'app-layout',
  standalone: true,
  imports:  [   CommonModule,
  MatSidenavModule,
  RouterOutlet,
  HeaderComponent,
  SidenavComponent,MatListModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',

})

export class LayoutComponent {
  open=false;
  Togglesidenav(){
    this.open=!this.open;
    console.log('open');
  }

}