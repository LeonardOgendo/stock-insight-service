import express from "express";
import allStockRoutes from "./allStock.routes.js";
import definedStockRoutes from "./definedStock.routes.js";

const router = express.Router();

router.use("/all", allStockRoutes);
router.use("/", definedStockRoutes);

export default router;