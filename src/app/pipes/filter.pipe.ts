import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'minimatch';

@Pipe({
    name: 'filter',

})

export class FilterPipe implements PipeTransform {

    transform(items: any, filterBy: string) {
        console.log(filterBy);
        let list = []
        items.map(item => {
            let nome = item.name.toLowerCase();
            nome.includes(filterBy.toLowerCase()) ? list.push(item) : null
        });
        if (list.length > 0 || filterBy.length > 0) {
            return list
        } else {
            return items
        }
    }
}