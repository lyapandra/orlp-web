import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import {RequestOptions, Response, Headers, Http} from '@angular/http';
import {ORLPService} from "../../orlp.service";
import {User} from "./User";
import {FormGroup} from "@angular/forms";


@Injectable()
export class SignupService {
    private _controllerUrl = 'http://localhost:8080/api/registration';
    constructor(private _orlp: ORLPService, private http: Http) { }


    registerUser(newUser: User): Observable<User> {
        return this.http.post(this._controllerUrl, newUser).map(this.extractData)
            .catch(this.handleErrorObservable);

    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleErrorObservable(error: Response | any) {
        return Observable.throw(error.message || error);
    }



}