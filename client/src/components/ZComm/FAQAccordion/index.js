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

    return (
        <div id="zcomm-faq-accordion-container">
            <Header as="h1" id="zcomm-faq-accordion-header">Frequently Asked Questions</Header>
            <Accordion id="zcomm-faq-accordion" fluid styled>
                {zcommFAQ.map((faq, index) => {
                    return (
                        <div key={index}>
                            <Accordion.Title
                                className="zcomm-faq-accordion-title"
                                active={activeIndex === index + 1}
                                index={index + 1}
                                onClick={handleClick}
                            >
                                <Icon name="dropdown" />
                                {faq.question}
                            </Accordion.Title>
                            <Accordion.Content className="zcomm-faq-accordion-content" active={activeIndex === index + 1}>
                                <p className="zcomm-faq-accordion-text">{faq.answer}</p>
                                {activeIndex === 3 ? <List id="zcomm-faq-accordion-list" bulleted>
                                    {zcommServices.map((service, index) => {
                                        return (
                                            <List.Item className="zcomm-faq-accordion-list-item" key={index}>{service}</List.Item>
                                        );
                                    })}
                                </List> : null}
                            </Accordion.Content>
                        </div>
                    );
                })}
            </Accordion>
        </div>
    );
};

export default FAQAccordion;