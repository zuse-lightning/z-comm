import React, { useEffect, useState, useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import Navbar from "../../components/AllWeatherHighViz/Navbar";
import Home from "../../pages/AllWeatherHighViz/Home";
import OurStory from "../../pages/AllWeatherHighViz/OurStory";
import Headwear from "../../pages/AllWeatherHighViz/Headwear";
import Jackets from "../../pages/AllWeatherHighViz/Jackets";
import Hoodies from "../../pages/AllWeatherHighViz/Hoodies";
import NewReleases from "../../pages/AllWeatherHighViz/NewReleases";
import BestSellers from "../../pages/AllWeatherHighViz/BestSellers";
import ConcealedCarry from "../../pages/AllWeatherHighViz/ConcealedCarry";
import Shirts from "../../pages/AllWeatherHighViz/Shirts";
import Pants from "../../pages/AllWeatherHighViz/Pants";
import Vests from "../../pages/AllWeatherHighViz/Vests";
import Accessories from "../../pages/AllWeatherHighViz/Accessories";
import FAQ from "../../pages/AllWeatherHighViz/FAQ";
import Contact from "../../pages/AllWeatherHighViz/Contact";
import PrivacyPolicy from "../../pages/AllWeatherHighViz/PrivacyPolicy";
import TermsOfService from "../../pages/AllWeatherHighViz/TermsOfService";
import TrustBadges from "../../components/AllWeatherHighViz/TrustBadges";
import Footer from "../../components/AllWeatherHighViz/Footer";

const AllWeatherHighViz = (props) => {

    const { auth } = useContext(AuthContext);
    const [options, setOptions] = useState([]);
    const { screenWidth } = props;
    const pathname = useLocation().pathname;

    useEffect(() => {
        fetch("https://cdn.shopify.com/s/files/1/0671/9979/5395/files/awhvCollection.json?v=1751297880").then((res) => {
            return res.json();
        }).then((data) => {
            setOptions(data);
        }).catch((err) => {
            console.error("Error fetching collection options:", err);
        });
    }, []);

    const noBadgePaths = ["/privacy", "/terms"];

    return (
        <>
            <Navbar screenWidth={screenWidth} />
            <Routes>
                <Route exact path="/" element={<Home screenWidth={screenWidth} styleOptions={options} />} />
                <Route exact path="/our-story" element={<OurStory />} />
                <Route exact path="/headwear" element={<Headwear styleOptions={options} />} />
                <Route exact path="/jackets" element={<Jackets styleOptions={options} />} />
                <Route exact path="/hoodies" element={<Hoodies styleOptions={options} />} />
                <Route exact path="/new-releases" element={<NewReleases styleOptions={options} />} />
                <Route exact path="/best-sellers" element={<BestSellers styleOptions={options} />} />
                <Route exact path="/concealed-carry" element={<ConcealedCarry styleOptions={options} />} />
                <Route exact path="/shirts" element={<Shirts styleOptions={options} />} />
                <Route exact path="/pants" element={<Pants styleOptions={options} />} />
                <Route exact path="/vests" element={<Vests styleOptions={options} />} />
                <Route exact path="/accessories" element={<Accessories styleOptions={options} />} />
                <Route exact path="/faq" element={<FAQ />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/privacy" element={<PrivacyPolicy />} />
                <Route exact path="/terms" element={<TermsOfService />} />
            </Routes>
            {noBadgePaths.includes(pathname) ? null : <TrustBadges />}
            <Footer />
        </>
    );
};

export default AllWeatherHighViz;