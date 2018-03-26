"use strict";
import React from "react";
import $ from "jquery";
import {Route, Switch} from "react-router-dom";
//Import Component Main
import {WebFooter} from "../web-footer/components/web-footer";
import {DashBoardHeader} from "../web-header/dashboards";
import {DashboardWebSectionHome} from "../web-section/dashboards";
import {SystemAside} from "../web-aside/components/system-aside";
import {SNAside} from "../web-aside/components/sn-aside";


class DashboardWebPortal extends React.Component {

  constructor(props){
    super(props);
  }

  render (){
    return (
        <div>
            <DashBoardHeader />
              <SNAside />

              <section>
                  <main>
                      <Switch>
                          <Route path="/" component={DashboardWebSectionHome} />
                      </Switch>
                  </main>
              </section>
              <SystemAside />
            <WebFooter />
        </div>
    )
  }

}
export {DashboardWebPortal}
