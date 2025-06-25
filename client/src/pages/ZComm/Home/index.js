import React, { useEffect } from "react";
import PropTypes from "prop-types";
import HomeBanner from "../../../components/ZComm/HomeBanner";
import HomeTrustBadges from "../../../components/ZComm/HomeTrustBadges";
import HomeAbout from "../../../components/ZComm/HomeAbout";
import HomeServices from "../../../components/ZComm/HomeServices";
import GetAQuote from "../../../components/ZComm/GetAQuote";
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
            <HomeBanner />
            <HomeTrustBadges />
            <HomeAbout />
            <HomeServices />
            <GetAQuote />
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