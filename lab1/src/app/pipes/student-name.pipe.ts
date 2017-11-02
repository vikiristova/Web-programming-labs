import {Pipe, PipeTransform} from '@angular/core';
import {Student} from '../model/student';


@Pipe({
  name: 'studentName'
})
export class StudentNamePipe implements PipeTransform {

  transform(value: Student, args?: any): string {
    return value ? value.ime : '';
  }

}
