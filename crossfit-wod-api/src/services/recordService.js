import Record from "../database/Record.js"

const getRecordForWorkout = (workoutId) => {
  try {
    const record = Record.getRecordForWorkout(workoutId);
    return record;
  } catch (error) {
    throw error;
  }
};
const recordService = {
    getRecordForWorkout
}
export default recordService;