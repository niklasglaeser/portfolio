import { Component } from '@angular/core';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { AboveTheFoldComponent } from '../above-the-fold/above-the-fold.component';
import { BurgerMenuComponent } from '../burger-menu/burger-menu.component';
import { SkillsDisplayComponent } from '../skills-display/skills-display.component';
import { PortfolioDisplayComponent } from '../portfolio-display/portfolio-display.component';
import { ContactformComponent } from '../contactform/contactform.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [AboutmeComponent, AboveTheFoldComponent, BurgerMenuComponent, SkillsDisplayComponent, PortfolioDisplayComponent, ContactformComponent, FooterComponent, HeaderComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
