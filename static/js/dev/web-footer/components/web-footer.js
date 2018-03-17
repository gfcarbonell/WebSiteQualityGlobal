"use strict";
import React from "react";
import $ from "jquery";
import "materialize-css";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";


class WebFooter extends React.Component {

  constructor(props){
    super(props);
  }
  componentDidMount(){
      $(".materialboxed").materialbox();
  }
  render (){
    return (
        <footer className="page-footer light-green darken-1 border-top-white-2">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <Slide left>
                   <h5 className="white-text font-shadow-black font-weight-bold center-align">QUALITY GLOBAL ASESORES Y CONSULTORES E.I.R.L.</h5>
                </Slide>
                <Fade bottom>
                    <em className="grey-text text-lighten-5 center-align"> "Nos gusta lo que hacemos, excelencia en nuestros servicios". </em>
                </Fade>
                <figure className="footer-logo">
                  <img className="z-depth-4 materialboxed" src={require(`./../../../../media/images/png/QG1.png`)}  alt="Quality Global"/>
                </figure>
              </div>

              <div className="col l4 offset-l2 s12">
                <Zoom left cascade>
                  <h5 className="white-text font-shadow-black font-weight-bold"> Contactanos en:</h5>
                  <div>
                      <li><i className="icon-phone prefix Small "></i> (056) - 306603 </li>
                      <li><i className="icon-phone2 prefix Small"></i> 988089064 - 944891175 (R.P.M.) </li>
                      <li><i className="icon-office prefix Small"></i> Urb. Campo Alegre C-11 - Ica </li>
                      <li><i className="icon-envelop prefix Small"></i> info@qygconsultores.com </li>
                      <li><i className="icon-mail prefix Small"></i> qygconsultores@gmail.com </li>
                  </div>
                </Zoom>
              </div>
            </div>
          </div>
          <div className="footer-copyright font-shadow-black border-top-white-2">
            <div className="container ">
            © 2018 Copyright - Quality Global
            <a className="grey-text text-lighten-1 right" href="#!">www.qygconsultores.com</a>
            </div>
          </div>
        </footer>
    )
  }

}
export {WebFooter}
