import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/ZComm/Home";
import About from "../../pages/ZComm/About";
import Contact from "../../pages/ZComm/Contact";
import Register from "../../pages/ZComm/Register";
import Login from "../../pages/ZComm/Login";
import ForgotPassword from "../../pages/ZComm/ForgotPassword";
import ResetPassword from "../../pages/ZComm/ResetPassword";
import Reviews from "../../pages/ZComm/Reviews";
import Review from "../../pages/ZComm/Review";
import Write from "../../pages/ZComm/Write";
import Edit from "../../pages/ZComm/Edit";
import AnnouncementBar from "../../components/ZComm/AnnouncementBar";
import Navbar from "../../components/ZComm/Navbar";
import Footer from "../../components/ZComm/Footer";

const ZComm = (props) => {

    const { auth } = props;

    return (
        <>
            <AnnouncementBar />
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home auth={auth} />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/register" element={<Register auth={auth} />} />
                <Route exact path="/login" element={<Login auth={auth} />} />
                <Route exact path="/forgot" element={<ForgotPassword auth={auth} />} />
                <Route exact path="/reset/:id/:token" element={<ResetPassword auth={auth} />} />
                <Route exact path="/reviews" element={<Reviews auth={auth} />} />
                <Route exact path="/review/:id" element={<Review auth={auth} />} />
                <Route exact path="/write" element={<Write auth={auth} />} />
                <Route exact path="/edit/:id" element={<Edit auth={auth} />} />
            </Routes>
            <Footer />
        </>
    );
};

export default ZComm;