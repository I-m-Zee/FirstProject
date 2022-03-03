import { Component } from "@angular/core";
import { CourseService } from "./course/course.service";

@Component({
    selector:'courses',
    template:`<h2>{{getTitle()}}</h2>
    <ul>
    <li *ngFor="let course of courses">
    {{course}}
    </li>
    </ul>
    `
})
export class CoursesComponent{
    title="List of Courses"
    courses;
    getTitle(){
        return "Title: "+this.title;
    }
    constructor(service:CourseService){
        this.courses = service.getCourse();

    }
}