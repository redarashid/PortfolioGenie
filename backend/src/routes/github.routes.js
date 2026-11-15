import express from "express";
import {
  getReposController,
  getAnalysisController,
  generateBioController,
} from "../controllers/github.controller.js";

const router = express.Router();

// الـ Endpoints الخاصة بموديولك
router.get("/repos", getReposController);
router.get("/analysis", getAnalysisController);
router.post("/ai/generate-bio", generateBioController);

export default router;
