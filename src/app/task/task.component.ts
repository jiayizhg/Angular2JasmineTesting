import {Component, OnInit, OnChanges} from '@angular/core';
import {Router} from '@angular/router';
import {TaskService} from './task.service';
import {Task} from './task';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit, OnChanges{

    tasks: Task[];
    statusMessage: string;
    task = new Task();
    
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

    addTask(): void{
        console.log("inside the addTask()::::::")
        this.taskService.addTask(this.task)
            .subscribe((response) => {console.log(response); this.getTasks();this.reset();},
            (error) =>{
                console.log(error);
                this.statusMessage = "Problem with service. Please try again later!";
            }
        );   
        
        console.log("end of addTask()::::");
        //this._router.navigate(['/tasks']);
    }

    private reset(){
        console.log("inside the reset():::::::");
        /*
        this.book.id = null;
        this.book.title = null;
        this.book.author = null;
        */
        console.log("end of reset():::::::");
    }

    ngOnChanges(changes:any) {
        console.log("calling ngOnChanges()::::::::");
    }

    deleteTask(taskId: string){
        console.log("Inside the deleteTask()::::Task id::::"+taskId);
        this.taskService.deleteTask(taskId)
            .subscribe((response) => {console.log(response); this.getTasks();},
            (error) =>{
                console.log(error);
                this.statusMessage = "Problem with service. Please try again later!";
            });
            this.reset();
            console.log("end of deleteTask():::::::");
    }

    getTask(taskId: string){
        console.log("Inside the updateTask()::::::Task id::::"+taskId);
        this.taskService.getTaskById(taskId)
            .subscribe((taskData) => {this.task = taskData; this.getTasks(); }),
            (error) => {
                console.log(error);
                this.statusMessage = "Problem with service. Please try again later!";
            }
        this.reset();    
        console.log("end of updateTask()::::::");
    }
}