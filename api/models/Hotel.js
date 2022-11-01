import mongoose, { Schema, model } from "mongoose";

const hotelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  desc: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [String],
  },
  title: {
    type: String,
    required: true,
  },
  cheapestPrice: {
    type: Number,
  },
  featured: {
    type: Boolean,
    required: false,
  },
});
export default model("Hotel", hotelSchema);
