import React, { useState } from "react";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "../style.css";

const MobileNavbar = () => {
    const [open, setOpen] = useState(false);
    console.log(open);

    const trigger = (
        <div id="mobile-menu-trigger" onClick={() => setOpen(o => !o)}>
            <div className="mobile-menu-bar" />
            <div className="mobile-menu-bar" />
            <div className="mobile-menu-bar" />
        </div>
    );

    return (
        <div className="mobile-navbar-container">
            <div id="mobile-off-sound-logo-container">
                <Image
                    as={Link}
                    to={process.env.NODE_ENV === "production" ? "https://www.offsoundings.store/" : "/"}
                    draggable="false"
                    size="small"
                    id="mobile-off-sound-logo"
                    src="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/off-soundings-logo.png?v=1732219354"
                />
            </div>
            <Dropdown
                item
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                icon={null}
                trigger={trigger}
                // direction="right"
                pointing="top"
            >
                <Dropdown.Menu>
                    <Dropdown.Item
                        as={Link}
                        onClick={() => setOpen(false)}
                        to={process.env.NODE_ENV === "production" ? "https://www.offsoundings.store/shirts" : "/shirts"}>
                        Shirts
                    </Dropdown.Item>
                    <Dropdown.Item
                        as={Link}
                        onClick={() => setOpen(false)}
                        to={process.env.NODE_ENV === "production" ? "https://www.offsoundings.store/outerwear" : "/outerwear"}>
                        Outerwear
                    </Dropdown.Item>
                    <Dropdown.Item
                        as={Link}
                        onClick={() => setOpen(false)}
                        to={process.env.NODE_ENV === "production" ? "https://www.offsoundings.store/headwear" : "/headwear"}>
                        Headwear
                    </Dropdown.Item>
                    <Dropdown.Item
                        as={Link}
                        onClick={() => setOpen(false)}
                        to={process.env.NODE_ENV === "production" ? "https://www.offsoundings.store/faq" : "/faq"}>
                        Help
                    </Dropdown.Item>
                    <Dropdown.Item
                        as={Link}
                        onClick={() => setOpen(false)}
                        to={process.env.NODE_ENV === "production" ? "https://www.offsoundings.store/contact" : "/contact"}>
                        Contact
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default MobileNavbar;