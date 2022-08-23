import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'skillnamepipe'})
export class SkillNameTranformPipe implements PipeTransform{
    transform(item: string){
        item = item.toString();
        return `~ \n ${item}`;
    }
}