import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EditorModule,
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'assets/tinymce/tinymce.min.js' },
    /*
      to load from CDN instead, we can `useValue` a CDN link, and remove the
      `tinymce` library from `package.json`
    */
    // {
    //   provide: TINYMCE_SCRIPT_SRC,
    //   useValue: 'https://cdn.jsdelivr.net/npm/tinymce@5.8.1/tinymce.min.js',
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
