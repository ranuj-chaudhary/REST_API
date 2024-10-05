import express from "express";
import bodyParser from "body-parser";
import apicache from "apicache";
import v1WorkoutRouter from "./v1/routes/workoutRoutes.js";
// set up express
const app = express();

const PORT = process.env.PORT || 3000;

// apply body parser middleware so we will be using json data in whole app
app.use(bodyParser.json());

// cache
// cache with apicache
const cache = apicache.middleware

app.use(cache('2 minutes'))

// FOR TESTING PURPOSES
app.get("/", (req, res) => {
  res.send("<h2>It's working...</h2>");
});

// Workouts api/v1
app.use("/api/v1/workouts", v1WorkoutRouter);

// Listen to Port
app.listen(PORT, () => {
  console.log(`API is listening to port ${PORT}`);
});
