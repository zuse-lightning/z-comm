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

const AllWeatherHighViz = () => {

    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/our-story" element={<OurStory />} />
                <Route exact path="/headwear" element={<Headwear />} />
                <Route exact path="/jackets" element={<Jackets />} />
                <Route exact path="/hoodies" element={<Hoodies />} />
                <Route exact path="/new-releases" element={<NewReleases />} />
                <Route exact path="/best-sellers" element={<BestSellers />} />
                <Route exact path="/concealed-carry" element={<ConcealedCarry />} />
                <Route exact path="/shirts" element={<Shirts />} />
                <Route exact path="/pants" element={<Pants />} />
                <Route exact path="/vests" element={<Vests />} />
                <Route exact path="/accessories" element={<Accessories />} />
                <Route exact path="/faq" element={<FAQ />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </>
    );
};

export default AllWeatherHighViz;