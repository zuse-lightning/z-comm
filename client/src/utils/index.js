import axios from "axios";

const baseURL = process.env.NODE_ENV === "production" 
? "https://www.zusetestinggrounds.com/api/" 
: "http://localhost:3001/api/";

console.log(process.env.NODE_ENV);

export const axiosInstance = axios.create({
    baseURL: baseURL,
    withCredentials: true
});