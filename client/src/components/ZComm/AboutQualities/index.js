import React from "react";
import { Image, Header } from "semantic-ui-react";
import { motion } from "framer-motion";

import "./style.css";

const AboutQualities = () => {

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div id="zcomm-about-qualities-container">
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
                <Header as="h1" id="zcomm-about-qualities-header">Why Choose Z-Comm?</Header>
            </motion.div>
            <div id="zcomm-about-qualities">
                {[
                    <Image className="zcomm-about-quality-img" src="https://zcomm-site.s3.us-east-1.amazonaws.com/zcomm/IMG_6077.jpg" />,
                    <>
                        <Header as="h1" className="zcomm-about-quality-header">Expertise</Header>
                        <Header as="h4" className="zcomm-about-quality-subheader">
                            With years of experience in web development and e-commerce, our team brings a wealth of knowledge to every project.
                        </Header>
                    </>,
                    <>
                        <Header as="h1" className="zcomm-about-quality-header">Innovation</Header>
                        <Header as="h4" className="zcomm-about-quality-subheader">
                            We stay ahead of industry trends, leveraging the latest technologies to give your business a competitive edge.
                        </Header>
                    </>,
                    <Image className="zcomm-about-quality-img" src="https://zcomm-site.s3.us-east-1.amazonaws.com/zcomm/IMG_6049.jpg" />,
                    <Image className="zcomm-about-quality-img" src="https://zcomm-site.s3.us-east-1.amazonaws.com/zcomm/AdobeStock_300873824.jpg" />,
                    <>
                        <Header as="h1" className="zcomm-about-quality-header">Customer-Centric Approach</Header>
                        <Header as="h4" className="zcomm-about-quality-subheader">
                            Your success is our priority. We pride ourselves on building lasting partnerships and delivering exceptional service.
                        </Header>
                    </>,
                    <>
                        <Header as="h1" className="zcomm-about-quality-header">End-to-End Solutions</Header>
                        <Header as="h4" className="zcomm-about-quality-subheader">
                            From your website's first line of code to the final delivery of your products, we’ve got you covered.
                        </Header>
                    </>,
                    <Image className="zcomm-about-quality-img" src="https://zcomm-site.s3.us-east-1.amazonaws.com/zcomm/IMG_6092.jpg" />
                ].map((content, i) => (
                    <motion.div
                        key={i}
                        className="zcomm-about-quality-col"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                    >
                        {content}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AboutQualities;