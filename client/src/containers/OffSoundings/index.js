import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import Home from "../../pages/OffSoundings/Home";
import Contact from "../../pages/OffSoundings/Contact";

const OffSoundings = () => {

    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
};

export default OffSoundings;