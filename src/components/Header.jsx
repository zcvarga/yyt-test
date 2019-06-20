import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Header = () => {
    return (<div>
        <div className="header-background">
            <Row className="header-subcontainer">
                <Col className="header-link">Shop</Col>
                <div className='header-space'></div>
                <Col sm={8}><div className="header-logo" /></Col>
                <div className='header-space'></div>
                <Col className="header-link">Discover</Col>
                <div className="header-shop-container">
                    <Col className="header-profile"><div className="header-profile-image"></div></Col>
                    <Col className="header-shop"><div className="header-shop-image"></div></Col>
                </div>
            </Row>
            <Row className="header-tagline">
                <Col className="tagline-first-line">100% Sustainably sourced linen</Col>
                <Col className="tagline-second-line">FOR THE LOVE OF LINEN</Col>
                <Col className="discover-container">
                    <div className="discover-button">DISCOVER</div>
                </Col>
            </Row>

        </div>

    </div>)
}

export default Header;



