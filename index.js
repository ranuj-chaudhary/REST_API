// STEP 1ST INSTALL NODE JS
// STEP 2ND INSTALL EXPRESS JS
// STEP 3RD SET MIDDLEWARE bodyparse.json()
// STEP 4th LISTEN TO PORT TO START SERVER
// STEP 5th INSTALL nodemon to run server on any change


// ADDITIONAL TOOL FOR BROWSER TO INSTALL
import express from "express";
import bodyParser from "body-parser";

// when we import default we can name them anything
import usersRoute from "./basics layers/routes/users.js";

// set up express
const app = express();
const PORT = 5000;

// apply body parser middleware so we will be using json data in whole app
app.use(bodyParser.json());

// ROUTES

// all routes here starting with /users
app.use("/users", usersRoute);

app.get("/", (req, res) => {
  res.send("this is the response");
});

// LISTEN APP AT APORT 5000
app.listen(PORT, function () {
  console.log(`Server is running... http://localhost:${PORT}`);
});
