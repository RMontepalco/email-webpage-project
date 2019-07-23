import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class EmailService{
    auth: any;
    constructor(private readonly rest: RestService) {}

    getEmails() {
        return this.rest.get(environment.apiURL + './emails?userId' + this.auth.getUserId());
    }

}