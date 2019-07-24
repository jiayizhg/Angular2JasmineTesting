import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task';
import { Router } from '@angular/router';


@Component({
    selector: 'task-list',
    templateUrl: './taskList.component.html',
    styleUrls: ['./taskList.component.css']
})
export class TaskListComponent implements OnInit{
    task = new Task();
    statusMessage: string;
    tasks: Task[];
    constructor(private taskService: TaskService,
                private _router: Router){}
    
    ngOnInit(): void {
        console.log("calling ngOnInit()::::");
        this.getTasks();
    }

    getTasks(): void{
        console.log("Inside getTasks():::::")
        this.taskService.getAllTasks()
            .subscribe((taskData) => this.tasks = taskData,
            (error) =>{
                console.log(error);
                this.statusMessage = "Problem with service. Please try again later!";
            }
        );
        console.log("end of getTasks():::::");
    }
}