'use strict';
const axios = require('axios');
const Stock = require('../models/Stock');

module.exports = function (app) {
  app.route('/api/stock-prices')
    .get(async function (req, res) {
      const { stock, like } = req.query;
      const ip = req.ip;

      // Normalize stock symbols to uppercase
      const stocks = Array.isArray(stock) ? stock.map(s => s.toUpperCase()) : [stock.toUpperCase()];
      const likeFlag = like === 'true';

      try {
        const stockDataPromises = stocks.map(async (symbol) => {
          // 1. Fetch real-time price
          const response = await axios.get(`https://stock-price-checker-proxy.freecodecamp.rocks/v1/stock/${symbol}/quote`);
          const price = response.data.latestPrice;

          // 2. Find or create stock record in DB
          let stockDoc = await Stock.findOne({ symbol });

          if (!stockDoc) {
            stockDoc = new Stock({ symbol, ips: [] });
          }

          // 3. Handle liking by IP
          if (likeFlag && !stockDoc.ips.includes(ip)) {
            stockDoc.ips.push(ip);
            await stockDoc.save();
          }

          return {
            stock: symbol,
            price,
            likes: stockDoc.ips.length
          };
        });

        const stockResults = await Promise.all(stockDataPromises);

        // 4. If comparing two stocks, compute rel_likes
        if (stockResults.length === 2) {
          const [stock1, stock2] = stockResults;
          const relLikes1 = stock1.likes - stock2.likes;
          const relLikes2 = stock2.likes - stock1.likes;

          return res.json({
            stockData: [
              { stock: stock1.stock, price: stock1.price, rel_likes: relLikes1 },
              { stock: stock2.stock, price: stock2.price, rel_likes: relLikes2 },
            ]
          });
        }

        // 5. Return single stock result
        return res.json({ stockData: stockResults[0] });

      } catch (err) {
        console.error(err.message);
        return res.status(500).json({ error: 'Stock fetch or DB error' });
      }
    });
};
