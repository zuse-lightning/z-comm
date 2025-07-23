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
                description="Official Off Soundings apparel store—premium boating gear inspired by coastal racing tradition. Shop shirts, outerwear, headwear, and accessories proudly associated with the Off Soundings Club."
                keywords="Off Soundings apparel, boating apparel, sailing gear, boat club merchandise, shirts, outerwear, headwear, accessories, Off Soundings Club"
                type="website"
                image="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/off-soundings-home.png?v=1750093143"
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