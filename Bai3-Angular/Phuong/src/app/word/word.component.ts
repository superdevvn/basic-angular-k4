import { Component, style, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


// 1 số thông tin quan trong trong comment
@Component({
    templateUrl: './word.component.html',
    selector: 'app-word',
    styleUrls:['./word.component.css']
})

export class WordComponent  implements OnInit {
    // en ='Hello ';
    // vn = 'Xin chào';
    // imageUrl ='https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
    // forgot = false;
    // toggleForgot(){
    //     this.forgot = !this.forgot;
    // }
    newEn = '';
    newVn = '';
    arrWords =[
        { id: 1, en: 'action' , vn: 'hành động', memorized:true},
        { id: 2, en: 'actor' , vn: 'diễn viên', memorized:false}
    ];
    constructor(){}

    ngOnInit(){
    }
    addWord() {
        this.arrWords.unshift({
            id: this.arrWords.length + 1,
            en: this.newEn,
            vn: this.newVn,
            memorized: false
        });
        this.newEn ='';
        this.newVn ='';
    }
}