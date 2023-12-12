import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDosComponent } from './to-dos/to-dos.component';
import { FormsModule } from '@angular/forms';
import { TodoActionsService } from './todo-actions.service';

@NgModule({
  declarations: [
    AppComponent,
    ToDosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TodoActionsService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
