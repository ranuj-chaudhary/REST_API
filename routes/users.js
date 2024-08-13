import express from "express";
import uniqid from "uniqid";

const router = express.Router();

let user = [];

router.get("/", (req, res) => {
  res.send(user);
});

router.post("/", (req, res) => {
  const newUser = req.body;
  const userWithId = { ...newUser, id: uniqid() };
  user.push(userWithId);
  console.log(userWithId);
  res.send(user);
});

router.put("/:id", (req, res) => {
  const updatedUser = req.body;
  user.forEach((ele) => {
    if (ele.email == updatedUser.email) {
      console.log(ele);
    }
  });
  res.send("USER ADDED SUCCESSFULLY");
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  user = user.filter((item) => item.id != id);
  res.send(user);
});

export default router;
