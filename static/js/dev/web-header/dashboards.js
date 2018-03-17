"use strict";
import React from "react";
import $ from "jquery";
import "materialize-css";
import {WebHeader} from "./components/web-header";
import {WebSlider} from "./components/web-slider";


class DashBoardHeader extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  render (){
    return (
        <div className="">
            <WebHeader />
            <WebSlider />
        </div>
    )
  }

}
export {DashBoardHeader}
