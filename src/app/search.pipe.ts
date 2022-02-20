import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appSearch',
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string): any {
    if (!items) {
      return [];
    }
    return items.filter((it) => {
      return it.title.includes(searchText);
    });
  }
}
