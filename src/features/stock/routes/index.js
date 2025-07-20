import express from "express";
import allStockRoutes from "./allStock.routes.js";

const router = express.Router();

router.use("/all", allStockRoutes);

export default router;