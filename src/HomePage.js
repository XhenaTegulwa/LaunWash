import "./HomePage.css"
import campus from "./images/American_Airlines_Interior.webp"
import orangeCircleArrow from "./images/orange_circle_arrow_copy-5_2x.webp"
import React, {Component} from "react";

class HomePage extends Component {
    render(){
        return (
            <div className="main">
                <div className="banner_img">
                    <div className="text">
                        <h2>At your <strong>service.</strong></h2>
                        <h6>Uganda's <strong># 1 brand</strong> in dry <br/> cleaning.</h6>
                        <a href="#">Do you have Laundry?</a>
                    </div>
                </div>
                <div className="services">
                    <p>Laundry and dry cleaning services from the brand you trust.</p> 
                    <div className="services_images">
                        <a className="wash_and_fold" href="#">
                            <div className="wash-img" id="wash_and_fold"></div>   
                            Wash and Fold <br/>laundry       
                        </a>
                        <a className="wash_and_fold" href="#">
                            <div className="wash-img" id="dry_cleaning"></div>   
                            Dry cleaning       
                        </a> 
                        <a className="wash_and_fold" href="#">
                            <div className="wash-img" id="shirt"></div>   
                            Shirt Laundry      
                        </a>
                        <a className="wash_and_fold" href="#">
                            <div className="wash-img" id="outerwear"></div>   
                            Outerwear      
                        </a>
                        <a className="wash_and_fold" href="#">
                            <div className="wash-img" id="beddings"></div>   
                            Beddings     
                        </a>
                        <a className="wash_and_fold" href="#">
                            <div className="wash-img" id="shoes"></div>   
                            Shoes     
                        </a>       
                    </div>  
                </div>
                <hr />
                <div className="categories">
                    <h2>Clean.Anytime.Anywhere</h2>
                    <div className="container">
                        <div className="row gx-3">
                            <div className="col-1"></div>
                            <div className="col-2 card_1">
                                <a href="#">
                                    <div class="card">
                                        <img src={campus} alt="" class="card-img"/>
                                        <p>CAMPUS</p>
                                        <div class="card_icon">
                                            <img src={orangeCircleArrow} alt=""/>
                                        </div>
                                    </div>
                                </a>     
                            </div>
                            <div className="col-2 card_1">
                                <a href="#">
                                    <div className="card">
                                        <img src={campus} alt="" className="card-img"/>
                                        <p>CAMPUS</p>
                                        <div className="card_icon">
                                            <img src={orangeCircleArrow} alt=""/>
                                        </div>
                                    </div>
                                </a>     
                            </div>
                            <div className="col-2 card_1">
                                <a href="#">
                                    <div className="card">
                                        <img src={campus} alt="" className="card-img"/>
                                        <p>CAMPUS</p>
                                        <div className="card_icon">
                                            <img src={orangeCircleArrow} alt=""/>
                                        </div>
                                    </div>
                                </a>     
                            </div>
                            <div className="col-2 card_1">
                                <a href="#">
                                    <div className="card">
                                        <img src={campus} alt="" className="card-img"/>
                                        <p>CAMPUS</p>
                                        <div className="card_icon">
                                            <img src={orangeCircleArrow} alt=""/>
                                        </div>
                                    </div>
                                </a>     
                            </div>
                            <div className="col-2 card_1">
                                <a href="#">
                                    <div className="card">
                                        <img src={campus} alt="" className="card-img"/>
                                        <p>CAMPUS</p>
                                        <div className="card_icon">
                                            <img src={orangeCircleArrow} alt=""/>
                                        </div>
                                    </div>
                                </a>     
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </div>
                </div>
                <div className="find_us">
                    <h2><strong>Need our services</strong></h2>
                    <a href="#">
                        Do you have Laundry?
                    </a>
                </div>
                <div className="reviews container-fluid">
                    <h3 class="pt-5"><strong>Hear what others have to say about us, you will Love it.</strong></h3>
                    <div className="review_slider">
                        {/* Reviews to be here */}
                        <div className="row slider">
                            <div className="col-2"></div>
                            <div id="carouselExampleIndicators" className="carousel slide mb-4 col-8" data-bs-ride="true">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" ></button>
                                    <button  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel_inner">
                                    <div className="carousel-item active" style={{height: 300}}>
                                        <div className="row mt-5">
                                            <div className="col-4">
                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo consequuntur praesentium eveniet, debitis cumque distinctio.</p>
                                            </div>
                                            <div className="col-4">
                                                <p>Lorem ipsum dolor sit.</p>
                                            </div>
                                            <div className="col-4">
                                                <p>Lorem ipsum dolor sit.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" style={{height: 300}}>
                                        <div className="row mt-5">
                                            <div className="col-4">
                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo consequuntur praesentium eveniet, debitis cumque distinctio.</p>
                                            </div>
                                            <div className="col-4">
                                                <p>Lorem ipsum dolor sit.</p>
                                            </div>
                                            <div className="col-4">
                                                <p>Lorem ipsum dolor sit.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" style={{height: 300}}>
                                        <div className="row mt-5">
                                            <div className="col-4">
                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo consequuntur praesentium eveniet, debitis cumque distinctio.</p>
                                            </div>
                                            <div className="col-4">
                                                <p>Lorem ipsum dolor sit.</p>
                                            </div>
                                            <div className="col-4">
                                                <p>Lorem ipsum dolor sit.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;