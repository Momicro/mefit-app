import {Musclegroup} from "./musclegroup.model";

export interface Exercise {
  id: string;
	name: string;
	description: string;
	muscleGroup: string;
	workouts: string[];
	detail: boolean;
}
