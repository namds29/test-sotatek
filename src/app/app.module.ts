import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AddScreenComponent } from './add-screen/add-screen.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainScreenModule } from './main-screen/main-screen.module';
import { TodoListService } from './service/todo-list-service.service';
@NgModule({
  declarations: [AppComponent, AddScreenComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainScreenModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [DatePipe, TodoListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
