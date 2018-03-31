import { Component, OnInit } from '@angular/core';
import { COURSES } from '../mocks/mock-courses';
import { PAGE } from '../mocks/mock-pages';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses = COURSES;
  page = PAGE;

  constructor() { }

  ngOnInit() {
  }



}
