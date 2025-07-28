import React from "react";
import { Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { SEO } from "../../../components/SEO";

import "./style.css";


const OurStory = () => {
    return (
        <>
            <SEO
                favIcon="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/awhv-01.png?v=1753723852"
                title="About Us - All Weather High Viz – Built for Hard Work & Working-Class Values"
                description="Discover All Weather High Viz’s roots and mission. We build rugged, ANSI-compliant high‑visibility workwear for the hard-working and working-class community."
                keywords="All Weather High Viz, our story, working class workwear brand, high-visibility apparel brand story, construction gear company story, rugged workwear heritage, American hi‑vis brand"
                type="website"
                image="https://cdn.shopify.com/s/files/1/0671/9979/5395/files/awhv-our-story.png?v=1753724839"
                url={window.location.href}
            />
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
                <Header as="h1" className="awhv-our-story-header" id="awhv-social-media-header">Follow Us On Social Media</Header>
                <div id="awhv-social-media">
                    <div className="awhv-social-media-col">
                        <Link to="https://www.facebook.com/AllWeatherHighViz" target="_blank">
                            <Icon size="massive" name="facebook" className="awhv-social-media-icon" />
                        </Link>
                    </div>
                    <div className="awhv-social-media-col">
                        <Link to="https://www.instagram.com/allweatherhighviz/" target="_blank">
                            <Icon size="massive" name="instagram" className="awhv-social-media-icon" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurStory;