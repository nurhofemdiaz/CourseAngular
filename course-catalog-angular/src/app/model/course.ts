import {Teacher } from './teacher';
export class Course {
  id: number;
  enable: boolean;
  title: string;
  level: number;
  hours: number;
  teacher: Teacher;
}
