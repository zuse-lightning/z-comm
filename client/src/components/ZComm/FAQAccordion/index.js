import React, { useEffect, useState } from "react";
import { Accordion, Icon, Header, List } from "semantic-ui-react";
import { zcommFAQ, zcommServices } from "../../../assets/generalAssets";

import "./style.css";

const FAQAccordion = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const newIndex = activeIndex === index ? -1 : index;

        setActiveIndex(newIndex);
    };

    console.log(activeIndex);

    return (
        <div id="zcomm-faq-accordion-container">
            <Header as="h1" id="zcomm-faq-accordion-header">Frequently Asked Questions</Header>
            <Accordion fluid styled>
                {zcommFAQ.map((faq, index) => {
                    return (
                        <div key={index}>
                            <Accordion.Title
                                active={activeIndex === index + 1}
                                index={index + 1}
                                onClick={handleClick}
                            >
                                <Icon name="dropdown" />
                                {faq.question}
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === index + 1}>
                                <p className="zcomm-faq-accordion-text">{faq.answer}</p>
                                {activeIndex === 3 ? <List bulleted>
                                    {zcommServices.map((service, index) => {
                                        return (
                                            <List.Item key={index}>{service}</List.Item>
                                        );
                                    })}
                                </List> : null}
                            </Accordion.Content>
                        </div>
                    );
                })}
                {/* <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={handleClick}
                >
                    <Icon name="dropdown" />
                    What does Z-Comm do?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                    <p className="zcomm-faq-accordion-text">
                        Z-Comm is an innovative e-commerce solutions provider. We help businesses of 
                        all sizes create, optimize, and grow their online stores with cutting-edge tools, 
                        integrations, and strategies.
                    </p>
                </Accordion.Content> */}
            </Accordion>
        </div>
    );
};

export default FAQAccordion;