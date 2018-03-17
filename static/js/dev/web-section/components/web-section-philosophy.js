"use strict";
import React from "react";
import $ from "jquery"

import { Parallax, Background } from "react-parallax";

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};
const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};

const image1 = "https://itpropartners.com/blog/wp-content/uploads/2016/03/Fotolia_52402403_Subscription_Monthly_M.jpg";
const image2 = "http://www.intac-edu.com/sites/default/files/architecture-reseau.jpg";
const image3 = "https://3.bp.blogspot.com/-o03iQ6O_Udo/WZL3D94lUGI/AAAAAAAAMSY/DORdGwnEIKQBrDYQ1QJC5Vg1Iw5ivpTXgCLcBGAs/s640/Contabilidad%2By%2Basesor%25C3%25ADa%2Bpara%2Bagencias%2Bde%2Bviajes.jpg";


class WebSectionPhilosophy extends React.Component {
  render() {
      return (
        <div style={styles}>

          <Parallax bgImage={image1} strength={500}>
            <div className="blank">
            </div>
            <div style={{height: 400}}>
              <div className="inside-styles z-depth-4">
                  <h3 className="white-text font-shadow-black font-weight-bold"> Quiénes somos</h3>
                  <p className="white-text font-shadow-black">
                      <strong> Quality Global </strong>, es una empresa moderna y de calidad dedicada a la Asesoría,
                      Consultoría y Capacitación en el ámbito de la Gestión Publica y Empresarial,
                      con amplia experiencia, capacidad, efectividad y competitividad de nuestro personal.
                  </p>
              </div>
            </div>
          </Parallax>

          <Parallax bgImage={image3} strength={500}>
            <div className="blank">
            </div>
            <div style={{height: 400}}>
              <div className="inside-styles z-depth-4">
                  <h3 className="white-text font-shadow-black font-weight-bold"> Misión </h3>
                  <p className="white-text font-shadow-black">
                      Ser una Empresa  Líder en Asesoría, Consultoría y
                      Capacitación en Gestión Pública y Empresarial.
                  </p>
              </div>
            </div>
          </Parallax>

          <Parallax bgImage={image2} strength={500}>
            <div className="blank">
            </div>
            <div style={{height: 400}}>
              <div className="inside-styles z-depth-4">
                  <h3 className="white-text font-shadow-black font-weight-bold"> Visión </h3>
                  <p className="white-text font-shadow-black">
                      Ser una Empresa  Líder en Asesoría, Consultoría y
                      Capacitación en Gestión Publica y Empresarial.
                  </p>
              </div>
            </div>
          </Parallax>
        </div>
      )
  }
}

export {WebSectionPhilosophy}
