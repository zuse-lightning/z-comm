import React, { useEffect, useState } from "react";
import { Accordion, Icon, Header } from "semantic-ui-react";
import { offSoundingsFAQ } from "../../../assets/generalAssets";

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
        <div id="off-sound-faq-accordion-container">
            <Header as="h1" id="off-sound-faq-accordion-header">Frequently Asked Questions</Header>
            <Accordion id="off-sound-faq-accordion" fluid styled>
                {offSoundingsFAQ.map((faq, index) => {
                    return (
                        <div key={index}>
                            <Accordion.Title
                                className="off-sound-faq-accordion-title"
                                active={activeIndex === index + 1}
                                index={index + 1}
                                onClick={handleClick}
                            >
                                <Icon name="dropdown" />
                                {faq.question}
                            </Accordion.Title>
                            <Accordion.Content className="off-sound-faq-accordion-content" active={activeIndex === index + 1}>
                                <p className="off-sound-faq-accordion-text">{faq.answer}</p>
                            </Accordion.Content>
                        </div>
                    );
                })}
            </Accordion>
        </div>
    );
};

export default FAQAccordion;