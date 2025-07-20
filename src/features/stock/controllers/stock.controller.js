import fetchStockData from "../services/stock.service.js";

export const getAllStocks = async (req, res) => {

   const symbols = ['AAPL', 'GOOG', 'AMZN', 'MSFT', 'TSLA', 'META', 'NVDA', 'BRK.B', 'JNJ', 'UNH']; // example set : Giants

   try {
      const results = await Promise.all(
        symbols.map((symbol) => fetchStockData(symbol))
      );
      res.json(results);
   } catch (error) {
      console.error('Error fetching stock data:', error);
      res.status(500).json({ error: 'Failed to fetch stock data' });
   }
}

export const fetchDefinedStockData = async (req, res) => {
    const symbol = req.params.symbol;
    try {
        const stockData = await fetchStockData(symbol);
        res.json(stockData);
    } catch (error) {
        console.error('Error fetching stock data:', error);
        res.status(500).json({ error: 'Failed to fetch stock data' });
    }
}