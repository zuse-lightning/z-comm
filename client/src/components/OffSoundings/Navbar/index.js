import React from "react";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

import "./style.css";

const Navbar = (props) => {

    const { screenWidth } = props;

    return (
        <>
            {screenWidth > 991 ? <DesktopNavbar /> : <MobileNavbar />}
        </>
    );
};

export default Navbar;