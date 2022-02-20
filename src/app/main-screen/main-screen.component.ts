import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import ITask from '../ITask';
import { TodoListService } from '../service/todo-list-service.service';
@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.scss'],
})
export class MainScreenComponent implements OnInit {
  date = new Date();
  invalid = false;
  minDate: any;
  show?: number;
  editTaskForm = this.fb.group({
    id: [''],
    title: [''],
    description: [''],
    fromTo: [''],
    priority: [''],
  });
  search?: string;
  constructor(
    private todoListService: TodoListService,
    private datePipe: DatePipe,
    private fb: FormBuilder
  ) {}
  listTask: ITask[] = [];
  ngOnInit() {
    this.minDate = this.datePipe.transform(this.date, 'yyyy-MM-dd');
    this.getListTask();
  }
  getListTask() {
    this.listTask = this.todoListService.getListTask();
  }
  deleteTask(id: any) {
    this.listTask = this.todoListService.deleteTask(id);
  }
  showUpdate(data: any, index: number) {
    this.show === index ? (this.show = -1) : (this.show = index);
    this.editTaskForm.controls.id.setValue(data.id);
    this.editTaskForm.controls.title.setValue(data.title);
    this.editTaskForm.controls.description.setValue(data.description);
    this.editTaskForm.controls.fromTo.setValue(data.fromTo);
    this.editTaskForm.controls.priority.setValue(data.priority);
  }
  updateItem() {
    this.todoListService.updateTask(this.editTaskForm.value);
  }
}
