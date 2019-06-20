import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Carousel from 'nuka-carousel';


class Body extends Component {
    render() {

        return (<div className="body-background" >
            <div className="body-container">

                <Row className="first-row-body">
                    <Col className="first-image"><div className="text-over-image">CLASSIC</div></Col>
                    <Col className="second-image"><div className="text-over-image">SAFARI</div></Col>
                    <Col className="third-image"><div className="text-over-image" id="black-text">MANDARIN</div></Col>
                </Row>

                <hr className="line-divider"></hr>

                <Carousel>
                    <div className="review">
                        <div className="quotation"></div>
                        <p className="review-text">As a man who wears Linen all year round Dundas London shirts are a staple in my wardrobe, crisply ironed or pulled out of a rucksack they wear well.</p>
                        <p className="author">Robbie Honey — Author and Botanical Adventurer</p>
                    </div>
                    <div className="review">
                        <div className="quotation"></div>
                        <p className="review-text"> As a man who wears Linen all year round Dundas London shirts are a staple in my wardrobe, crisply ironed or pulled out of a rucksack they wear well.</p>
                        <p className="author">Robbie Honey — Author and Botanical Adventurer</p>
                    </div>
                </Carousel>

                <hr className="line-divider"></hr>

                <Row className="second-row-body">
                    <Col className="container-bottom">
                        <div className="first-image-bottom">
                        </div>
                        <p className="title-image-bottom">Best Linen</p>
                        <p className="text-image-bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper.</p>
                    </Col>
                    <Col className="container-bottom">
                        <div className="second-image-bottom">
                        </div>
                        <p className="title-image-bottom">Classic Cut</p>
                        <p className="text-image-bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper.</p>
                    </Col>
                    <Col className="container-bottom">
                        <div className="third-image-bottom">
                        </div>
                        <p className="title-image-bottom">Sustainable</p>
                        <p className="text-image-bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper.</p>
                    </Col>
                </Row>
                <Row className="discover-container">
                    <div className="discover-button">SHOP</div>
                </Row>

                <hr className="line-divider"></hr>

                <Row className="body-text-bottom">Free Delivery On All UK Mainland Orders</Row>
            </div>
        </div>)
    }
}

export default Body;