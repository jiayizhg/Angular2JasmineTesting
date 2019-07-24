import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TaskService } from './task/task.service';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task/taskList.component';
import { HomeComponent } from './task/home.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'taskss', component: TaskListComponent },
  { path: 'addTask', component: TaskComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent, TaskComponent, TaskListComponent, HomeComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule,  RouterModule.forRoot(appRoutes)
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }