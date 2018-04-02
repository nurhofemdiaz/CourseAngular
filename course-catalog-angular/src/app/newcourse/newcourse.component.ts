import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LEVELS } from '../mocks/mock-levels';
import { CourseBusinessService } from '../service/course-business-service';
import { Teacher } from '../model/teacher';
import { Course } from '../model/course';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';


@Component({
  selector: 'app-newcourse',
  templateUrl: './newcourse.component.html',
  styleUrls: ['./newcourse.component.css']
})
export class NewcourseComponent implements OnInit {
  newCourse: Course = new Course();
  form: FormGroup;
  private teachers : Teacher[];
  private levels;
  @Input()
  showList: boolean;
  @Output()
  getShow: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(private courseBusinessService: CourseBusinessService) { }

  ngOnInit() {
      this.newCourse.teacher = new Teacher();
      this.courseBusinessService.getTeachers().subscribe(res =>{
          this.teachers = res.json();
      });
      this.courseBusinessService.getLevels().subscribe(res =>{
          this.levels = res.json();
      });
      this.form = new FormGroup({
        enable: new FormControl('Obligatorio',[]),
        teacher: new FormControl('Obligatorio',[Validators.required]),
        title: new FormControl('Obligatorio', [
            Validators.required,
            Validators.pattern("[A-Za-z0-9]+")
        ]),
        level: new FormControl('Obligatorio', [Validators.required]),
        hours: new FormControl('Obligatorio', [Validators.required])
      });
  }

  addCourse(){
    if(this.form.valid){
      this.courseBusinessService.addCourse(this.newCourse).subscribe(res =>{
          this.getShow.emit(true);
      });
    } else {
      console.log('this.newCourse');
        this.form. markAsTouched();
    }
    // console.log("POST");
    // let url = `${this.apiRoot}/post`;
    // this.http.post(url, {moo:"foo",goo:"loo"}).subscribe(res => console.log(res.json()));
  }
}
