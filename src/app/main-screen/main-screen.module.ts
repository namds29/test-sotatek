import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchPipe } from '../search.pipe';
import { MainScreenComponent } from './main-screen.component';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  declarations: [MainScreenComponent, SearchPipe],
  exports: [MainScreenComponent],
})
export class MainScreenModule {}
