import { Component } from '@angular/core';
import { TopbarComponent } from '../topbar/topbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TopbarComponent, SidebarComponent, FooterComponent, RouterOutlet],
  templateUrl: './main.component.html',
})
export class MainComponent {

}
