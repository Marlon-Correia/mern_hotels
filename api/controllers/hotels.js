import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

export const getHotel = async (req, res, next) => {
  const { id } = req.params;

  try {
    const hotel = await Hotel.findById(id);
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createHotel = async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    await newHotel.save();
    res.status(201).json(newHotel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateHotel = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(202).json(updatedHotel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteHotel = async (req, res) => {
  const { id } = req.params;
  try {
    await Hotel.findOneAndDelete(id);
    res.status(202).json({ message: "Hotel has been deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
