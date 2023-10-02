import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

export default class upper extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div className="relative">
          <Slider {...settings}>
            <div>
              <video src="/videos/intro1.mp4" className=""></video>
            </div>
            <div>
            <video src="/videos/intro.mp4" className="w-full"></video>
            </div>
          </Slider>
        </div>
      );
    }
  }
