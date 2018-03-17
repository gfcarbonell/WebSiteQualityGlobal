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
                <MediaBox src="https://www.leanpio.com/wp-content/uploads/2017/11/BigHanna-world.gif" caption=""/>
            </figure>
            <div className="main-header-title">
                <h1 className="white-text font-shadow-black font-weight-bold"> Quality Global </h1>
            </div>
            <figure className="main-header-logo">
                <MediaBox src={require(`./../../../../media/images/png/QG3.png`)} caption=""/>
            </figure>
        </div>
    )
  }

}
export {WebHeader}
