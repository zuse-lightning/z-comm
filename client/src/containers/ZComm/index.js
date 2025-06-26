import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../../pages/ZComm/Home";
import About from "../../pages/ZComm/About";
import Services from "../../pages/ZComm/Services";
import FAQ from "../../pages/ZComm/FAQ";
import PrivacyPolicy from "../../pages/ZComm/PrivacyPolicy";
import ShippingPolicy from "../../pages/ZComm/ShippingPolicy";
import ReturnsRefunds from "../../pages/ZComm/ReturnsRefunds";
import Guarantee from "../../pages/ZComm/Guarantee";
import TermsOfService from "../../pages/ZComm/TermsOfService";
import Quote from "../../pages/ZComm/Quote";
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
import GetAQuote from "../../components/ZComm/GetAQuote";
import Footer from "../../components/ZComm/Footer";

const ZComm = (props) => {

    const { auth } = props;
    const pathname = useLocation().pathname;
    const noQuotePaths = ["/quote", "/register", "/login", "/forgot", "/reset", "/write", "/edit"];

    return (
        <>
            <AnnouncementBar />
            <Navbar />
            
            <Routes>
                <Route exact path="/" element={<Home auth={auth} />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/services" element={<Services />} />
                <Route exact path="/faq" element={<FAQ />} />
                <Route exact path="/privacy" element={<PrivacyPolicy />} />
                <Route exact path="/shipping" element={<ShippingPolicy />} />
                <Route exact path="/returns" element={<ReturnsRefunds />} />
                <Route exact path="/guarantee" element={<Guarantee />} />
                <Route exact path="/terms" element={<TermsOfService />} />
                <Route exact path="/quote" element={<Quote />} />
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
            {noQuotePaths.includes(pathname) ? null : <GetAQuote />}
            <Footer />
        </>
    );
};

export default ZComm;