import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connect } from "./connection.js";

import usersRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import roomsRoutes from "./routes/rooms.js";
import hotelsRoutes from "./routes/hotels.js";

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/users", usersRoutes);
app.use("/rooms", roomsRoutes);
app.use("/hotels", hotelsRoutes);

app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "Algo esta errado";
  return res.status(errStatus).json({
    status: errStatus,
    message: errMessage,
    stack: err.stack,
  });
});

app.listen(5000, () => {
  connect();
  console.log("Servidor rodando");
});
