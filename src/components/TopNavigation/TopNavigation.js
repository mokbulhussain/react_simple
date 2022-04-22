import React, {Component, Fragment} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import logo from '../../asset/images/logo.png';
import logoScroll from '../../asset/images/logoScroll.png';
import '../../asset/css/bootstrap.min.css';
import '../../asset/css/custom.css';



class TopNavigation extends Component {
    constructor() {
        super();
        this.state={
            navTitle:"navTitle",
            navLogo:[logo],
            navBackground:'navBackground',
            navItem:'navItem'
        }
    }

    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navTitle:'navTitleScroll',navLogo:[logoScroll],navBackground:'navBackgroundScroll',navItem:'navItemScroll'})
        }
        else if(window.scrollY<100){
            this.setState({navTitle:'navTitle',navLogo:[logo],navBackground:'navBackground',navItem:'navItem'})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll);
    }


    render() {
        return (
            <Fragment>
                <Navbar fixed="top" collapseOnSelect expand="lg" className={this.state.navBackground} variant="dark">
                    <Container>
                        <Navbar.Brand className={this.state.navTitle} href="#home"> <img src={this.state.navLogo} /> Mokbul</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            </Nav>
                            <Nav>
                                <Nav.Link  className={this.state.navItem} href="#deets">HOME</Nav.Link>
                                <Nav.Link className={this.state.navItem} href="#deets">SERVICE</Nav.Link>
                                <Nav.Link className={this.state.navItem} href="#deets">COURSE</Nav.Link>
                                <Nav.Link className={this.state.navItem} href="#deets">PORTFOLIO</Nav.Link>
                                <Nav.Link className={this.state.navItem} href="#deets">CONTACT</Nav.Link>
                                <Nav.Link className={this.state.navItem} href="#deets">ABOUT</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;