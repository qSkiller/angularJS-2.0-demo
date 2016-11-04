import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>{{data.title}},{{data.age}},{{data.born}}</h1>'+`<app-contact></app-contact>`
})

export class AppComponent {
    data = {
        title: 'Minimal NgModule',
        age: '22',
        born: 'China'
    };
}