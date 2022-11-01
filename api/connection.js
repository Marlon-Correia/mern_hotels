import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Conectado ao mongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () =>
  console.log("mongoDB disconnected")
);
mongoose.connection.on("connected", () => console.log("mongoDB connected"));
