import express from "express";
import {
  getReposController,
  getAnalysisController,
} from "../controllers/github.controller.js";

const router = express.Router();

router.get("/repos", getReposController);
router.get("/analysis", getAnalysisController);

export default router;
