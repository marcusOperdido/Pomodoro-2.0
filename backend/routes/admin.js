
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Área admin");
});

export default router;