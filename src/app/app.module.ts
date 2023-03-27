import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { NewsComponent } from './Components/news/news.component';
import { FormComponent } from './Components/form/form.component';
import { SearchComponent } from './Components/search/search.component';
import { TodoListComponent } from './Components/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    FormComponent,
    SearchComponent,
    TodoListComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
