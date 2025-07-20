import fetchStockData from "../services/stock.service.js";

// All stocks
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

// getting stock by symbol
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

// comparing stocks
export const compareStocks = async (req, res) => {
    try {
        const { stock1, stock2 } = req.query;

        console.log('Symbols:', stock1, stock2); // ✅ debug


        if (!stock1 || !stock2) {
            return res.status(400).json({ error: 'Both stock symbols are required' });
        }

        const [data1, data2] = await Promise.all([
            fetchStockData(stock1.toUpperCase()),
            fetchStockData(stock2.toUpperCase())
        ])

        res.json({ comparison: [data1, data2] });
    } catch (error) {
        console.error('Error comparing stocks:', error);
        res.status(500).json({ error: 'Failed to compare stocks' }); 
    }
}