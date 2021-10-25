import {DashboardService} from "../services/dashboard.service";
import {ExerciseService} from "../views/exercises/exercise.service";

import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component'
import { BaseComponent } from '../base/base.component';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { StoreService } from '../services/store.service';
import {Exercise} from "../models/exercise.model";
import {MuscleGroupService} from "../services/muscle-group.service";

@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.page.html',
  styleUrls: ['./Dashboard.page.css']
})
export class DashboardPage extends BaseComponent implements OnInit {
  private _exerciseList!: Exercise[];

  constructor(public readonly router: Router, public readonly authService: AuthService,
              private readonly dashboardService: DashboardService,
              private readonly exerciseService: ExerciseService,
              private readonly musclegroupService: MuscleGroupService) {
    super(router, authService);
  }


  ngOnInit(): void{
    this.exerciseService.getExerciseList()
    this.musclegroupService.getMusclegroupsList()
  }

  //Getter
  public get calendarArray() {
    return this.dashboardService.getCalendarDateArray()
  }

  public get currentDate() {
    return this.dashboardService.currentDate;
  }

  get exerciseList(): Exercise[] {
    this.exerciseService.getExerciseList()
    return this._exerciseList
  }

}
