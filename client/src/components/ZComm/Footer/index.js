import React from "react";
import { Header, Button, Icon, List } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

const Footer = () => {
    return (
        <div id="zcomm-footer-container">
            <div id="zcomm-footer">
                <div className="zcomm-footer-col">
                    <List>
                        <List.Header as="h1" className="zcomm-footer-header">Explore</List.Header>
                        <List.Item className="zcomm-footer-list-item" as={Link} to="/quote">Get A Quote</List.Item>
                        <List.Item className="zcomm-footer-list-item" as={Link} to="/about">About</List.Item>
                        <List.Item className="zcomm-footer-list-item" as={Link} to="/services">Services</List.Item>
                        <List.Item className="zcomm-footer-list-item" as={Link} to="/contact">Contact</List.Item>
                    </List>
                </div>
                <div className="zcomm-footer-col">
                    <List>
                        <List.Header as="h1" className="zcomm-footer-header">Learn More</List.Header>
                        <List.Item className="zcomm-footer-list-item" as={Link} to="/faq">Help</List.Item>
                        <List.Item className="zcomm-footer-list-item" as={Link} to="/guarantee">Guarantee</List.Item>
                        <List.Item className="zcomm-footer-list-item" as={Link} to="/returns">Returns & Refunds Policy</List.Item>
                        <List.Item className="zcomm-footer-list-item" as={Link} to="/privacy">Privacy Policy</List.Item>
                        <List.Item className="zcomm-footer-list-item" as={Link} to="/shipping">Shipping Policy</List.Item>
                        <List.Item className="zcomm-footer-list-item" as={Link} to="/terms">Terms of Service</List.Item>
                    </List>
                </div>
                <div className="zcomm-footer-col">
                    <List>
                        <List.Header as="h1" className="zcomm-footer-header">Ready to Get Started?</List.Header>
                        <List.Item className="zcomm-footer-list-item"><b>Call Us:</b> 203-458-3295</List.Item>
                        <List.Item className="zcomm-footer-list-item"><b>Email Us:</b> info@zcomm.store</List.Item>
                    </List>      
                </div>
            </div>
            <div id="zcomm-footer-social-icons">
                <div className="zcomm-footer-social-icon-col">
                    <Icon className="zcomm-footer-social-icon" name="facebook" size="big" />
                </div>
                <div className="zcomm-footer-social-icon-col">
                    <Icon className="zcomm-footer-social-icon" name="instagram" size="big" />
                </div>
                <div className="zcomm-footer-social-icon-col">
                    <Icon className="zcomm-footer-social-icon" name="youtube" size="big" />
                </div>
                <div className="zcomm-footer-social-icon-col">
                    <Icon className="zcomm-footer-social-icon" name="linkedin" size="big" />
                </div>
            </div>
        </div>
    );
};

export default Footer;