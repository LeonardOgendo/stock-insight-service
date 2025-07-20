import express from "express";
import { fetchDefinedStockData } from "../controllers/stock.controller.js";

const router = express.Router();

router.get('/:symbol', fetchDefinedStockData)

export default router;