import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {

    transform(friends: User[], queryString: string) {

        if (!friends) { return; }

        if (!queryString) { return friends; }

        queryString = queryString.toLowerCase();

        return friends.filter(friend => JSON.stringify(friend).toLowerCase().includes(queryString));
    }

}
