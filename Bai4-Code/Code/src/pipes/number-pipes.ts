import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'number'})
export class NumberPipe implements PipeTransform{

    transform(value: any,...args: any[]){
        return `${value.substring(1,value.length)} ${args[0]} `;
    }
}