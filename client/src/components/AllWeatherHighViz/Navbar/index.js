import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = (props) => {

    const { screenWidth } = props;

    return (
        <>
            {screenWidth < 992 ? <MobileNavbar /> : <DesktopNavbar />}
        </>
    );
};

export default Navbar;