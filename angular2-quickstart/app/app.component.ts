import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>{{dataJson.title}},{{dataJson.age}},{{dataJson.born}},{{dataJson.phone}}</h1>'
    + `<app-contact></app-contact>`
    + `<app-simple-http></app-simple-http>`
})

export class AppComponent {
    dataJson = {
        title: 'Minimal NgModule',
        age: '22',
        born: 'China',
        phone:'15823665478'
    };
}