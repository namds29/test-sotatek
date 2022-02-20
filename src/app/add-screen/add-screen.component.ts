import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoListService } from '../service/todo-list-service.service';

@Component({
  selector: 'app-add-screen',
  templateUrl: './add-screen.component.html',
  styleUrls: ['./add-screen.scss'],
})
export class AddScreenComponent implements OnInit {
  date = new Date();
  invalid = false;
  minDate: any;
  formTask = this.fb.group({
    id: [Math.random() * 100],
    title: ['', Validators.required],
    description: [''],
    fromTo: [null],
    priority: [null],
  });
  constructor(
    private datePipe: DatePipe,
    private fb: FormBuilder,
    private todoListService: TodoListService,
    private router: Router
  ) {}

  ngOnInit() {
    this.minDate = this.datePipe.transform(this.date, 'yyyy-MM-dd');
  }
  submit() {
    if (this.formTask.valid) {
      this.todoListService.addTask(this.formTask.value);
      this.router.navigate(['/']);
    } else {
      this.invalid = true;
    }
  }
}
