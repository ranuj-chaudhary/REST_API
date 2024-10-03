import express from "express";
import bodyParser from "body-parser";

import v1WorkoutRouter from "./v1/routes/workoutRoutes.js";
// set up express
const app = express();

const PORT = process.env.PORT || 3000;

// apply body parser middleware so we will be using json data in whole app
app.use(bodyParser.json());

// FOR TESTING PURSPOSES
app.get("/", (req, res) => {
  res.send("<h2>It's working...</h2>");
});

// base url app/v1
// app.use("/api/v1", v1Router);

// workouts api/v1
app.use("/api/v1/workouts", v1WorkoutRouter);

// LISTEN TO PORT
app.listen(PORT, () => {
  console.log(`API is listening to port ${PORT}`);
});
