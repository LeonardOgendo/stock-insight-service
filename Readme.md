## 📈 Stock Insight Service

A lightweight Node.js microservice that fetches and compares real-time stock data using the (freeCodeCamp Proxy)IEX Cloud API. Designed with a clean feature-based structure following SOLID principles, it supports modular endpoints for querying individual stocks, a predefined set of popular stocks, and comparing two stocks side by side.

---

### 🚀 Features

- 🔍 **Fetch Specific Stock** – Get live data by stock symbol  
- 🧾 **Predefined Stocks** – Query a curated list of popular stock symbols  
- ⚖️ **Compare Stocks** – Compare live stats between two symbols  
- ⚙️ **Modular Architecture** – Follows separation of concerns (controllers, services, routes)

---

### 📦 Project Structure

```
src/
├── app.js
├── features
│   └── stock
│       ├── controllers
│       │   └── stock.controller.js
│       ├── routes
│       │   ├── allStock.routes.js
│       │   ├── compareStock.routes.js
│       │   ├── definedStock.routes.js
│       │   └── index.js
│       └── services
│           └── stock.service.js
├── routes.js
├── server.js
└── utils
    └── axios
        └── axiosClient.js
```

---


### API Endpoints

#### 1. **GET `/api/stocks/all`**

Returns data for a predefined set of popular stock symbols.

```json
[
  {
    "symbol": "AAPL",
    "latestPrice": 189.55,
    "changePercent": 0.34
  },
  ...
]
```

#### 2. **GET `/api/stocks/:symbol`**

Returns stock data for a specified symbol.

Example: `/api/stocks/MSFT`

```json
{
  "symbol": "MSFT",
  "latestPrice": 345.22,
  "changePercent": -0.45
}
```

#### 3. **GET `/api/stocks/compare?stock1=AAPL&stock2=GOOG`**

Compares two stocks side-by-side.

```json
{
  "comparison": [
    {
      "symbol": "AAPL",
      "latestPrice": 189.55,
      "changePercent": 0.34
    },
    {
      "symbol": "GOOG",
      "latestPrice": 134.12,
      "changePercent": -0.23
    }
  ]
}
```


---


## ⚙️ Setup

```bash
git clone https://github.com/LeonardOgendo/stock-insight-service.git
cd stock-insight-service
npm install
npm run dev
```

- Ensure that you have a valid stock API client inside:

```bash
utils/axios/axiosClient.js
```

---

## 📌 Notes

- The current project is JSON-only (no frontend)
- Can be extended to include Redis caching, auth middleware, logging, and frontend UI.

 
