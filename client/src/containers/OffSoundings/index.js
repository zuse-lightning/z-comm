import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import Navbar from "../../components/OffSoundings/Navbar";
import Home from "../../pages/OffSoundings/Home";
import Shirts from "../../pages/OffSoundings/Shirts";
import Outerwear from "../../pages/OffSoundings/Outerwear";
import Headwear from "../../pages/OffSoundings/Headwear";
import Contact from "../../pages/OffSoundings/Contact";

import { offSoundingsCollectionOptions } from "../../assets/collectionOptions";

const OffSoundings = () => {

    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home styleOptions={offSoundingsCollectionOptions} />} />
                <Route exact path="/shirts" element={<Shirts styleOptions={offSoundingsCollectionOptions} />} />
                <Route exact path="/outerwear" element={<Outerwear styleOptions={offSoundingsCollectionOptions} />} />
                <Route exact path="/headwear" element={<Headwear styleOptions={offSoundingsCollectionOptions} />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
};

export default OffSoundings;