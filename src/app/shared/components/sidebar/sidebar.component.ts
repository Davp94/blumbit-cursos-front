import { Component, ElementRef, OnInit } from '@angular/core';
import { LayoutService } from '../../../core/service/app.layout.service';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './sidebar.component.html',
  providers: [LayoutService]
})
export class SidebarComponent {
  constructor(public layoutService: LayoutService, public el: ElementRef) {}
}
