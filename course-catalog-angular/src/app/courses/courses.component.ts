import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { COURSES } from '../mocks/mock-courses';
import { PAGE } from '../mocks/mock-pages';

import { CourseBusinessService } from '../service/course-business-service';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[];
  page = PAGE;
  @Input()
  showList: boolean;
  @Output()
  getShow: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor ( private courseBusinessService: CourseBusinessService) { }

  ngOnInit() {
    // Set initial values
    this.page.pageNumber = 0;
    this.page.isAscendingOrder = true;

    // Load number maximun of pages
    this.courseBusinessService.getPages().subscribe(res =>{
        this.page.maxNumberPages = res._body;
    });

    // Load course table
    this.reloadTable();

  }

  private reloadTable(){
    this.courseBusinessService.getCourses(this.page.pageNumber,this.page.isAscendingOrder).subscribe(res =>{
        this.courses = res.json();
    });
  }

  pressButtonBack() {
    if(this.page.pageNumber > 0){
      // Load course table
      this.page.pageNumber--;
      this.reloadTable();
    }
  }

  pressOrder() {

      // Load course table
      this.page.isAscendingOrder = !this.page.isAscendingOrder;
      this.reloadTable();
    
  }

  pressButtonNext() {
      if(this.page.pageNumber < this.page.maxNumberPages){
        // Load course table
        this.page.pageNumber++;
        this.reloadTable();
      }
  }

  pressButton2() {
      if(this.page.pageNumber <= this.page.maxNumberPages){
        // Load course table
        this.page.pageNumber = (  this.page.pageNumber >= 1) ?  this.page.pageNumber + 1 : 1;
        this.reloadTable();
      }
  }

  pressButton1() {
      if(this.page.pageNumber <= this.page.maxNumberPages){
        // Load course table
        this.page.pageNumber = (this.page.pageNumber > 0) ? this.page.pageNumber - 1 : 0;
        this.reloadTable();
      }
  }

  pressButton3() {
      if(this.page.pageNumber <= this.page.maxNumberPages){
        // Load course table
        this.page.pageNumber = (this.page.pageNumber > 1) ? this.page.pageNumber + 1 : 3;
        this.reloadTable();
      }
  }

  pressButtonNew() {
    this.getShow.emit(false);
  }
}
