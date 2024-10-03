// SERVICE LAYER

//database import
import Workout from "../database/Workout.js";

const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts();
  return allWorkouts;
};
const getOneWorkout = () => {
  return;
};
const createNewWorkout = () => {
  return;
};
const udateOneWorkout = () => {};
const deleteOneWorkout = () => {};

const workoutService = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  udateOneWorkout,
  deleteOneWorkout,
};

export default workoutService;
