import React, { useEffect, useState, useContext } from "react";
import { Route, Routes } from "react-router-dom";
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
import Footer from "../../components/AllWeatherHighViz/Footer";

const AllWeatherHighViz = () => {

    const { auth } = useContext(AuthContext);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        fetch("https://cdn.shopify.com/s/files/1/0671/9979/5395/files/awhvCollection.json?v=1751297880").then((res) => {
            return res.json();
        }).then((data) => {
            setOptions(data);
        }).catch((err) => {
            console.error("Error fetching collection options:", err);
        });
    }, []);

    

    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home styleOptions={options} />} />
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
            </Routes>
            <Footer />
        </>
    );
};

export default AllWeatherHighViz;