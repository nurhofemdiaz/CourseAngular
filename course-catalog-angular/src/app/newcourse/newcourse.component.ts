import { Component, OnInit } from '@angular/core';
import { TEACHERS } from '../mocks/mock-teachers';
import { LEVELS } from '../mocks/mock-levels';

@Component({
  selector: 'app-newcourse',
  templateUrl: './newcourse.component.html',
  styleUrls: ['./newcourse.component.css']
})
export class NewcourseComponent implements OnInit {
  teachers = TEACHERS;
  levels = LEVELS;
  constructor() { }

  ngOnInit() {
  }

}
