import DB from "./db.json" with { type: "json"};

/*In your code, you get a error the throw using throw x where x is the exception.
 The caller will get the x as a argument on the catch block. If you or the runtime
  throw an error on catch block, it will be passed to superior scope, in this case,
   the scope who called K function */

const getRecordForWorkout = (workoutId) => {
  try {
    const record = DB.records.filter((record) => record.workout === workoutId);
    if (record.length == 0) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`,
      };
    }
    return record;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};
const Record = { getRecordForWorkout };
export default Record;