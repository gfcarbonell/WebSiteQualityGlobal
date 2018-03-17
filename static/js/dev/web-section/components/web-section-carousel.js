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
              <img src="http://www.delarosaysegura.com/wp-content/uploads/2011/12/servicios-corporativos-1500x630.jpg"/>
          </a>
          <a className="carousel-item" href="#one!">
              <img src="http://esaed.com/wp-content/uploads/2016/09/GESTION-PUBLICA-1024x876.jpg"/>
          </a>
          <a className="carousel-item" href="#one!">
              <img src="http://razonesdecuba.cubadebate.cu/wp-content/uploads/2017/10/gestionempre.jpg"/>
          </a>
      </div>
    )
  }

}
export {WebSectionCarousel}
