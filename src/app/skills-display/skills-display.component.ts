import { Component } from '@angular/core';
import { TranslateModule, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-skills-display',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './skills-display.component.html',
  styleUrl: './skills-display.component.scss'
})
export class SkillsDisplayComponent {
  constructor(private translate: TranslateService) {}

}
