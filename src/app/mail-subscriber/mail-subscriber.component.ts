import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

interface MailChimpResponse {
  result: string;
  msg: string;
}

@Component({
  selector: 'app-mail-subscriber',
  templateUrl: './mail-subscriber.component.html',
  styleUrls: ['./mail-subscriber.component.css']
})
export class MailSubscriberComponent implements OnInit {

  submitted = false;
	mailChimpEndpoint = 'https://2bracketsnco.us17.list-manage.com/subscribe/post-json?u=97f57d4ca806ddb46510218fa&amp;id=bc672fb756';
	error = '';

  constructor(private http: HttpClient) { }

  // reactive form components
	emailControl = new FormControl('', [
		Validators.required,
		Validators.email,
	]);

	submit() {
		this.error = '';
		if (this.emailControl.status === 'VALID') {

			const params = new HttpParams()
        .set('EMAIL', this.emailControl.value)
        .set('97f57d4ca806ddb46510218fa_bc672fb756', ''); // hidden input name

			const mailChimpUrl = this.mailChimpEndpoint + params.toString();

      // 'c' refers to the jsonp callback param key. This is specific to Mailchimp
			this.http.jsonp<MailChimpResponse>(mailChimpUrl, 'c').subscribe(response => {
				if (response.result && response.result !== 'error') {
					this.submitted = true;
				}
				else {
          this.error = response.msg;
				}
			}, error => {
				console.error(error);
				this.error = 'Sorry, an error occurred.';
			});
		}
	}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.emailControl.value);
  }

  ngOnInit(): void {
  }

}
