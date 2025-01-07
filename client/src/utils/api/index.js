import axios from "axios";

console.log(process.env.NODE_ENV);

let productionURL;

if (window.location.href.includes("www.zcomm.store")) {
    productionURL = process.env.ZCOMM_API_URL;
} else if (window.location.href.includes("www.allweatherhiviz.com")) {
    productionURL = process.env.AWHV_API_URL;
} else if (window.location.href.includes("www.dxnheadwear.com")) {
    productionURL = process.env.DXN_API_URL;
} else if (window.location.href.includes("www.fishlifeusa.com")) {
    productionURL = process.env.FISH_LIFE_API_URL;
} else if (window.location.href.includes("www.pbrcorpshop.com")) {
    productionURL = process.env.PBR_CORP_API_URL;
}

console.log(productionURL);

const baseURL = process.env.NODE_ENV === "production" ? productionURL : "http://localhost:3001/api/";

export const axiosInstance = axios.create({
    baseURL: baseURL,
    withCredentials: true
});