import { Injectable } from '@angular/core';
import ITask from '../ITask';
@Injectable()
export class TodoListService {
  listTask: ITask[] = [];
  constructor() {}
  addTask(item: ITask) {
    this.listTask.push(item);
    localStorage.setItem('list-content', JSON.stringify(this.listTask));
  }
  getListTask() {
    return (this.listTask = JSON.parse(
      localStorage.getItem('list-content') || '{}'
    ));
  }
  deleteTask(id: number) {
    this.listTask = this.listTask.filter((res: any) => res.id !== id);
    localStorage.setItem('list-content', JSON.stringify(this.listTask));
    return this.listTask;
  }
  updateTask(data: ITask) {
    const objIndex = this.listTask.findIndex((item) => item.id == data.id);
    this.listTask[objIndex] = data;
    localStorage.setItem('list-content', JSON.stringify(this.listTask));
  }
}
