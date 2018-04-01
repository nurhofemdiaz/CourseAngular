import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import 'rxjs/add/operator/map';

import { ConfigService } from './config-service';
import { Teacher } from '../model/teacher';

@Injectable()
export class CourseBusinessService {

  constructor (private http: Http, private configService: ConfigService) {}

  // public getTeachers (): Teacher[] {
  //   return this.getConfig()
  //                    .subscribe(result =>{
  //                         console.log('Primer subscribe');
  //                         console.log(result);
  //                         return this.http
  //                                     .get<Teacher[]>( result.courseBusinessService.url + result.courseBusinessService.method.getTeachers )
  //                                     .pipe( catchError( this.handleError ));
  //                         });
  // }
  //
  // private getConfig(): Observable<any> {
  //     return this.configService.getConfigJson();
      // .subscribe(
                  // data => {
                      // return data.json().courseBusinessService;
                      // return data;
                    // }
                // );
  // }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable('Something bad happened; please try again later.');
  };

}
