import express from "express";
import cors from "cors";
import helmet from "helmet";
// استيراد مسارات جيت هب بطريقة الـ import الحديثة
import githubRoutes from "./routes/github.routes.js";

const app = express();

// Security middleware
app.use(helmet());

// CORS configuration
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

// Parse JSON requests
app.use(express.json());

// Health Check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "PortfolioGenie API is running",
  });
});

// استخدام المسارات تحت البادئة /api/github
app.use("/api/github", githubRoutes);

export default app;
