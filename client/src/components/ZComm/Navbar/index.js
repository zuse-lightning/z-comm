import React from "react";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = ({ screenWidth }) => {
    return (
        <>
            {screenWidth >= 992 ? <DesktopNavbar /> : <MobileNavbar />}
        </>
    );
};

export default Navbar;