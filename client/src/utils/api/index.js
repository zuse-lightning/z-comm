import axios from "axios";

let productionURL;

if (window.location.href.includes("www.zcomm.store")) {
    productionURL = process.env.REACT_APP_ZCOMM_API_URL;
} else if (window.location.href.includes("www.allweatherhiviz.com")) {
    productionURL = process.env.REACT_APP_AWHV_API_URL;
} else if (window.location.href.includes("www.dxnheadwear.com")) {
    productionURL = process.env.REACT_APP_DXN_API_URL;
} else if (window.location.href.includes("www.fishlifeusa.com")) {
    productionURL = process.env.REACT_APP_FISH_LIFE_API_URL;
} else if (window.location.href.includes("www.pbrcorpshop.com")) {
    productionURL = process.env.REACT_APP_PBR_CORP_API_URL;
} else if (window.location.href.includes("www.offsoundings.store")) {
    productionURL = process.env.REACT_APP_OFF_SOUNDINGS_API_URL;
}

const baseURL = process.env.NODE_ENV === "production" ? productionURL : "http://localhost:3001/api/";

export const axiosInstance = axios.create({
    baseURL: baseURL,
    withCredentials: true
});