import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { BurgerMenuService } from '../burger-menu/burger-menu.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  currentLanguage: string;
  showBurgerMenu: boolean = true;
  showGoBackButton: boolean = false;

  constructor(
    private translate: TranslateService,
    public burgerMenuService: BurgerMenuService,
    private router: Router
  ) {
    this.currentLanguage = this.translate.currentLang || 'en';

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showBurgerMenu = !event.url.includes('/legalnotice');
        this.showGoBackButton = event.url.includes('/legalnotice');
      }
    });
  }

  handleBurgerMenu() {
    this.burgerMenuService.toggleMenu();
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.currentLanguage = language;
  }
}
