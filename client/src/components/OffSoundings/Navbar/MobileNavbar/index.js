import React, { useState } from "react";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "../style.css";

const MobileNavbar = () => {
    const [open, setOpen] = useState(false);

  const trigger = (
    <div onClick={() => setOpen(!open)} style={{ cursor: 'pointer', padding: '10px' }}>
      <div style={{ height: '3px', width: '25px', background: '#000', margin: '4px 0' }} />
      <div style={{ height: '3px', width: '25px', background: '#000', margin: '4px 0' }} />
      <div style={{ height: '3px', width: '25px', background: '#000', margin: '4px 0' }} />
    </div>
  );

  return (
    <Dropdown
      item
      open={open}
      onClick={() => setOpen(!open)}
      icon={null}
      trigger={trigger}
      direction="right"
    >
      <Dropdown.Menu>
        <Dropdown.Item>
          <Dropdown text="Collections" pointing="left" className="link item">
            <Dropdown.Menu>
              <Dropdown.Item
                as={Link}
                onClick={() => setOpen(!open)}
                to={process.env.NODE_ENV === "production" ? "https://www.offsoundings.store/shirts" : "/shirts"}>
                Shirts
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                onClick={() => setOpen(!open)}
                to={process.env.NODE_ENV === "production" ? "https://www.offsoundings.store/outerwear" : "/outerwear"}>
                Outerwear
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                onClick={() => setOpen(!open)}
                to={process.env.NODE_ENV === "production" ? "https://www.offsoundings.store/headwear" : "/headwear"}>
                Headwear
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Item>

        <Dropdown.Item
          as={Link}
          onClick={() => setOpen(!open)}
          to={process.env.NODE_ENV === "production" ? "https://www.offsoundings.store/faq" : "/faq"}>
          Help
        </Dropdown.Item>

        <Dropdown.Item
          as={Link}
          onClick={() => setOpen(!open)}
          to={process.env.NODE_ENV === "production" ? "https://www.offsoundings.store/contact" : "/contact"}>
          Contact
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MobileNavbar;