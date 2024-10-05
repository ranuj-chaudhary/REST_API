import Workout from "../database/Workout.js";
import { v4 as uuid } from "uuid";
// SERVICE LAYER

/*

Inside our service methods we'll be handling our business logic like 
transforming data structures and communicating with our Database Layer.

*/

const getAllWorkouts = (filterParams) => {
  try {
    const allWorkouts = Workout.getAllWorkouts(filterParams);
    return allWorkouts;
  } catch (error) {
    throw error;
  }
};

// Get workout by Id
const getOneWorkout = (workoutId) => {
  const workout = Workout.getOneWorkout(workoutId);
  return workout;
};

// Create New Workout
const createNewWorkout = (newWorkout) => {
  // modify the datastructure in service layer only
  const workoutToInsert = {
    id: uuid(),
    ...newWorkout,
    updatedAt: new Date().toLocaleString("en-IN", { timeZone: "IST" }),
    createdAt: new Date().toLocaleString("en-IN", { timeZone: "IST" }),
  };

  // get data after confirmation from database server
  const createdWorkout = Workout.createNewWorkout(workoutToInsert);

  // return created workout;
  return workoutToInsert;
};

// Update Workout by id
const updateOneWorkout = (workoutId, body) => {
  const workout = Workout.updateOneWorkout(workoutId, body);

  return workout;
};

// Delete workout by id
const deleteOneWorkout = (workoutId) => {
  Workout.deleteOneWorkout(workoutId);
};

const workoutService = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};

export default workoutService;
