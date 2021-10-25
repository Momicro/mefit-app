import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../../../../base/base.component';
import { AuthService } from '../../../../services/auth.service';
import { ExerciseService } from '../../exercise.service';
import {Exercise} from "../../../../models/exercise.model";
import {Musclegroup} from "../../../../models/musclegroup.model";
import {MuscleGroupService} from "../../../../services/muscle-group.service";

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent extends BaseComponent implements OnInit {
  private _filteredExerciseList: Exercise[] = [];

  constructor(public readonly router: Router, public readonly authService: AuthService,
              private readonly exerciseService: ExerciseService,
              private readonly musclegroupService: MuscleGroupService) {
    super(router, authService);
  }

  ngOnInit(): void {
    this.exerciseService.getExerciseList()
  }

  //TODO function to create the sorted exerciseList
  sortByMusclegroup(event: any) {
    let musclegroup = event.target.innerHTML
    if(musclegroup == "all") {
      this._filteredExerciseList = this.exerciseList
    } else {
      this._filteredExerciseList = this.exerciseList.filter(item =>
        this.musclegroupService.MusclegroupById(
          //TODO write function to separate the code: It takes the exercise musclegroup path and cuts the id off to pass it to the musclegroupById function
          item.muscleGroup
            .substr(item.muscleGroup.lastIndexOf('/') + 1,
          item.muscleGroup.length- (item.muscleGroup.lastIndexOf('/')+1))
        ).name === musclegroup)
    }
  }

  //Getter and Setter
  get filteredExerciseList():Exercise[] {
    //needed so there will be content at first loading
    if(this._filteredExerciseList.length == 0) {
      this._filteredExerciseList = this.exerciseList
    }
    return this._filteredExerciseList
  }

  get exerciseList():Exercise[] {
    return this.exerciseService._exerciseList
  }

  get exerciseMusclegroup(): Musclegroup[] {
    return this.exerciseService.getExerciseMusclegroups()
  }


}
