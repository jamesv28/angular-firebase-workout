import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WorkoutsComponent} from './workouts/workouts.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'training',
    loadChildren: () => import('./training/training.module').then(m => m.TrainingModule), canLoad: [AuthGuard]
  },
  {
    path: 'workouts',
    component: WorkoutsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
