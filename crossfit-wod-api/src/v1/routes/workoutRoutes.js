import express from "express";
import workoutController from "../../controllers/workoutController.js";
import recordController from "../../controllers/recordController.js";
import apicache from "apicache";
// create express router
const router = express.Router();



// workout routes
router.get("/", workoutController.getAllWorkouts);

router.get("/:workoutId", workoutController.getOneWokout);

router.post("/", workoutController.createNewWorkout);

router.patch("/:workoutId", workoutController.updateOneWorkout);

router.delete("/:workoutId", workoutController.deleteOneWorkout);

// records routes
router.get("/:workoutId/records", recordController.getRecordForWorkout);

// member routes
//  /api/v1/workouts/:workoutId/records/member/memberId
// Solution add memberid and member in database relation i.e record
export default router;
