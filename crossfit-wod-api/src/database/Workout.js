// DATABSE LAYER
import DB from "./db.json" with { type: "json"};

const getAllWorkouts = () => {
  return DB.workouts;
};

const Workout = {
  getAllWorkouts,
};

export default Workout;
