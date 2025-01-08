import React, { useEffect } from "react";
import PropTypes from "prop-types";
import HomeBanner from "../../../components/ZComm/HomeBanner";
import HomeTrustBadges from "../../../components/ZComm/HomeTrustBadges";
import HomeAbout from "../../../components/ZComm/HomeAbout";
import { embedShopifyProduct, embedShopifyCollection } from "../../../utils/shopify";
import { axiosInstance } from "../../../utils/api";

const Home = (props) => {

    const { auth } = props;

    // console.log(window.ShopifyBuy.UI);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get("/auth/test");
                console.log(res.data);
            } catch (err) {
                console.log(err);
            };
        };
        fetchData();
    }, []);

    useEffect(() => {
        embedShopifyProduct("7997352608028", "ct-schools-store.myshopify.com", "b2b2a6d6fa1291bcb4219ec236d88b85");
        embedShopifyCollection("336240574659", "bfb312-ir.myshopify.com", "97789f988ec89e728949a3e7eeb05593");
    }, []);

    return (
        <>
            <HomeBanner />
            <HomeTrustBadges />
            <HomeAbout />
            <div id={`product-component-1731358336108`}></div>
            <div id='collection-component-1736351766300'></div>
        </>
    );
};

Home.propTypes = {
    auth: PropTypes.shape({
        currentUser: PropTypes.object,
        logout: PropTypes.func,
        notAuthorized: PropTypes.func,
        alreadyLoggedIn: PropTypes.func,
    }).isRequired,
};

export default Home;