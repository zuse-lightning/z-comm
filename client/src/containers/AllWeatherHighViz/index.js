import React, { useContext } from "react";
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

import { awhvCollectionOptions } from "../../assets/collectionOptions"

const AllWeatherHighViz = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home styleOptions={awhvCollectionOptions} />} />
                <Route exact path="/our-story" element={<OurStory />} />
                <Route exact path="/headwear" element={<Headwear styleOptions={awhvCollectionOptions} />} />
                <Route exact path="/jackets" element={<Jackets styleOptions={awhvCollectionOptions} />} />
                <Route exact path="/hoodies" element={<Hoodies styleOptions={awhvCollectionOptions} />} />
                <Route exact path="/new-releases" element={<NewReleases styleOptions={awhvCollectionOptions} />} />
                <Route exact path="/best-sellers" element={<BestSellers styleOptions={awhvCollectionOptions} />} />
                <Route exact path="/concealed-carry" element={<ConcealedCarry styleOptions={awhvCollectionOptions} />} />
                <Route exact path="/shirts" element={<Shirts styleOptions={awhvCollectionOptions} />} />
                <Route exact path="/pants" element={<Pants styleOptions={awhvCollectionOptions} />} />
                <Route exact path="/vests" element={<Vests styleOptions={awhvCollectionOptions} />} />
                <Route exact path="/accessories" element={<Accessories styleOptions={awhvCollectionOptions} />} />
                <Route exact path="/faq" element={<FAQ />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </>
    );
};

export default AllWeatherHighViz;