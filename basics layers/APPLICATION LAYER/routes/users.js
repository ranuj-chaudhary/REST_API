import express from "express";

import {
  createUser,
  getUser,
  updateUser,
  deleteUser,
} from "../APPLICATION LAYER/controller/users";
const router = express.Router();

router.get("/", getUser);



router.post("/", createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;
