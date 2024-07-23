import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BurgerMenuService {
  private isVisible = false;

  toggleMenu() {
    this.isVisible = !this.isVisible;
  }

  getMenuState() {
    return this.isVisible;
  }

  getIconState() {
    return this.isVisible ? 'assets/img/close-burger-menu.png' : 'assets/img/burger-menu-icon.png';
  }
}
