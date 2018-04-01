import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

// import { Observable } from "rxjs/Rx"
// import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
// import { catchError, retry } from 'rxjs/operators';

import { map } from 'rxjs/operators';

@Injectable()
export class ConfigService {
  private config;

  constructor (private http: Http) {}

  getConfigJson () {
    return this.http.get('assets/config.json').map((res: Response) => res.json());
  }
}
