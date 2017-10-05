import React, { Component } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slideOne from '../images/slide-1.jpg'
import slideTwo from '../images/slide-2.jpg'
import styled from 'styled-components'

const Slide = styled.img`
  width: 100%;
  margin: 0;
`

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(
    rgba(50, 80, 127, .4), 
    rgba(50, 80, 127, .4));
`


export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      // dotsClass: 'carouselDots',
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      fade: true,
      autoplaySpeed: 3000
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Overlay/>
            <Slide src={slideOne}/>
          </div>
          <div>
            <Overlay/>
            <Slide src={slideTwo}/>
          </div>
        </Slider>
      </div>
    );
  }
}