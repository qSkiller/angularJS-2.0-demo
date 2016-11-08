import {Component, OnInit, ViewChild} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'app-simple-http',
    templateUrl: './simpleHTTP.component.html',
    styleUrls: ['./simpleHTTP.component.css']
})

export class SimpleHTTPComponent implements OnInit {
    data: Object;
    loading: boolean;
    dataShow: boolean;
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(public http: Http) {

    }

    ngOnInit() {
        this.http.request('http://jsonplaceholder.typicode.com/posts')
            .subscribe((res: Response) => {
                this.dataShow = false;
                this.data = res.json();
            });

    }

    makeRequest() {
        this.loading = true;
        this.http.request('http://jsonplaceholder.typicode.com/posts')
            .subscribe((res: Response) => {
                    this.loading = false;
                    this.dataShow = true;
                    this.data = res.json();
                    console.log(this.data);
                }
            );
    }

    deleteArticle(item) {
        this.http.delete('http://jsonplaceholder.typicode.com/posts/' + item.id, {headers: this.headers})
            .toPromise()
            .then(
                this.ngOnInit()
            );
    }

    putArticle(item) {
        this.http.put('http://jsonplaceholder.typicode.com/posts/', JSON.stringify(item), {headers: this.headers})
            .subscribe((res: Response)=> {
                this.dataShow = false;
                this.data = res.json();
                console.log(res.json());
            });
    }

    addArticle(item) {
        this.http.post('http://jsonplaceholder.typicode.com/posts/', JSON.stringify(item), {headers: this.headers})
            .toPromise()
            .then(
                this.ngOnInit()
            );
    }

    openModal() {

    }

}
