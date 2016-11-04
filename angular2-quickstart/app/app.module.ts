import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent}   from './app.component';
import {HighlightDirective} from './highlight.directive';
import {UserService} from './user.service';
import {ContactComponent} from './contact/contact.component';
import {ContactService} from './contact/contact.service';
import {AwesomePipe} from './contact/awesome.pipe';

//import {HighlightDirective as ContactHighlighDirective} from './contact/highlight.directive';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, HighlightDirective, AwesomePipe, ContactComponent],
    providers:[ContactService, UserService],
    bootstrap: [AppComponent]
})

export class AppModule {
}