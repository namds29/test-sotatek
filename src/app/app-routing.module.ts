import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddScreenComponent } from './add-screen/add-screen.component';
import { MainScreenComponent } from './main-screen/main-screen.component';

const routes: Routes = [
  { path: '', component: MainScreenComponent },
  { path: 'add', component: AddScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
