import {Component, OnInit} from '@angular/core';

import {Contact, ContactService} from  './contact.service';
import {UserService} from '../user.service';
import {stringifyElement} from "@angular/platform-browser/testing/browser_util";


@Component({
    moduleId: module.id,
    selector: 'app-contact',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.css']
})

export class ContactComponent implements OnInit {
    contact: Contact;
    contacts: Contact[];

    msg = 'Loading contacts...';
    userName = '';

    constructor(private contactService: ContactService, userService: UserService) {
        this.userName = userService.userName;
    }

    ngOnInit() {
        this.contactService.getContactsSlowly().then(
            contacts => {
                this.msg = '';
                this.contacts = contacts;
                this.contact = contacts[0];
            }
        );

        // //ES 6
        //
        // //1. 箭头操作符
        // var array = [1, 2, 3];
        // array.forEach(v => console.log(v));
        //
        // //2.类的支持
        // class Animal {
        //     constructor(name) {
        //         //this.name = name;
        //     }
        //
        //     sayName() {
        //         //console.log(`My name is ${this.name}`);
        //     }
        // }
        //
        // class Programmer extends Animal {
        //     constructor(name) {
        //         super(name);
        //     }
        //
        //     program() {
        //         console.log('I am coding.');
        //     }
        // }
        //
        // let animal = new Animal('Monkey');
        // let programmer = new Programmer('Lily');
        //
        // animal.sayName();
        // programmer.sayName();
        // programmer.program();
        //
        // //3.增强的对象字面量
        // var human = {
        //     breathe(){
        //         console.log('breathing...');
        //     }
        // };
        //
        // var worker = {
        //     __proto__: human, //-----------------------------------规范吗？？？？
        //     name: 'Bill Gates',
        //     work(){
        //         console.log('working....')
        //     }
        // }
        //
        // human.breathe();
        // //noinspection TypeScriptUnresolvedFunction
        // worker.breathe();
        // worker.work();
        //
        // //4.字符串模板
        // let num = Math.random();
        // console.log(`The random number is ${num}`);
        //
        // //5.解构
        // let [x,y]=getVal(),//函数返回值的解构
        //     [name,,age]=['wayou', 'male', 'secrect'];//数组解构
        //
        // function getVal() {
        //     return [1, 2];
        // }
        //
        // console.log('x: ' + x + 'y: ' + y);
        // console.log('name is ' + name + ' age is ' + age);
        //
        // //6.参数默认值，不定参数，拓展参数
        // //默认参数值
        // function sayHello(name) {
        //     var name = name || '';
        //     console.log('Hello ' + name);
        // }
        //
        // function sayHello2(name = 'doube') {
        //
        //     console.log('Hello ' + name);
        //     console.log(`Hello ${name}`);
        // }
        //
        // sayHello('');
        // sayHello('Bill');
        // sayHello2();
        // sayHello2('Bill');
        // //不定参数:不定参数的格式是三个句点后跟代表所有不定参数的变量名。
        // function add(...x) {
        //     return x.reduce((m, n) =>m + n);
        // }
        //
        // console.log(add(1, 2, 3, 4));
        // console.log(add(1, 2, 3, 4, 5, 6));
        //
        // //拓展参数：另一种形式的语法糖，允许传递数组或者类数组直接作为函数的参数而不用通过apply.
        //
        // let people = ['Bill', 'Jack'];
        //
        // function sayPeopleHello(people1, people2) {
        //     console.log(`Hello ${people1}, ${people2}`);
        // }
        //
        // sayPeopleHello(...people);
        //
        // //7.let与const关键字
        // for (let i = 0; i < 3; i++) {
        //     console.log(i);
        // }
        //
        // //8.值遍历 for of 输出的是值, for in 输出的是序号
        // var someArray = ['a', 'sss', 'dssa', 'dd'];
        //
        // for (let arr of someArray) {
        //     console.log(arr);
        // }
        //
        // for (let arr in someArray) {
        //     console.log(arr);
        // }
        //
        // for(let [key,value] in someArray){
        //     console.log(`key is ${key}, value is ${value}`);
        // }
        //
        // // var a=[];
        // // for(let i=0; i<10; i++){
        // //     a[i]=function () {
        // //         console.log(i);
        // //     }
        // // }
        // // a[6]();
        //
        // {
        //     let str='hello world';
        //     {
        //         let str='hello 1';
        //         console.log(str);
        //     }
        //     console.log(str);
        // }
        //
        // console.log(someArray.entries());
        // console.log(["a", "b", "c"].keys());
        // console.log(someArray.values());
        // console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].copyWithin(3, 0)); // [1, 2, 3, 1, 2, 3, 7, 8, 9])


    }

    onSubmit() {
        this.displayMessage('Saved ' + this.contact.name);

        console.log(this.contacts);
    }

    newContact() {
        this.displayMessage('New contact');

        if (this.contacts.length) {
            this.contact = {id: this.contacts[this.contacts.length - 1].id + 1, name: ''};
        } else {
            this.contact = {id: 1, name: ''};
        }

        this.contacts.push(this.contact);
        console.log(this.contacts);
    }

    displayMessage(msg: string) {
        this.msg = msg;
        setTimeout(() => this.msg = '', 1500);
    }

    next() {
        let ix = this.contacts.indexOf(this.contact) + 1;
        if (ix > this.contacts.length) {
            ix = 0;
        }
        this.contact = this.contacts[ix];
        console.log(this.contacts);
    }

}