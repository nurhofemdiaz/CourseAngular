import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import { NewcourseComponent } from './newcourse.component';

describe('NewcourseComponent', () => {
  let component: NewcourseComponent;
  let fixture: ComponentFixture<NewcourseComponent>;
  let form: FormGroup = new FormGroup({
    enable: new FormControl('Obligatorio',[]),
    teacher: new FormControl('Obligatorio',[Validators.required]),
    title: new FormControl('Obligatorio', [
        Validators.required,
        Validators.pattern("[A-Za-z0-9]+")
    ]),
    level: new FormControl('Obligatorio', [Validators.required]),
    hours: new FormControl('Obligatorio', [Validators.required])
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
