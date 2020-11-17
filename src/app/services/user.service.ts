import { Injectable } from '@angular/core';
import { RequestServiceBase } from './request-service-base';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    url = environment.API_BASE_URL;

    constructor(
        private http: RequestServiceBase
        ) { }


    login(email, password) {
       return this.http.httpPost( 'login', { email: email, password: password });
    }

    logout() {
       return this.http.httpGet('logout');
    }

}
