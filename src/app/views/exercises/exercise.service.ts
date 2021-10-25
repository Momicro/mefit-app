import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Exercise } from "../../models/exercise.model";
import {Observable} from "rxjs";
import {Program} from "../../models/program.model";
import {Musclegroup} from "../../models/musclegroup.model";
import {MuscleGroupService} from "../../services/muscle-group.service";

@Injectable({
    providedIn: 'root'
})
export class ExerciseService {
    public _exerciseList: Exercise[] = [];
    private _error: string = '';


  private rootURL: string = 'http://localhost:8080/api/v1/exercises';
  private _exerciseMusclegroups= new Set();

    constructor(private readonly http: HttpClient,
                readonly musclegroupService: MuscleGroupService)
    {
    }

    public error(): string {
        return this._error;
    }

  private fetchExerciseList: Observable<Exercise[]> =
    this.http.get<Exercise[]>(this.rootURL)


  //subscriber for the exerciselist observable
  getExerciseList():void {
    this.fetchExerciseList
      .subscribe((exerciseList: Exercise[]) => {this._exerciseList = exerciseList},
        (error: HttpErrorResponse) => {
          this._error = error.message;
        },
        () =>{})
  }

  getExerciseMusclegroups():Musclegroup[] {
      return this.musclegroupService._musclegroupList
  }

  Musclegroups(exercise: Exercise) {
    let i: string[] = exercise.muscleGroup.split("/");
    let j: string = i[i.length - 1]

    let exerciseMusclegroups = this.musclegroupService._musclegroupList.filter(item => item.id == j)[0]

    console.log(j);
    console.log(exerciseMusclegroups)
    console.log(this.musclegroupService._musclegroupList)
    return exerciseMusclegroups
  }


}
