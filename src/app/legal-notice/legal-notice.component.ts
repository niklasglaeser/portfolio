import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BurgerMenuComponent } from "../burger-menu/burger-menu.component";
import { FooterComponent } from "../footer/footer.component";
import { TranslateModule, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [HeaderComponent, BurgerMenuComponent, FooterComponent, TranslateModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent implements OnInit {
  constructor(private translate: TranslateService) {}

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
