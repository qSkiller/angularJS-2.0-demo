import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent}   from './app.component';
import {HighlightDirective} from './highlight.directive';
import {UserService} from './user.service';
import {ContactComponent} from './contact/contact.component';
import {ContactService} from './contact/contact.service';
import {AwesomePipe} from './contact/awesome.pipe';
import {SimpleHTTPComponent} from './simpleHttp/simpleHTTP.component';
import {SimpleHTTPService} from './simpleHttp/simpleHTTP.service';

//import {HighlightDirective as ContactHighlighDirective} from './contact/highlight.directive';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, HighlightDirective, AwesomePipe, ContactComponent, SimpleHTTPComponent],
    providers: [ContactService, UserService, SimpleHTTPService],
    bootstrap: [AppComponent]
})

export class AppModule {
}