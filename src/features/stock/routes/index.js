import express from "express";
import allStockRoutes from "./allStock.routes.js";
import definedStockRoutes from "./definedStock.routes.js";
import compareStockRoutes from "./compareStock.routes.js";

const router = express.Router();

router.use("/all", allStockRoutes);
router.use("/", definedStockRoutes);
router.use("/compare", compareStockRoutes);

export default router;