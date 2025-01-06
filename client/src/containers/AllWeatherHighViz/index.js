import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import Home from "../../pages/AllWeatherHighViz/Home";
import Contact from "../../pages/AllWeatherHighViz/Contact";

const AllWeatherHighViz = () => {

    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
};

export default AllWeatherHighViz;