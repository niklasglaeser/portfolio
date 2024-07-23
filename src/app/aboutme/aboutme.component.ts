import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {
  constructor(private translate: TranslateService) {}

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop + 200,
        behavior: 'smooth'
      });
    }
  }
}
