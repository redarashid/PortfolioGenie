import express from "express";
import { generateBioController } from "../controllers/github.controller.js";

const router = express.Router();

router.post("/generate-bio", generateBioController);

export default router;
