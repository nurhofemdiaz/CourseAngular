import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ConfigService {
  private config;

  constructor (private http: Http) {}

  getConfigJson () {
    return this.http.get('assets/config.json').map((res: Response) => res.json());
  }
}
