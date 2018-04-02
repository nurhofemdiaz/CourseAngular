import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { CoursesComponent } from './courses/courses.component';
import { NewcourseComponent } from './newcourse/newcourse.component';

import { ConfigService } from "./service/config-service"
import { CourseBusinessService } from "./service/course-business-service"

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    NewcourseComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ConfigService,
    CourseBusinessService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
