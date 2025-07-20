import axiosClient from "../../../utils/axios/axiosClient.js";

const fetchStockData = async (symbol) => {
    const response = await axiosClient.get(`${symbol}/quote`);

    return {
        symbol: response.data.symbol,
        latestPrice: response.data.latestPrice,
        changePercent: response.data.changePercent
    }
};

export default fetchStockData;