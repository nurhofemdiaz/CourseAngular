import { Component, OnInit } from '@angular/core';
import { COURSES } from '../mocks/mock-courses';
import { PAGE } from '../mocks/mock-pages';

import { CourseBusinessService } from '../service/course-business-service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[];
  page = PAGE;

  constructor(private courseBusinessService: CourseBusinessService) { }

  ngOnInit() {
    // Set initial values
    this.page.pageNumber = 0;
    this.page.isAscendingOrder = true;

    // Load number maximun of pages
    this.courseBusinessService.getPages().subscribe(res =>{
        this.page.maxNumberPages = res;
    });

    // Load course table
    this.courseBusinessService.getCourses(this.page.pageNumber,this.page.isAscendingOrder).subscribe(res =>{
        this.courses = res.json();
    });
  }



}
