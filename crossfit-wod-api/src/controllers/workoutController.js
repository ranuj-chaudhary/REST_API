import workoutService from "../services/workoutService.js";

const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send({ status: "OK", data: allWorkouts});
};
const getOneWokout = (req, res) => {
  const workout = workoutService.getOneWorkout();
  res.send("Get and existing workout by id.");
};

const createNewWorkout = (req, res) => {
  const createdWorkout = workoutService.createNewWorkout();
  res.send("Create a new workout.");
};

const updateOneWorkout = (req, res) => {
  const updatedWorkout = workoutService.updateOneWorkout();
  res.send("update an exiting workout.");
};

const deleteOneWorkout = (req, res) => {
  const deleteWorkout = workoutService.deleteOneWorkout();
  res.send("Delete and existing workout.");
};

const workoutController = {
  getAllWorkouts,
  getOneWokout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};

export default workoutController;
