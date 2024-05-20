import { AuthService } from './../../../core/service/auth.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../../../core/service/app.layout.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, RouterModule, MenuModule, ButtonModule],
  templateUrl: './topbar.component.html',
  providers: [LayoutService, AuthService]
})
export class TopbarComponent implements OnInit{
  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(public layoutService: LayoutService, private authService: AuthService) {}
  ngOnInit(): void {
    this.items = [
      {
          label: 'Options',
          items: [
              {
                  label: 'Salir',
                  icon: 'pi pi-upload',
                  command: () => {
                    this.authService.logout();
                  }
              },
          ]
      }
  ];
  }

}
