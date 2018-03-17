"use strict";
import React from "react";
import $ from "jquery";
import "materialize-css";
import {Slide, Slider}  from "react-materialize";


class WebSlider extends React.Component {

  constructor(props){
    super(props);
  }
  componentDidMount(){
      $(".slider").slider({height: "100vh"});
  }
  render (){
    return (
        <div className="slider"  style={{height:"100vh"}}>
          <ul className="slides">
            <li>
              <img src="http://www.firstcallcss.com/wp-content/uploads/2017/04/banner.png"/>
              <div className="caption center-align font-shadow-black font-weight-bold">
                <h3> Asesoramiento y Capacitación</h3>
                <h5 className="light grey-text text-lighten-3 font-shadow-black">
                    Gestión Pública, Gobierno Locales,
                    Regionales y Empresas Públicas.
                </h5>
              </div>
            </li>
            <li>
              <img src="https://images5.alphacoders.com/546/546186.jpg"/>
              <div className="caption right-align font-shadow-black font-weight-bold">
                <h3>Diagnostico de Gestión</h3>
                <h5 className="light grey-text text-lighten-3 font-shadow-black">
                    Contable, Patrimonial y Saneamiento Contable.
                </h5>
              </div>
            </li>
            <li>
              <img src="https://i0.wp.com/servicities.com/blog/wp-content/uploads/2016/05/7-problemas-de-gesti%C3%B3n-empresarial-en-PYMEs.jpg?ssl=1"/>
              <div className="caption left-align font-shadow-black font-weight-bold">
                <h3>Regularización Documentaria</h3>
                <h5 className="light grey-text text-lighten-3 font-shadow-black">
                    Proceso de Transferencia de la Gestión Administrativa de los
                    Gobiernos Regionales y Locales.
                </h5>
              </div>
            </li>
          </ul>
        </div>
    )
  }

}
export {WebSlider}
