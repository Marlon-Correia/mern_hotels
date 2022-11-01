import express from "express";
import {
  updateUser,
  deleteUser,
  getAllUsers,
  getUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauth", verifyToken, (req, res, next) => {
  res.send("Hello User, you are logged in");
});
router.get("/checkauth/:id", verifyUser, (req, res, next) => {
  res.send("Hello User, you are logged in and you can delete your account");
});
router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("Hello admin, you are logged in and you can delete your account");
});

router.get("/", getAllUsers);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
