import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pluralS'
})
export class PluralSPipe implements PipeTransform {

  transform(value: any): any {
    if (!value) {
      return '0 comments'
    } else {
      return value.length > 1 ? value.length + ' comments' : value.length + ' comment';
    }
  }

}
