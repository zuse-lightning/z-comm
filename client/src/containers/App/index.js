import React, { useState, useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import Home from "../../pages/Home";
import Register from "../../pages/Register";
import Login from "../../pages/Login";
import ForgotPassword from "../../pages/ForgotPassword";
import ResetPassword from "../../pages/ResetPassword";
import Reviews from "../../pages/Reviews";
import Review from "../../pages/Review";
import Write from "../../pages/Write";
import Edit from "../../pages/Edit";

import "./style.css";



const App = () => {

    const auth = useContext(AuthContext);

    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/register" element={<Register auth={auth} />} />
                <Route exact path="/login" element={<Login auth={auth} />} />
                <Route exact path="/forgot" element={<ForgotPassword auth={auth} />} />
                <Route exact path="/reset/:id/:token" element={<ResetPassword auth={auth} />} />
                <Route exact path="/reviews" element={<Reviews auth={auth} />} />
                <Route exact path="/review/:id" element={<Review auth={auth} />} />
                <Route exact path="/write" element={<Write auth={auth} />} />
                <Route exact path="/edit/:id" element={<Edit auth={auth} />} />
            </Routes>
        </>
    );
};

export default App;