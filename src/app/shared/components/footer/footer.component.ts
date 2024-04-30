import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LayoutService } from '../../../core/service/app.layout.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  providers: [LayoutService]
})
export class FooterComponent {
  constructor(public layoutService: LayoutService) {}
}
