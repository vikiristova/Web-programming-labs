import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: string[], term: string): any {
    if (!term) {
      term = '';
    }
    if (!items) {
      return [];
    }
    return items.filter(item => item.indexOf(term) !== -1);
  }
}
