import "./Footer.css"
import React, {Component} from "react";
import GooglePlay from "./images/GooglePlay-Logo.svg"
import AppleStore from "./images/AppStore_logo.svg"

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container footer_sec">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-2 logo">
                            <img src="#" alt="Company Logo"/>
                            <div className="download mt-3">
                                <h2>DOWNLOAD OUR APP</h2>
                                <a href="#">
                                    <img src={AppleStore} alt="AppStore_logo"/>
                                </a>
                                <a href="#">
                                    <img src={GooglePlay} alt="GooglePlay-Logo"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-2">
                            <h2>LaunWash</h2>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Blogs</a></li>
                                <li><a href="#">Contact US</a></li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <h2>OUR SERVICES</h2>
                            <ul>
                                <li><a href="#">Wash & Fold</a></li>
                                <li><a href="#">Dry Cleaning</a></li>
                                <li><a href="#">Shirt Laundry</a></li>
                                <li><a href="#">Beddings</a></li>
                                <li><a href="#">Shoes Care</a></li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <h2>JOIN OUR TEAM</h2>
                            <ul>
                                <li><a href="#">Partner With Us</a></li>
                                <li><a href="#">Become a rider</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                        <div className="col-2" id="socials">
                            <h2>OUR SOCIALS</h2>
                            <ul>
                                <a href="#"><li><i className="fa-brands fa-facebook pe-1"></i>facebook</li></a>
                                <a href="#"><li><i className="fa-brands fa-square-twitter pe-1"></i>twitter</li></a>
                                <a href="#"><li><i className="fa-brands fa-instagram pe-1"></i>instagram</li></a>
                                <a href="#"><li><i className="fa-brands fa-linkedin pe-1"></i>LInkedIn</li></a>
                                <a href="#"><li><i className="fa-brands fa-tiktok pe-1"></i>tiktok</li></a>
                            </ul>
                        </div>
                        <div className="col-1"></div>
                    </div> 
                    <p className="mt-3">&copy; 2023 LaunWash. All Rights Reserved</p> 
                </div>
            </footer>
        )
    }
}

export default Footer;