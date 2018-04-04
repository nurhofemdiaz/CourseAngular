import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { HttpResponse, HttpErrorResponse,  HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { ConfigService } from './config-service';
import { Teacher } from '../model/teacher';
import { Course } from '../model/course';

@Injectable()
export class CourseBusinessService {
  private currentPage: number;
  private isAscendingOrder: boolean;
  private course: Course;

  constructor (private http: Http, private configService: ConfigService) {}

  /**
  * This method get all teachers of backend
  */
  public getTeachers () {
    return this.getConfig().mergeMap((result) => {
                              return this.http
                                      .get( result.courseBusinessService.url + result.courseBusinessService.method.getTeachers )
                                      .pipe( catchError( this.handleError ));
                          });
  }

  /**
  * This method get levels of backend
  */
  public getLevels () {
    return this.getConfig().mergeMap((result) => {
                              return this.http
                                      .get( result.courseBusinessService.url
                                              + result.courseBusinessService.method.getLevels )
                                      .pipe( catchError( this.handleError ));
                          });
  }

  /**
  * This method get page number of backend
  */
  public getPages() {
    return this.getConfig().mergeMap((result) => {
                              return this.http
                                      .get( result.courseBusinessService.url
                                              + result.courseBusinessService.method.getMaxPages
                                              + result.globalProperties.numberRows )
                                      .pipe( catchError( this.handleError ));
                          });
  }

  /**
  * This method get courses of backend
  */
  public getCourses (current: number, isAsc: boolean) {
    this.currentPage = current;
    this.isAscendingOrder = isAsc;
    return this.getConfig().mergeMap((result) => {
                              let constURL = result.courseBusinessService.method.getCurrentPage;
                              constURL = constURL.replace('_numberOfPage_', this.currentPage)
                                                  .replace('_courseSizeList_', result.globalProperties.numberRows)
                                                  + this.isAscendingOrder;
                              let data = {numberOfPage: String(this.currentPage),
                                courseSizeList: String(result.globalProperties.numberRows),
                                order: String(this.isAscendingOrder)
                              };
                              return this.http
                                      .get( result.courseBusinessService.url
                                        + result.courseBusinessService.method.getCurrentPage, {params: data})
                                      .pipe( catchError( this.handleError ));
                          });
  }

  public addCourse (course: Course) {
    return this.getConfig().mergeMap((result) => {
                              return this.http
                                      .post( result.courseBusinessService.url + result.courseBusinessService.method.addCourse , course )
                                      .pipe( catchError( this.handleError ));
                          });
  }

  /**
  * This method get configuraton of configuration service
  */
  private getConfig() {
      return this.configService.getConfigJson();
  }

  /**
  * This method manage errors on request http
  */
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
