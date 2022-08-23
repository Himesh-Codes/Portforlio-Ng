import { Pipe, PipeTransform } from "@angular/core";
import { contactType, IContactField } from "src/types/iContact";

@Pipe({name: "contactField"})
export class ContactPipe implements PipeTransform{
    transform(input: contactType){
        return IContactField[input];
    }
}