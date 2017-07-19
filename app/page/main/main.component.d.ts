import { OnInit } from '@angular/core';
import { MainService } from "./main.service";
import { ORLPService } from "../../orlp.service";
import { Link } from "../../classes/link";
import { CategoryTop } from "../../classes/top.category.DTO";
import { CourseTop } from "../../classes/top.course.DTO";
export declare class MainComponent implements OnInit {
    private MainService;
    private orlp;
    categories: CategoryTop[];
    courses: CourseTop[];
    errorMessage: string;
    constructor(MainService: MainService, orlp: ORLPService);
    ngOnInit(): void;
    getCategoryLink(link: Link): string;
    getCourseLink(link: Link): string;
}