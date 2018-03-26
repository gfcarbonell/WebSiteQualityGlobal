"use strict";
import React from "react";
import $ from "jquery";
import {WebSectionMenu} from "./components/web-section-menu";
import {WebSectionPhilosophy} from "./components/web-section-philosophy";
import {WebSectionCarousel} from "./components/web-section-carousel";
import {WebSectionService} from "./components/web-section-service";


class DashboardWebSectionHome extends React.Component {

  constructor(props){
    super(props);
  }

  render (){
    return (
        <div className="">
            <WebSectionMenu />
            <WebSectionCarousel />
            <WebSectionService />
            <WebSectionPhilosophy />
        </div>
    )
  }

}
export {DashboardWebSectionHome}
