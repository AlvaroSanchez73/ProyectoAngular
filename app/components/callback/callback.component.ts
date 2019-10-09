import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.services';
import { UtilsService } from 'src/app/services/utils.services';
import { AppServices } from 'src/app/services/app.services';



@Component({
	selector: 'app-callback',
	templateUrl: './callback.component.html',
	styleUrls: []
})

export class CallbackComponent implements OnInit {

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private auth: AuthService,
		private utils: UtilsService,
		public appServices: AppServices

	) {
	}


	ngOnInit() {
		this.utils.showSpinner();
		const url = location.hash.replace('#', '');
		const arrObject: any = url.split('&');
		const jsonCookie: any = {};
		let nElements = 0;
		jsonCookie.last_request = new Date();
		arrObject.forEach((val: any, key: any) => {
			const data = val.split('=');
			switch (data[0]) {
				case 'access_token':
					jsonCookie.access_token = data[1];
					nElements++;
					break;

				case 'id_token':
					jsonCookie.jwt = data[1];
					nElements++;
					break;

				case 'expires_in':
					jsonCookie.expires_in = data[1];
					nElements++;
					break;

				case 'token_type':
					jsonCookie.token_type = data[1];
					nElements++;
					break;

				case 'session_state':
					jsonCookie.session_state = data[1];
					nElements++;
					break;

			}
		});

		const jwtHelper = new JwtHelperService();
		const data2 = jwtHelper.decodeToken(jsonCookie.jwt);

		this.auth.setAuth(jsonCookie);
		this.utils.hideSpinner();

		this.utils.displayNavbar = true;
		this.router.navigate(['/home']);
	}

}


