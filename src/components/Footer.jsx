import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (<div>
        <div className="footer-background">
            <div className="footer-column">
                <div className="footer-header">Shop</div>
                <div className="footer-link">Classic</div>
                <div className="footer-link">Safari</div>
                <div className="footer-link">Mandarin</div>
            </div>
            <div className="footer-column">
                <div className="footer-header">Dundas</div>
                <div className="footer-link">Our Story</div>
                <div className="footer-link">News</div>
                <div className="footer-link">Discover</div>
                <div className="footer-link">Partnerships</div>
                <div className="footer-link">Contact</div>

            </div>
            <div className="footer-column">
                <div className="footer-header">Help</div>
                <div className="footer-link">T&Cs</div>
                <div className="footer-link">Returns & Exchange</div>
                <div className="footer-link">Delivery</div>
                <div className="footer-link">Care & Cleaning</div>
                <div className="footer-link">Privacy Policy</div>
            </div>
            <div className="footer-column-signup">
                <div className="footer-header">Sign up for all the latest news & offers</div>
                <input className="email-input" type="text" placeholder="Your Email Address"></input>
                <div className="social-wrapper">
                    <div className="instagram"></div>
                    <div className="twitter"></div>
                    <div className="facebook"></div>
                </div>
            </div>

        </div>
        <div className="footer-bottomline" />
        <div className="footer-bottom-container">
            <div className="footer-bottom-copyright">©2019, Dundas London</div>
            <div className="footer-payments-container">
                <div className="mastercard" />
                <div className="visa" />
                <div className="paypal" />
                <div className="amex" />

            </div>
        </div>
    </div>)
}

export default Footer;