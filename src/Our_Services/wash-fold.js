import "./wash-fold.css"
import folded from "../images/folded-laundry-in-a-basket.jpg"
import React, {Component} from "react";
import wash$fold from "../images/TC_150x150_homepage_blue_wash_fold_icon (1).webp"
// import Container from 'react-bootstrap/Container';

class WashFold extends Component {
    render(){
        return(
            <div className="wash-fold">
                 <div className="banner_img">
                    <div className="text">
                        <h1>Wash and Fold Laundry services.</h1>
                    </div>
                </div>
                <div className="description">
                    <h2>We wash, dry and fold your everyday laundry</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quia rem nemo aliquam consectetur minima,<br /> delectus tempore expedita molestiae architecto odio voluptatem numquam vitae eius veniam obcaecati vel,<br /> voluptate enim.
                    Nesciunt voluptates enim quaerat</p>
                </div>
                <div className="find-agent">
                    <h2 className="mb-3">Need us to pick and deliver your everyday laundry?</h2>
                    <a href="#">Reach us  here</a>
                </div>
                <div className="what-is">
                    <div className="whatis-image">
                        <img src={folded} alt="Wash and Fold Image" />
                    </div>
                    <div className="whatis-description">
                        <h3 className="mb-3">What is Wash and Fold Laundry?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, laborum molestiae! Aspernatur voluptate officia doloribus ea eveniet, quasi, perspiciatis, explicabo aliquam asperiores quas sed error? Obcaecati eaque earum ipsa cumque.</p>
                    </div>                    
                </div>
                <div className="how-it-works">
                    <h2 className="mb-3">How our wash and fold laundry service works</h2>
                    <div className="steps">
                        <div className="step">
                            <h3>Step 1</h3>
                            <img src={wash$fold} alt="" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit veniam aspernatur magni consequatur harum qui porro praesentium? Doloremque commodi ad corporis quidem reprehenderit quis ullam nesciunt quas inventore, libero tempora.</p>
                        </div>
                        <div className="step">
                            <h3>Step 1</h3>
                            <img src={wash$fold} alt="" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit veniam aspernatur magni consequatur harum qui porro praesentium? Doloremque commodi ad corporis quidem reprehenderit quis ullam nesciunt quas inventore, libero tempora.</p>
                        </div>
                        <div className="step">
                            <h3>Step 1</h3>
                            <img src={wash$fold} alt="" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit veniam aspernatur magni consequatur harum qui porro praesentium? Doloremque commodi ad corporis quidem reprehenderit quis ullam nesciunt quas inventore, libero tempora.</p>
                        </div>
                    </div>
                </div>
                <div className="what-is">
                    <div className="whatis-description">
                        <h3 className="mb-3">Laundry care from ypur most trusted dry cleaning brand!!!</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, laborum molestiae! Aspernatur voluptate officia doloribus ea eveniet, quasi, perspiciatis, explicabo aliquam asperiores quas sed error? Obcaecati eaque earum ipsa cumque.</p>
                    </div>
                    <div className="whatis-image">
                        <img src={folded} alt="Wash and Fold Image" />
                    </div>                    
                </div>
            </div>
        )
    }
}

export default WashFold