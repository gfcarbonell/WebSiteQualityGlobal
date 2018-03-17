"use strict";
import React from "react";
import $ from "jquery";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Roll from 'react-reveal/Roll';

class WebSectionMenu extends React.Component {

  constructor(props){
    super(props);
  }

  render (){
    return (
        <div>
            <div className="z-depth-4">
                <Zoom left>
                    <h3 className="white-text font-shadow-black font-weight-bold padding-2">
                        Bienvenidos
                    </h3>
                </Zoom>
                <p className="sub-border">

                </p>
                <p className="border-bottom-red-2">
                </p>
            </div>
            <div className="row padding-up-down-2">
                <article className="col s12 m6 l4 item">
                  <div className="center item-content">
                    <Fade left>
                        <img className="" src={require(`./../../../../media/images/png/Customer-4.png`)} />
                    </Fade>
                    <Zoom top cascade>
                        <div className="padding-up-down-1">
                            <h4 className=" font-weight-bold">Enfocado al Usuario</h4>
                        </div>
                        <div>
                            <p className="light center">
                                  Profesionales altamente <strong> Competentes y Capacitados </strong>,
                                  nos permiten dar el máximo nivel de Calidad en los
                                  servicios que brindamos.
                            </p>
                        </div>
                    </Zoom>
                  </div>
                </article>
                <article className="col s12 m6 l4 item">
                  <div className="center item-content">
                    <Fade top>
                        <img className="" src={require(`./../../../../media/images/png/Professionals-1.png`)} />
                    </Fade>
                    <Zoom top cascade>
                        <div className="padding-up-down-1">
                            <h4 className=" font-weight-bold">Acelera el desarrollo</h4>
                        </div>
                        <div>
                            <p className="light center">
                                Amplia Experiencia en el campo <strong> Gubernamental y Empresarial </strong> que nos permite comprender
                                los procesos administrativos y estar un paso adelante al plantear soluciones innovadoras y
                                efectivas.
                            </p>
                        </div>
                    </Zoom>
                  </div>
                </article>
                <article className="col s12 m6 l4 item">
                  <div className="center item-content">
                    <Fade right>
                        <img className="" src={require(`./../../../../media/images/png/Customer-6.png`)} />
                    </Fade>
                    <Zoom top cascade>
                        <div className="padding-up-down-1">
                            <h4 className=" font-weight-bold">Fácil de trabajar</h4>
                        </div>
                        <div>
                            <p className="light center">
                                  Sistema de Coaching (entrenamiento) en Gestión Pública que permite
                                  una transferencia de  conocimiento teórico Practico a los funcionarios
                                  en su respectivo centro de trabajo <strong> "Haciendo - Aprendo" </strong>.
                            </p>
                        </div>
                    </Zoom>
                  </div>
                </article>
            </div>
        </div>
    )
  }

}
export {WebSectionMenu}
