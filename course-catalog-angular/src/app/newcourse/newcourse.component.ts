import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  private levels;
  @Input()
  showList: boolean;
  @Output()
  getShow: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private courseBusinessService: CourseBusinessService) { }

  ngOnInit() {
      this.courseBusinessService.getTeachers().subscribe(res =>{
          this.teachers = res.json();
      });
      this.courseBusinessService.getLevels().subscribe(res =>{
          this.levels = res.json();
      });
  }
}
