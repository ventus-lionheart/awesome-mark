import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookmarkComponent } from './components/bookmark/bookmark.component';

@NgModule({
  declarations: [
    AppComponent,
    BookmarkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
