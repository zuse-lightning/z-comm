import React from "react";
import { Header, Image } from "semantic-ui-react";

import "./style.css";

const OurStory = () => {
    return (
        <>
            <div id="awhv-our-story-container">
                <Header as="h1" className="awhv-our-story-header">Our Story</Header>
                <p className="awhv-our-story-text">
                    We exist to serve and protect hard-working people!
                </p>
                <p className="awhv-our-story-text">
                    All Weather High Viz is much more than a maker of workwear. We are a family. We honor the shared, traditional values of hard work: 
                    dependability, honesty, and most of all trust. We are committed to supporting organizations that ensure this generation partners 
                    with the next to build an even better future. We believe our actions must always speak louder than our words, because we are worn 
                    by the hardest-working people of them all.
                </p>
                <p className="awhv-our-story-text">
                    Headquarters located in Branford, Connecticut. All Weather High Viz employs more than 100 associates worldwide.
                </p>
                <Header as="h1" className="awhv-our-story-header">Follow Us On Social Media</Header>
            </div>
        </>
    );
};

export default OurStory;