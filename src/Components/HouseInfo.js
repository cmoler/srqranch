import {Slide} from "react-slideshow-image";
import React, {Component} from "react";

export class HouseInfo extends Component {

    render() {
        const slideImages = [
            'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
            'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
            'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg'
        ];

        const properties = {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            arrows: true
        };

        return(
            <div>
                <h1>House Info</h1>
                <Slide {...properties}>
                    <div className="each-fade">
                        <div className="image-container">
                            <img src={slideImages[0]} />
                        </div>
                        <h2>First Slide</h2>
                    </div>
                    <div className="each-fade">
                        <div className="image-container">
                            <img src={slideImages[1]} />
                        </div>
                        <h2>Second Slide</h2>
                    </div>
                    <div className="each-fade">
                        <div className="image-container">
                            <img src={slideImages[2]} />
                        </div>
                        <h2>Third Slide</h2>
                    </div>
                </Slide>
            </div>
        );
    }
}