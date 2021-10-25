import {Component, Input, OnInit} from '@angular/core';
import {Workout} from "../../../../models/workout.model";

@Component({
  selector: 'workout-short',
  templateUrl: './workout-short-view.component.html',
  styleUrls: ['./workout-short-view.component.css']
})
export class WorkoutShortViewComponent implements OnInit {

  @Input() workout!: Workout;

  constructor() { }

  ngOnInit(): void {
  }

}
