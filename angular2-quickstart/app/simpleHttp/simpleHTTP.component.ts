import {Component, OnInit} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

import {Article} from './simpleHTTP.service';
declare var $: any;
declare var module: {id: string};

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
    article: Article;
    id: number;
    title: string;
    body: string;
    keyword:string;
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

    searchArticle() {
        this.http.request('http://jsonplaceholder.typicode.com/posts')
            .subscribe((res: Response) => {
                this.dataShow = false;
                let articlesData=[];
                for(let article of res.json()){
                    if(article.title.toLowerCase().indexOf(this.keyword.toLowerCase())>0)
                    {
                        articlesData.push(article);
                    }
                }

                this.data=articlesData;
            });
    }

    deleteArticle() {
        this.http.delete('http://jsonplaceholder.typicode.com/posts/' + this.article.id, {headers: this.headers})
            .subscribe(() => {
                this.ngOnInit();
                $(".article-modal-delete").modal("hide");
            });
    }

    putArticle() {
        this.http.put('http://jsonplaceholder.typicode.com/posts/' + this.article.id, JSON.stringify(this.article), {headers: this.headers})
            .subscribe((res: Response)=> {
                this.dataShow = false;
                this.data = res.json();
                console.log(res.json());
                $(".article-modal-edit").modal("hide");
            });
    }

    addArticle() {
        let article = {id: this.id, title: this.title, body: this.body};

        this.http.post('http://jsonplaceholder.typicode.com/posts/', JSON.stringify(article), {headers: this.headers})
            .subscribe(() => {
                this.ngOnInit();
                $(".article-modal").modal("hide");
            });
    }

    showArticleModal(item: Article) {
        if (item) {
            this.article = item;
            $(".article-modal-edit").modal("show");
        }
        else {
            $(".article-modal").modal("show");
        }
    }

    showDeleteModal(item: Article) {
        if (item) {
            $(".article-modal-delete").modal("show");
            this.article = item;
        }
    }
}
