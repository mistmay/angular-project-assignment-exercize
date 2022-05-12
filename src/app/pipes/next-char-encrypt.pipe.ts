import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nextCharEncrypt'
})
export class NextCharEncryptPipe implements PipeTransform {

  transform(value: string, enabled: boolean): string {
    if (!enabled) {
      return value;
    } else {
      const result: string[] = [];
      value.split('').forEach((element: string) => {
        if (element === ' ') {
          result.push(element);
        } else {
          result.push(String.fromCharCode(element.charCodeAt(0) + 1));
        }
      });
      return result.join('');
    }
  }

}
