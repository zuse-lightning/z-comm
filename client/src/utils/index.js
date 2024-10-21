import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://zuse-testing-grounds-3ca8bc72f89d.herokuapp.com/api/"
});