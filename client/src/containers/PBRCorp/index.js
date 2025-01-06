import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import Home from "../../pages/PBRCorp/Home";
import Contact from "../../pages/PBRCorp/Contact";

const PBRCorp = () => {

    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
};

export default PBRCorp;