import React, { useState } from "react";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "../style.css";

const MobileNavbar = () => {
    const [open, setOpen] = useState(false);

    const trigger = (
        <div id="awhv-mobile-menu-trigger" onClick={() => setOpen(o => !o)}>
            <div className="awhv-mobile-menu-bar" />
            <div className="awhv-mobile-menu-bar" />
            <div className="awhv-mobile-menu-bar" />
        </div>
    );

    return (
        <div className="awhv-mobile-navbar-container">
            <div id="awhv-mobile-logo-container">
                <Image
                    as={Link}
                    to={process.env.NODE_ENV === "production" ? "https://www.allweatherhiviz.com/" : "/"}
                    draggable="false"
                    size="medium"
                    id="awhv-mobile-logo"
                    src="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/zcomm-logo-alt.png?v=1732219354"
                />
            </div>
            <Dropdown
                item
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                icon={null}
                trigger={trigger}
                pointing="top"
            >
                <Dropdown.Menu>
                    <Dropdown.Item
                        as={Link}
                        onClick={() => setOpen(false)}
                        to={process.env.NODE_ENV === "production" ? "https://www.allweatherhiviz.com/about" : "/about"}>
                        About
                    </Dropdown.Item>
                    <Dropdown.Item
                        as={Link}
                        onClick={() => setOpen(false)}
                        to={process.env.NODE_ENV === "production" ? "https://www.allweatherhiviz.com/services" : "/services"}>
                        Services
                    </Dropdown.Item>
                    <Dropdown.Item
                        as={Link}
                        onClick={() => setOpen(false)}
                        to={process.env.NODE_ENV === "production" ? "https://www.allweatherhiviz.com/faq" : "/faq"}>
                        Help
                    </Dropdown.Item>
                    <Dropdown.Item
                        as={Link}
                        onClick={() => setOpen(false)}
                        to={process.env.NODE_ENV === "production" ? "https://www.allweatherhiviz.com/quote" : "/quote"}>
                        Get A Quote
                    </Dropdown.Item>
                    <Dropdown.Item
                        as={Link}
                        onClick={() => setOpen(false)}
                        to={process.env.NODE_ENV === "production" ? "https://www.allweatherhiviz.com/contact" : "/contact"}>
                        Contact
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default MobileNavbar;