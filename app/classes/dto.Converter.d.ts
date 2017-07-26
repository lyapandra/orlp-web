import { CategoryTop } from "./CategoryDTO/top.category.DTO";
import { Link } from "./link";
import { CategoryLink } from "./CategoryDTO/link.category.DTO";
import { DeckPublic } from "./DeckDTO/public.deck.DTO";
import { CoursePublic } from "./CourseDTO/public.course.DTO";
import { CategoriesPublic } from "./CategoryDTO/public.categories";
import { CourseTop } from "./CourseDTO/top.course.DTO";
import { UsersPublic } from "./public.users.DTO";
import { CourseLink } from "./CourseDTO/link.course.DTO";
import { UserDetailsDto } from "./UserDetailsDto";
export declare class DTOConverter {
    static jsonToPublicLinkCourse(data: any): CourseLink;
    static jsonToPublicCourse(data: any): CoursePublic;
    static jsonToPublicDeck(data: any): DeckPublic;
    static jsonToTopCategory(data: any): CategoryTop;
    static jsonToTopCourse(data: any): CourseTop;
    static jsonToPublicCategories(data: any): CategoriesPublic;
    static jsonToPublicCategory(data: any): CategoryLink;
    static jsonToPublicUsers(data: any): UsersPublic;
    static jsonToUserDetails(data: any): UserDetailsDto;
    static jsonToLink(rel: string, data: any): Link;
    static jsonArrayToCollection(callback: Function, data: Array<any>): Array<any>;
}
