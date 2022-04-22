import React, {Component, Fragment} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import webLogo from '../../asset/images/web.svg';
import graphicsLogo from '../../asset/images/graphics.svg'
import mobileLogo from '../../asset/images/mobile.svg'

class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h2 className="serviceMainTitle text-center text-capitalize">my services</h2>
                    <Row>
                        <Col xl={4}>
                            <div className="serviceCard text-center">
                                <img src={webLogo} alt="" />
                                <h2 className="serviceName">Web Development</h2>
                                <p className="serviceDescription">I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p>
                            </div>
                        </Col>
                        <Col xl={4}>
                            <div className="serviceCard text-center">
                                <img src={graphicsLogo} alt="" />
                                <h2 className="serviceName">Web Development</h2>
                                <p className="serviceDescription">I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p>
                            </div>
                        </Col>
                        <Col xl={4}>
                            <div className="serviceCard text-center">
                                <img src={mobileLogo} alt="" />
                                <h2 className="serviceName">Web Development</h2>
                                <p className="serviceDescription">I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;