import { Component } from '@angular/core';
import { TranslateModule, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio-display',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './portfolio-display.component.html',
  styleUrls: ['./portfolio-display.component.scss', './portfolio-responsive.component.scss']
})
export class PortfolioDisplayComponent {
  constructor(private translate: TranslateService) {}

}
