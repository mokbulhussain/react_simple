import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {BarChart, Bar, ResponsiveContainer, XAxis, Tooltip} from "recharts";

class Analysis extends Component {
    constructor() {
        super();
        this.state={
            data:[
                {technology:"java",projects:300},
                {technology:"php",projects:400},
                {technology:"html",projects:300},
                {technology:"css",projects:500},
                {technology:"javascript",projects:300},
                {technology:"python",projects:300},
                {technology:"dotnet",projects:200}
            ]


        }
    }
    render() {
        return (
            <Fragment>
                <Container mt-5>
                    <Row>
                        <Col xl={6}>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart width={150} height={40} data={this.state.data}>
                                    <XAxis dataKey="technology"/>
                                    <Tooltip cursor={false} />
                                    <Bar dataKey="projects" fill="#8884d8" />
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>
                        <Col xl={6}>
                            <p className="text-justify des">To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB. Firebase database system is used where it is necessary to provide realtime data flow facilities.</p>
                            <p className="text-justify des"> I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application. According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel section. </p>
                            <p className="text-justify des"> Application security is a big deal for commercial application. I always ensure security portion of my application, moreover i build a security alert system, to notify admin when his system at risk. </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;