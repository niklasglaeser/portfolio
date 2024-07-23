import { Component, OnInit } from '@angular/core';
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
  imports: [
    AboutmeComponent, 
    AboveTheFoldComponent, 
    BurgerMenuComponent, 
    SkillsDisplayComponent, 
    PortfolioDisplayComponent, 
    ContactformComponent, 
    FooterComponent, 
    HeaderComponent
  ],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  ngOnInit() {
    this.addScrollAnimations();
  }

  addScrollAnimations() {
    const elements = document.querySelectorAll('.scroll-animation');
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, {
      threshold: 0.2
    });

    elements.forEach(element => {
      observer.observe(element);
    });
  }
}
