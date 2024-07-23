import { Component } from '@angular/core';
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
export class LegalNoticeComponent {
  constructor(private translate: TranslateService) {}

}
