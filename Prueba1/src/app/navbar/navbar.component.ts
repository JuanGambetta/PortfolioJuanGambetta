import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  toggleSidebar: boolean = window.innerWidth > 425 ? true : false;
  toggleElement() {
    if (this.toggleSidebar === false) {
      this.toggleSidebar = true;
    } else {
      this.toggleSidebar = false;
    }
  }
}
