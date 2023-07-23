import "./CarouselHomeStyle.css"
import React from 'react'
import FirstImage from "../assets/first-img.jpg"
import {Link} from "react-router-dom";

export default function Carousel() {
    return (
        <div className="carousel">
            <div className="mask">
                <img className="carousel-img" src={FirstImage} alt="First Image Should be here..."/>
            </div>
            <div className="content">
                <p>HI, I am Gyanendra Pandey!!!</p>
                <h1>Automation Engineer</h1>
                <div>
                    <Link to="/project" className="btn">Projects</Link>
                    <Link to="/about" className="btn btn-light">About Me!</Link>
                </div>
            </div>
        </div>
    )
}
