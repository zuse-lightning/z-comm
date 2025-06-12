import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import Navbar from "../../components/OffSoundings/Navbar";
import Home from "../../pages/OffSoundings/Home";
import Shirts from "../../pages/OffSoundings/Shirts";
import Outerwear from "../../pages/OffSoundings/Outerwear";
import Headwear from "../../pages/OffSoundings/Headwear";
import FAQ from "../../pages/OffSoundings/FAQ";
import PrivacyPolicy from "../../pages/OffSoundings/PrivacyPolicy";
import TermsOfService from "../../pages/OffSoundings/TermsOfService";
import Contact from "../../pages/OffSoundings/Contact";
import Footer from "../../components/OffSoundings/Footer";

import { offSoundingsCollectionOptions } from "../../assets/collectionOptions";

const OffSoundings = (props) => {

    const  { screenWidth } = props;

    return (
        <>
            <Navbar screenWidth={screenWidth} />
            <Routes>
                <Route exact path="/" element={<Home styleOptions={offSoundingsCollectionOptions} />} />
                <Route exact path="/shirts" element={<Shirts styleOptions={offSoundingsCollectionOptions} />} />
                <Route exact path="/outerwear" element={<Outerwear styleOptions={offSoundingsCollectionOptions} />} />
                <Route exact path="/headwear" element={<Headwear styleOptions={offSoundingsCollectionOptions} />} />
                <Route exact path="/faq" element={<FAQ />} />
                <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route exact path="/terms-of-service" element={<TermsOfService />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </>
    );
};

export default OffSoundings;