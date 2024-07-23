import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

export const routes: Routes = [
    { path: '', component: ContentComponent},
    { path: 'legalnotice', component: LegalNoticeComponent},
];
