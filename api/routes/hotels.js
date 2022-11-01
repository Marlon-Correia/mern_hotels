import express from "express";
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
} from "../controllers/hotels.js";

const router = express.Router();

router.post("/", createHotel);
router.get("/", getAllHotels);
router.get("/:id", getHotel);
router.put("/:id", updateHotel);
router.delete("/:id", deleteHotel);

export default router;
