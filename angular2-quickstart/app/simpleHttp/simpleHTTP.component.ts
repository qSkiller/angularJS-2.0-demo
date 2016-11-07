import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
    selector:'simple-http',
    template:
        `<h2>Basic request</h2>
        <button type="button" (click)="makeRequest()">Make Resquest</button>
        <div *ngIf="loading">loading...</div>
        <pre>{{data | json}}</pre>`
})

export class SimpleHTTPComponent{
    data:Object;
    loading:boolean;

    constructor(public http: Http){

    }

    makeRequest(): void{
        this.loading=true;
        this.http.request('http://jsonplaceholder.typicode.com/posts/1')
            .subscribe((res: Response) =>{
                this.data=res.json();
                this.loading=false;
            });
    }

}
