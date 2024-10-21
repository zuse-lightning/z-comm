import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://www.zusetestinggrounds.com/api/"
});