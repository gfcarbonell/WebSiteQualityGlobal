"use strict";
import React from "react";
import $ from "jquery";


class SystemAside extends React.Component {

  constructor(props){
    super(props);
  }

  render (){
    return (
        <aside className="menu bar-system right-0 ">
            <a classame="center-align">  <img src={require(`./../../../../media/images/png/EMail-Green-1.png`)}  alt="E-Mail"/> </a>
            <a classame="center-align">  <img src={require(`./../../../../media/images/png/Control-Panel-1.png`)}  alt="Control-Panel"/> </a>
        </aside>
    )
  }

}
export {SystemAside}
