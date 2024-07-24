import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BurgerMenuService {
  private isVisible = false;

  toggleMenu() {
    this.isVisible = !this.isVisible;
    this.updateBodyClass();
  }

  getMenuState() {
    return this.isVisible;
  }

  getIconState() {
    return this.isVisible ? 'assets/img/close-burger-menu.png' : 'assets/img/burger-menu-icon.png';
  }

  private updateBodyClass() {
    if (this.isVisible) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }
}
