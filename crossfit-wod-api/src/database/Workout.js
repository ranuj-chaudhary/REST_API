// DATABASE LAYER
import DB from "./db.json" with { type: "json"};
import saveToDatabase from "./utils.js"

// DATABASE INTERACTION METHODS
const getAllWorkouts = (filterParams) => {
  try {
    let workouts = DB.workouts;
    if (filterParams.mode) {
      return DB.workouts.filter((workout) =>
        workout.mode.toLowerCase().includes(filterParams.mode)
      );
    }
    // Other if-statements will go here for different parameters
    return workouts;
  } catch (error) {
    throw { status: 500, message: error };
  }
};


const createNewWorkout = (newWorkout) => {
 // check if already exist in database
 const isAlreadyAdded = DB.workouts.findIndex(
  (workout) => workout.name === newWorkout.name
) > -1;

  // 
  if (isAlreadyAdded) {
    return
  }
  
    // insert to old data
    DB.workouts.push(newWorkout);
  
    // saved new workout to database
    saveToDatabase(DB);

    return newWorkout
}


const getOneWorkout = (workoutId) => {
  try {
    const workout = DB.workouts.find(workout => workout.id === workoutId)
    if(!workout) {
      throw {status: 400, message: `Can't find workout with the id ${workoutId}'`}
    };
    return workout;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
  

}

const updateOneWorkout = (workoutId, changes) => {
  let indexForUpdate = DB.workouts.findIndex(workout => workout.id === workoutId)

  if(indexForUpdate === -1) return;
  // Updated value
  const updatedWorkout = {
    ...DB.workouts[indexForUpdate],
    ...changes,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" })
  }
  
  DB.workouts[indexForUpdate] = updatedWorkout;

  // Update the value in database
  saveToDatabase(DB)


  return updatedWorkout

}

const deleteOneWorkout  = (workoutId) => {
  const indexForDeletion = DB.workouts.findIndex(
    (workout) => workout.id === workoutId
  );
  if (indexForDeletion === -1) {
    return;
  }
  DB.workouts.splice(indexForDeletion, 1);
  saveToDatabase(DB);
}


const Workout = {
  getAllWorkouts,
  createNewWorkout,
  getOneWorkout,
  updateOneWorkout,
  deleteOneWorkout 
 
};

export default Workout;
