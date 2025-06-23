import React, { useRef } from "react";
import { Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

import "./style.css";

const AboutQuote = () => {

    const headerRef = useRef(null);
    const buttonRef = useRef(null);

    const headerInView = useInView(headerRef, { once: true });
    const buttonInView = useInView(buttonRef, { once: true });

    return (
        <div id="zcomm-about-quote-container">
            <div id="zcomm-about-quote">
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: -50 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Header as="h1" id="zcomm-about-quote-header">Think We Can Help?</Header>
                    <Header as="h4" id="zcomm-about-quote-subheader">
                        Whether you're looking to launch a new e-commerce store, optimize your existing website, or
                        streamline your product fulfillment process, Z-Comm is here to help. Get in touch with us today
                        to learn more about our services and how we can empower your e-commerce success.
                    </Header>
                </motion.div>
                <motion.div
                    ref={buttonRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={buttonInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <Button id="zcomm-about-quote-btn" as={Link} to="/quote">Get A Quote</Button>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutQuote;