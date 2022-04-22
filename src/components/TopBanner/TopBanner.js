import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0">
                    <div className="topBannerOverlay d-flex align-items-center">
                        <Container>
                            <Row>
                                <Col xl={12}>
                                    <div className="topContent text-center">
                                        <h1 className="topTitle">SOFTWARE ENGINEER</h1>
                                        <h4 className="topSubTitle">Mobile & Web Application</h4>
                                        <Button variant="primary">More Info</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}
export default TopBanner;