import workoutService from "../services/workoutService.js";

// Workout Controllers
const getAllWorkouts = (req, res) => {
  const { mode } = req.query;
  try {
    const allWorkouts = workoutService.getAllWorkouts({ mode });
    res.send({ status: "OK", data: allWorkouts });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "OK", data: error?.message || error });
  }
};
const getOneWokout = (req, res) => {
  try {
    const {
      params: { workoutId },
    } = req;

    // return if no id
    if (!workoutId) return;

    // get value from workout service
    const workout = workoutService.getOneWorkout(workoutId);
    return res.send({ status: "OK", data: workout });
  } catch (error) {
    return res.status(error.status || 500).send({message: error.message || error});
  }
  // get value from rountes parameter

  // check if workout exist in database.
  if (workout) {
  } else {
  }
};

const createNewWorkout = (req, res) => {
  // destructure body
  const { body } = req;
  // validation
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    res.status(400).send({ status: "FAIL" });
    return;
  }

  // create new Workout
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };

  // send data to service layer
  const createdWorkout = workoutService.createNewWorkout(newWorkout);

  //@@@@ VALIDATION PENDING FOR CHECHING SUCCESSFULL SUBMISSION OF DATA TO SERVER @@@@
  // response code for data recieved

  res.status(201).send({ status: "OK", data: createdWorkout });
};

const updateOneWorkout = (req, res) => {
  const {
    body,
    params: { workoutId },
  } = req;
  if (!workoutId) {
    return;
  }

  const updatedWorkout = workoutService.updateOneWorkout(workoutId, body);

  if (updatedWorkout) {
    res.send({ status: "OK", data: updatedWorkout });
  } else {
    res.status(400).send({ status: "FAIL" });
  }
};

const deleteOneWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req;
  if (!workoutId) {
    return;
  }
  workoutService.deleteOneWorkout(workoutId);
  res.status(204).send({ status: "OK" });
};

const workoutController = {
  getAllWorkouts,
  getOneWokout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};

export default workoutController;
