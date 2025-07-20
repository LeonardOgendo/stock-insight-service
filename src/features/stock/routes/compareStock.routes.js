import express from "express";
import { compareStocks } from "../controllers/stock.controller.js";

const router = express.Router();

router.get('', compareStocks)

export default router;