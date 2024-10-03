import express from "express";
import workoutController from "../../controllers/workoutController.js";


// create express router
const router = express.Router();



router.get("/", workoutController.getAllWorkouts);

router.get("/:workoutId", workoutController.getOneWokout);

router.post("/", workoutController.createNewWorkout);

router.patch("/:workoutId", workoutController.updateOneWorkout);

router.delete("/:workoutId", workoutController.deleteOneWorkout);


export default router;
