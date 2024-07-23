import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurgerMenuService } from './burger-menu.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss'],
  imports: [CommonModule, TranslateModule]
})
export class BurgerMenuComponent {
  constructor(public burgerMenuService: BurgerMenuService, private translate: TranslateService) {}

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.burgerMenuService.toggleMenu();
  }
}
