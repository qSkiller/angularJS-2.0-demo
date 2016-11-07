import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
    selector: 'my-app',
    template: `<h2>Basic request</h2>
    <button type="button" (click)="makeRequest()">Make Request</button>
    <div *ngIf="loading">loading...</div>
    <pre>{{data | json}}</pre>`
    + '<h1>{{dataJson.title}},{{dataJson.age}},{{dataJson.born}}</h1>'
    + `<app-contact></app-contact>`
})

export class AppComponent {
    data: Object;
    loading: boolean;
    dataJson = {
        title: 'Minimal NgModule',
        age: '22',
        born: 'China'
    };

    constructor(public http: Http) {

    }

    makeRequest(): void {
        this.loading = true;
        //http://jsonplaceholder.typicode.com/posts/1
        this.http.request('http://jsonplaceholder.typicode.com/posts')
            .subscribe((res: Response) => {
                this.loading = false;
                this.data = res.json();
                console.log(this.data);
            });
    }
}