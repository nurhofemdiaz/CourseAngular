import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { NewcourseComponent } from './newcourse/newcourse.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    NewcourseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
