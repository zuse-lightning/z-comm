import React, { useEffect } from "react";
import PropTypes from "prop-types";
import HomeBanner from "../../../components/ZComm/HomeBanner";
import HomeTrustBadges from "../../../components/ZComm/HomeTrustBadges";
import HomeAbout from "../../../components/ZComm/HomeAbout";
import HomeServices from "../../../components/ZComm/HomeServices";
import SEO from "../../../components/SEO";
import { axiosInstance } from "../../../utils/api";

const Home = (props) => {

    const { auth } = props;

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

    return (
        <>
            <SEO
                favIcon="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/web_icon-01.png?v=1753278435"
                title="Z-Comm - Host Your Store With Us!"
                description="Z-Comm helps e-commerce brands thrive with expert web development and reliable product fulfillment services. Custom-built stores, automation, and more."
                keywords="e-commerce web development, product fulfillment services, Shopify and WooCommerce development, custom e-commerce websites, online store design and setup, e-commerce automation, dropshipping fulfillment solutions, website optimization for online stores, e-commerce branding and design, Z-Comm e-commerce services"
                type="website"
                image="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/zcomm-home.png?v=1753282473"
                url={window.location.href}
            />
            <HomeBanner />
            <HomeTrustBadges />
            <HomeAbout />
            <HomeServices />
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