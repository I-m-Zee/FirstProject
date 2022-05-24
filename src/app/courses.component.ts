import { Component } from "@angular/core";
import { CourseService } from "./course/course.service";

@Component({
    selector:'courses',
    template:
    `
    <h2>{{getTitle()}}</h2>
    <h2 [textContent]="getTitle()"></h2>
    <ul>
    <li *ngFor="let course of courses">
    {{course}}
    </li>
    </ul>
    <img src="{{imageUrl}}"/>
    <img [src]="imageUrl"/>
    <table>
    <tr>
    <td [attr.colspan]="colSpan">
    </td>
    </tr>

    </table>

    <button type="button" class="btn btn-primary" [class.active]="isActive">Primary</button>

    <button type="button" [style.backgroundColor]="isActive? 'blue': 'yellow' ">Primary</button>
    <button type="button" (click)="onSave()">Save</button>
    `
})
export class CoursesComponent{
    title="List of Courses";
    imageUrl="~/test.jpg";
    isActive=true;
    colSpan=2;
    courses;
    getTitle(){
        return "Title: "+this.title;
    }
    constructor(service:CourseService){
        this.courses = service.getCourse();
    }
    onSave(){
        console.log("Save Button has been clicked");
    }
}