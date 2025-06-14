import React from "react";
import { Image, Header } from "semantic-ui-react";

import "./style.css";

const AboutQualities = () => {
    return (
        <div id="zcomm-about-qualities-container">
            <Header as="h1" id="zcomm-about-qualities-header">Why Choose Z-Comm?</Header>
            <div id="zcomm-about-qualities">
                <div className="zcomm-about-quality-col">
                    <Image className="zcomm-about-quality-img" src="https://zcomm-site.s3.us-east-1.amazonaws.com/zcomm/IMG_6077.jpg" />
                </div>
                <div className="zcomm-about-quality-col">
                    <Header as="h1" className="zcomm-about-quality-header">Expertise</Header>
                    <Header as="h4" className="zcomm-about-quality-subheader">
                        With years of experience in web development and e-commerce, our team brings a wealth of knowledge to every project.
                    </Header>
                </div>
                <div className="zcomm-about-quality-col">
                    <Header as="h1" className="zcomm-about-quality-header">Innovation</Header>
                    <Header as="h4" className="zcomm-about-quality-subheader">
                        We stay ahead of industry trends, leveraging the latest technologies to give your business a competitive edge.
                    </Header>
                </div>
                <div className="zcomm-about-quality-col">
                    <Image className="zcomm-about-quality-img" src="https://zcomm-site.s3.us-east-1.amazonaws.com/zcomm/IMG_6049.jpg" />
                </div>
                <div className="zcomm-about-quality-col">
                    <Image className="zcomm-about-quality-img" src="https://zcomm-site.s3.us-east-1.amazonaws.com/zcomm/AdobeStock_300873824.jpg" />
                </div>
                <div className="zcomm-about-quality-col">
                    <Header as="h1" className="zcomm-about-quality-header">Customer-Centric Approach</Header>
                    <Header as="h4" className="zcomm-about-quality-subheader">
                        Your success is our priority. We pride ourselves on building lasting partnerships and delivering exceptional service.
                    </Header>
                </div>
                <div className="zcomm-about-quality-col">
                    <Header as="h1" className="zcomm-about-quality-header">End-to-End Solutions</Header>
                    <Header as="h4" className="zcomm-about-quality-subheader">
                        From your website's first line of code to the final delivery of your products, we’ve got you covered.
                    </Header>
                </div>
                <div className="zcomm-about-quality-col">
                    <Image className="zcomm-about-quality-img" src="https://zcomm-site.s3.us-east-1.amazonaws.com/zcomm/IMG_6092.jpg" />
                </div>
            </div>
        </div>
    );
};

export default AboutQualities;