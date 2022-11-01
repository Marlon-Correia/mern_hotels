import User from "../models/User.js";
import bcrypr from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { createError } from "../utils/error.js";
dotenv.config();

export const register = async (req, res, next) => {
  const salt = bcrypr.genSaltSync(10);
  const hash = bcrypr.hashSync(req.body.password, salt);
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.status(201).json({ message: "User has been created" });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found"));

    const isPass = await bcrypr.compare(req.body.password, user.password);
    if (!isPass) return next(createError(400, "Wrong password or username"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_KEY
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("acess_token", token, { httpOnly: true })
      .status(200)
      .json({ ...otherDetails });
  } catch (error) {
    next(error);
  }
};
