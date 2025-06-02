import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import Navbar from "../../components/OffSoundings/Navbar";
import Home from "../../pages/OffSoundings/Home";
import Contact from "../../pages/OffSoundings/Contact";

const OffSoundings = () => {

    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
};

export default OffSoundings;