import stockRoutes from "./features/stock/routes/index.js";

export const registerRoutes = (app) => {
    app.use("/api/stocks", stockRoutes);
}