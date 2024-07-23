import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform-1.component.scss', './contactform-2.component.scss', './cf-responsive.component.scss']
})
export class ContactformComponent {
  @ViewChild('checkBox') checkBox!: ElementRef;

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    privacyPolicy: false,
  }

  nameFocused = false;
  emailFocused = false;
  messageFocused = false;

  mailTest = false;

  post = {
    endPoint: 'https://niklasglaeser.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  constructor(private translate: TranslateService) {}

  toggleCheckbox() {
    this.contactData.privacyPolicy = !this.contactData.privacyPolicy;
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }
}
