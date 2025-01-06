import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import Home from "../../pages/FishLifeUSA/Home";
import Contact from "../../pages/FishLifeUSA/Contact";

const FishLifeUSA = () => {

    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
};

export default FishLifeUSA;