"use strict";
import React from "react";
import $ from "jquery";
import "materialize-css";
import {MediaBox}  from "react-materialize";


class WebHeader extends React.Component {

  constructor(props){
    super(props);
  }
  componentDidMount(){

  }
  render (){
    return (
        <div className="main-header box-shadow-white">
            <figure className="main-header-logo">
                <MediaBox src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2000px-Python-logo-notext.svg.png" caption="A demo media box1"/>
            </figure>
            <div className="main-header-title">
                <h1 className="white-text font-shadow-black font-weight-bold"> Quality Global </h1>
            </div>
            <figure className="main-header-logo">
                <MediaBox src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2000px-Python-logo-notext.svg.png" caption="A demo media box1"/>
            </figure>
        </div>
    )
  }

}
export {WebHeader}
