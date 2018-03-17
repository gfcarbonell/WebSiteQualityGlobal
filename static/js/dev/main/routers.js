import React from "react";
import ReactDOM from "react-dom";
import {mainStore} from "./stores";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {DashboardWebPortal} from "../web-portal/dashboards";


ReactDOM.render(
      <Provider store={mainStore}>
          <BrowserRouter>
                <DashboardWebPortal />
          </BrowserRouter>
      </Provider>
      ,
  document.getElementById("main")
);
