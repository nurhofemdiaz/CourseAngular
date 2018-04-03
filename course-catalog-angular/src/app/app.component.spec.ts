import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { NewcourseComponent } from './newcourse/newcourse.component';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';


describe('AppComponent', () => {
  let title = 'Course Catalog';
  let showList = true;
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
      declarations: [
        AppComponent,
        CoursesComponent,
        NewcourseComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Course Catalog'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Course Catalog');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Course Catalog!');
  }));
});
