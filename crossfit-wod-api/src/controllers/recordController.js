import recordService from "../services/recordService.js";

const getRecordForWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req;

  try {
    const record = recordService.getRecordForWorkout(workoutId);
    res.send({ status: "ok", data: record });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const recordController = {
  getRecordForWorkout,
};

export default recordController;
