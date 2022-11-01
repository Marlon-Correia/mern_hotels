import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Ora pois malta v3");
});

export default router;
