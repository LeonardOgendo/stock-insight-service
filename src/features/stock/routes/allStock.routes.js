import express from "express";
import { getAllStocks } from "../controllers/stock.controller.js";

const router = express.Router();

// GET /api/stocks/all
router.get("/", getAllStocks);

export default router;