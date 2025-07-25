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
                    src="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/Web_Logo_blk_orange.png?v=1732219631"
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
                        to={process.env.NODE_ENV === "production" ? "https://www.allweatherhiviz.com/our-story" : "/our-story"}>
                        Our Story
                    </Dropdown.Item>
                    <Dropdown.Item
                        as={Link}
                        onClick={() => setOpen(false)}
                        to={process.env.NODE_ENV === "production" ? "https://www.allweatherhiviz.com/new-releases" : "/new-releases"}>
                        New Releases
                    </Dropdown.Item>
                    <Dropdown.Item
                        as={Link}
                        onClick={() => setOpen(false)}
                        to={process.env.NODE_ENV === "production" ? "https://www.allweatherhiviz.com/best-sellers" : "/best-sellers"}>
                        Best Sellers
                    </Dropdown.Item>
                    <Dropdown.Item
                        as={Link}
                        onClick={() => setOpen(false)}
                        to={process.env.NODE_ENV === "production" ? "https://www.allweatherhiviz.com/concealed-carry" : "/concealed-carry"}>
                        Concealed Carry
                    </Dropdown.Item>
                    <Dropdown.Item
                        as={Link}
                        onClick={() => setOpen(false)}
                        to={process.env.NODE_ENV === "production" ? "https://www.allweatherhiviz.com/shirts" : "/shirts"}>
                        Shirts
                    </Dropdown.Item>
                    <Dropdown.Item
                        as={Link}
                        onClick={() => setOpen(false)}
                        to={process.env.NODE_ENV === "production" ? "https://www.allweatherhiviz.com/jackets" : "/jackets"}>
                        Jackets
                    </Dropdown.Item>
                    <Dropdown.Item
                        as={Link}
                        onClick={() => setOpen(false)}
                        to={process.env.NODE_ENV === "production" ? "https://www.allweatherhiviz.com/hoodies" : "/hoodies"}>
                        Hoodies
                    </Dropdown.Item>
                    <Dropdown.Item
                        as={Link}
                        onClick={() => setOpen(false)}
                        to={process.env.NODE_ENV === "production" ? "https://www.allweatherhiviz.com/headwear" : "/headwear"}>
                        Headwear
                    </Dropdown.Item>
                    <Dropdown.Item
                        as={Link}
                        onClick={() => setOpen(false)}
                        to={process.env.NODE_ENV === "production" ? "https://www.allweatherhiviz.com/vests" : "/vests"}>
                        Vests
                    </Dropdown.Item>
                    <Dropdown.Item
                        as={Link}
                        onClick={() => setOpen(false)}
                        to={process.env.NODE_ENV === "production" ? "https://www.allweatherhiviz.com/pants" : "/pants"}>
                        Pants
                    </Dropdown.Item>
                    <Dropdown.Item
                        as={Link}
                        onClick={() => setOpen(false)}
                        to={process.env.NODE_ENV === "production" ? "https://www.allweatherhiviz.com/accessories" : "/accessories"}>
                        Accessories
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
                        to={process.env.NODE_ENV === "production" ? "https://www.allweatherhiviz.com/contact" : "/contact"}>
                        Contact
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default MobileNavbar;