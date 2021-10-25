import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { LoginPage } from './login/login.page';
import { AuthGuard } from './auth.guard';
import { DashboardPage } from './dashboard/dashboard.page';

import {ProfileComponent} from "./profile/profile.component";
//import {RegistrationComponent} from "./registration/registration.component";
import {ExercisesComponent} from "./views/exercises/components/exercise-page/exercises.component";
import {WorkoutsComponent} from "./views/workouts/components/workout-page/workouts.component";
import {ProgramsComponent} from "./views/programs/components/program-page/programs.component";

import { AdminPage } from './admin/admin.page';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardPage,
    canActivate: [AuthGuard],
  },
  // {
  //   path: 'login',
  //   component: LoginPage,
  //   canActivate: [AuthGuard],
  // },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'programs',
    component: ProgramsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'workouts',
    component: WorkoutsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'exercises',
    component: ExercisesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "admin",
    component: AdminPage,
    canActivate: [AuthGuard],
    data: { roles: ['Administrator']}
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
