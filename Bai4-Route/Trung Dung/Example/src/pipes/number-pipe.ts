import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'myNumber'})
export class NumberPipe implements PipeTransform {
    transform(value: string, ...args: any[]) {
        return `${value.substring(1, value.length)} ${args[0]}`;
    }
}
