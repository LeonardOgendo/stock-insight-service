import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://stock-price-checker-proxy.freecodecamp.rocks/v1/stock/',
    timeout: 5000
});

export default axiosClient;