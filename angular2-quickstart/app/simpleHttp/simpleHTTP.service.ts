import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';


export class Article {
    constructor(public id: number, public userId: number, public title: string, public body: string) {

    }
}

@Injectable()
export class SimpleHTTPService {
    data: Object;

    constructor(public http : Http){

    }

    getArticles() {
        return this.http.request('http://jsonplaceholder.typicode.com/posts')
            .subscribe((res: Response) => {
                this.data=res.json();
            });
    }

}