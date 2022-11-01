import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.acess_token;
  if (!token) {
    return next(createError(401, "Você não esta autenticado"));
  }
  jwt.verify(token, process.env.JWT_KEY, (err, user) => {
    if (err) return next(createError(403, "Token inválido"));

    res.json({ message: "a", user: user || "a" });
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user._id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "Você não esta autorizado"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "Você não esta autorizado"));
    }
  });
};
