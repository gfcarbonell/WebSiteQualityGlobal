"use strict";
import React from "react";
import $ from "jquery";
import "materialize-css";


class WebSectionCarousel extends React.Component {

  constructor(props){
    super(props);
  }
  componentDidMount(){
      $('.carousel.carousel-slider').carousel({
        dist: 0,
        padding: 0,
        fullWidth: true,
        indicators: true,
        duration: 100,
      });
      this.autoplay();
  }

  autoplay() {
      $('.carousel').carousel('next');
      setTimeout(this.autoplay, 3000);
  }

  render (){
    return (
      <div className="carousel carousel-slider">
          <a className="carousel-item" href="#one!">
              <img src={require(`./../../../../media/images/jpg/Management-8.jpg`)}/>
          </a>
          <a className="carousel-item" href="#one!">
              <img src={require(`./../../../../media/images/jpg/Management-2.jpg`)}/>
          </a>
          <a className="carousel-item" href="#one!">
              <img src={require(`./../../../../media/images/jpg/Management-9.jpg`)}/>
          </a>
      </div>
    )
  }

}
export {WebSectionCarousel}
