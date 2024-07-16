import "./Header.css"
import React, {Component} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Header extends Component {
    render (){
        return (
            <div className="Header">
                <div className="upperHeader">
                    <div className="d-flex justify-content-between mx-5 py-4">
                        <div className="logo">
                            <img src="" alt="Company Logo" /> 
                        </div>
                        <div className="searchBox">
                            <form action="">
                                <input type="text" placeholder="Search..." id="search-bar"/>
                            </form>
                        </div>
                    </div>
                    
                </div>
                <div className="lowerHeader">
                    <Navbar expand="lg">
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="navBar">
                                    <Nav.Link href="#home" className="navItem">Home</Nav.Link>
                                    <div className="dropdown">
                                        <Nav.Link href="#link" className="navItem">Our Services <i class="fa fa-chevron-circle-down" aria-hidden="true"></i></Nav.Link>
                                        <div className="dropdown-content">
                                            <a href="#">Wash & Fold Laundry</a>
                                            <a href="#">Dry Cleaning</a>
                                            <a href="#">Pick Up & Delivery</a>
                                            <a href="#">Shirt Laundry</a>
                                            <a href="#">Houshold Items Cleaning</a>
                                            <a href="#">Shoe Cleaning</a>  
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                    <Nav.Link href="#link" className="navItem">Our Difference <i class="fa fa-chevron-circle-down" aria-hidden="true"></i></Nav.Link>
                                        <div className="dropdown-content">
                                            <a href="#">Why LaunWash</a>
                                            <a href="#">Who We Are</a>
                                            <a href="#">What we Do</a>
                                            <a href="#">Community Impact</a>  
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                    <Nav.Link href="#link" className="navItem">Partner With Us <i class="fa fa-chevron-circle-down" aria-hidden="true"></i></Nav.Link>
                                        <div className="dropdown-content">
                                            <a href="#">Become A Rider</a>
                                            <a href="#">Install Lokers</a> 
                                            <a href="#">Campus Admistrators</a> 
                                        </div>
                                    </div>
                                    <Nav.Link href="#link" className="navItem">Contact Us</Nav.Link>
                                    <Nav.Link href="#link" className="navItem">Blog</Nav.Link>
                                    <Nav.Link href="#link" className="navItem">Careers</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
        )
    }
}
export default Header;