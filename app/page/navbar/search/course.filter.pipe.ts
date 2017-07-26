import {PipeTransform, Pipe} from "@angular/core"
import {ICategory} from "../../../interfaces/category";
import {CourseLink} from "../../../classes/CourseDTO/link.course.DTO";

@Pipe({
    name: "courseFilter"
})

export class CourseFilterPipe implements PipeTransform {
    transform(value: CourseLink[], filterBy: string): CourseLink[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((course: CourseLink) =>
        course.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}