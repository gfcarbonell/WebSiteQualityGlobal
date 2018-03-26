"use strict";
import React from "react";
import $ from "jquery";


class SNAside extends React.Component {

  constructor(props){
    super(props);
  }

  render (){
    return (
        <aside className="menu bar-sn top-25">
            <a href="https://www.facebook.com/qualityAsesoresyconsultores/" target="_blank"
               classame="center-align">  <img src={require(`./../../../../media/images/svg/Facebook.svg`)}  alt="Facebook"/> </a>
            <a classame="center-align">  <img src={require(`./../../../../media/images/svg/Twitter.svg`)}  alt="Twitter"/> </a>
            <a classame="center-align">  <img src={require(`./../../../../media/images/svg/Youtube.svg`)}  alt="Youtube"/> </a>
            <a classame="center-align">  <img src={require(`./../../../../media/images/svg/Vimeo.svg`)}  alt="Vimeo"/> </a>
            <a classame="center-align">  <img src={require(`./../../../../media/images/svg/WhatsApp.svg`)}  alt="WhatsApp"/> </a>
        </aside>
    )
  }

}
export {SNAside}
