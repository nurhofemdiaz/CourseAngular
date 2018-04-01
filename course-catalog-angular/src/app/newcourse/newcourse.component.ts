import { Component, OnInit } from '@angular/core';
import { LEVELS } from '../mocks/mock-levels';
import { CourseBusinessService } from '../service/course-business-service';
import { Teacher } from '../model/teacher';

@Component({
  selector: 'app-newcourse',
  templateUrl: './newcourse.component.html',
  styleUrls: ['./newcourse.component.css']
})
export class NewcourseComponent implements OnInit {
  private teachers : Teacher[];
  private levels = LEVELS;
  constructor(private courseBusinessService: CourseBusinessService) { }

  ngOnInit() {
      this.courseBusinessService.getTeachers().subscribe(res =>{
          this.teachers = res.json();
      });
  }
}
