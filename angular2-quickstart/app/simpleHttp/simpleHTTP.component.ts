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
    private baseUrl='http://jsonplaceholder.typicode.com';

    constructor(public http: Http) {

    }

    ngOnInit() {
        var jsonStr = '{"name":"leinov","sex":"famle","address":"beijing"}';
        var jsonObj=JSON.parse(jsonStr);
        console.log(typeof jsonObj);
        console.log(jsonObj);

        var student = new Article(1,1,'leinov','famle');
        var jsonStudent=JSON.stringify(student);
        console.log(typeof jsonStudent);
        console.log(jsonStudent);



        this.http.request(`${this.baseUrl}/posts`)
            .subscribe((res: Response) => {
                this.dataShow = false;
                this.data = res.json();
            });

    }

    makeRequest() {
        this.loading = true;
        this.http.request(`${this.baseUrl}/posts`)
            .subscribe((res: Response) => {
                    this.loading = false;
                    this.dataShow = true;
                    this.data = res.json();
                    console.log(this.data);
                }
            );
    }

    searchArticle() {
        this.http.request(`${this.baseUrl}/posts`)
            .subscribe((res: Response) => {
                this.dataShow = false;
                let articlesData=[];
                if(this.keyword){
                    for(let article of res.json()){
                        if(article.title.toLowerCase().indexOf(this.keyword.toLowerCase())>0)
                        {
                            articlesData.push(article);
                        }
                    }
                }else {
                    articlesData=res.json();
                }

                this.data=articlesData;
            });
    }

    deleteArticle() {
        this.http.delete(`${this.baseUrl}/posts` + this.article.id, {headers: this.headers})
            .subscribe(() => {
                this.ngOnInit();
                $(".article-modal-delete").modal("hide");
            });
    }

    putArticle() {
        this.http.put(`${this.baseUrl}/posts` + this.article.id, JSON.stringify(this.article), {headers: this.headers})
            .subscribe((res: Response)=> {
                this.dataShow = false;
                this.data = res.json();
                console.log(res.json());
                $(".article-modal-edit").modal("hide");
            });
    }

    addArticle() {
        let article = {id: this.id, title: this.title, body: this.body};

        this.http.post(`${this.baseUrl}/posts`, JSON.stringify(article), {headers: this.headers})
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
