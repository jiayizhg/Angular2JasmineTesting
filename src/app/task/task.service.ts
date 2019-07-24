import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Task } from './task';

@Injectable()
export class TaskService{
    
    constructor(private _httpService: Http){}

    getAllTasks(): Observable<Task[]>{
        console.log("inside the service getAllTasks():::::::");
        return this._httpService.get("http://localhost:8080/api/task")
                .map((response: Response) => response.json())
                .catch(this.handleError);
    }

    getTaskById(taskId: string): Observable<Task>{
        console.log("Inside the getTaskById() service::::::");
        return this._httpService.get("http://localhost:8080/api/task/"+taskId)
                .map((response: Response) => response.json())
                .catch(this.handleError);
    }

    addTask(task: Task){
        let body = JSON.parse(JSON.stringify(task));
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        if(task.taskId){    
            console.log("Inside addTask update service():::::::");
            return this._httpService.put("http://localhost:8080/api/task/"+task.taskId, body, options);
        }else{
            console.log("Inside addTask add service():::::::");
            return this._httpService.post("http://localhost:8080/api/task", body, options);
        }
    }

    deleteTask(taskId: string){
        console.log("Inside the service deleteTask():::::Task id:::"+taskId);
        return this._httpService.delete("http://localhost:8080/api/task/"+taskId);
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error);
    }
}