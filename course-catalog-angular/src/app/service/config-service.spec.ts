import { TestBed, async } from '@angular/core/testing';
import { ConfigService } from './config-service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { asyncData, asyncError } from '../../testing/async-observable-helpers';

describe ('ConfigService (with spies)', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let configService: ConfigService;

  beforeEach(() => {
    // Todo: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    configService = new ConfigService(<any> httpClientSpy);
  });

  it('should return expected configData (HttpClient called once)', () => {
    const expectedData = {
      "courseBusinessService": {
          "url": "http://localhost:8080/CourseCatalog/course",
          "method": {
              "getTeachers":"/teachers",
              "getLevels": "/levels",
              "getMaxPages": "/page/size/",
              "getCurrentPage": "/page/_numberOfPage_/size/_courseSizeList_/order/",
              "addCourse": "/add"
          }
      },
      "globalProperties": {
          "numberRows": 6
      }
    };

      [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];

    httpClientSpy.get.and.returnValue(asyncData(expectedData));

    configService.getConfigJson().subscribe(
      result => expect(result).toEqual(expectedData, 'expected config'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
