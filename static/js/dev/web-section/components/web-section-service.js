"use strict";
import React from "react";
import $ from "jquery";
import "materialize-css";
import {MediaBox}  from "react-materialize";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";
import Pulse from "react-reveal/Pulse";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";


const inventaries = [
  require(`./../../../../media/images/gif/Barcode-1.gif`),
  require(`./../../../../media/images/jpg/BarcodeQR-1.jpg`),
  require(`./../../../../media/images/jpg/Inventary-3.jpg`),
  require(`./../../../../media/images/jpg/Inventary-4.jpg`)
];

const inventariesServices = [
    "Inventarios Físicos", "Inventario de Activos Fijos",
    "Inventarios Asociados", "Outsourcing", "Consultoría en Gestión de Inventarios",
    "Servicio de Codificación y Etiquetado", "Cursos de Capacitación y otros."
]

class WebSectionService extends React.Component {

  constructor(props){
      super(props);
  }

  componentDidMount(){
      $('.modal').modal({preventScrolling:false});
      $('.carousel').carousel({
            dist:0,
            shift:70,
            fullWidth:true
      });
      $('.collapsible').collapsible();
  }

  render (){
    return (
        <div>
            <div>
                <Zoom left>
                  <div className="z-depth-4">
                    <h4 className="white-text font-shadow-black font-weight-bold padding-2">
                        Nuestros Servicios
                    </h4>

                    <p className="sub-border">

                    </p>
                    <p className="border-bottom-red-2">
                    </p>
                    </div>
                </Zoom>
            </div>
                <div className="services">
                    {
                      //Servicio de Inventario.
                    }

                    <Zoom left>
                        <article className="post">
                            <a className="post-modal waves-effect waves-light modal-trigger" href="#post1">
                                <figure>
                                    <div>
                                        <img src={require(`./../../../../media/images/jpg/Inventary-1.jpg`)} />
                                    </div>
                                    <figcaption>
                                        <h5 className="center-align light grey-text text-lighten-3 font-shadow-black">
                                            Servicio de Inventario
                                        </h5>
                                    </figcaption>
                                </figure>
                            </a>
                        </article>
                    </Zoom>
                    {
                      //Modal Post
                    }
                    <article id="post1" className="modal modal-fullscreen">
                        {
                          //Header
                        }
                        <div className="modal-header">
                            {
                              //Nav Bar
                            }
                            <div className="modal-nav light-green darken-1">
                                <a href="#!" className="modal-action modal-close waves-effect waves-green center-align font-shadow-black">
                                    <i className="material-icons prefix small">chevron_left</i>
                                </a>
                                <div>
                                      <h2 className="white-text font-shadow-black font-weight-bold">
                                          Quality Global
                                      </h2>
                                </div>
                                <figure>
                                      <MediaBox src={require(`./../../../../media/images/png/QG3.png`)} caption=""/>
                                </figure>
                            </div>
                        </div>
                        {
                          //Content
                        }
                        <div className="modal-content">
                              {
                                //Body
                              }
                              <div className="modal-content-body">
                                  {
                                    //Detail
                                  }
                                  <div className="modal-detail">
                                      <figure className="modal-detail-main">
                                          <div>
                                              <Bounce top>
                                                  <img className="waves-effect waves-light" src={require(`./../../../../media/images/jpg/Inventary-2.jpg`)} />
                                              </Bounce>
                                          </div>
                                          <figcaption className="modal-detail-main-content">
                                              <Zoom>
                                                  <h5 className="center-align white-text font-shadow-black font-weight-bold">
                                                      Servicio de Inventario Físico
                                                  </h5>
                                              </Zoom>
                                              <Zoom left>
                                                  <p>
                                                      Los <strong> Inventarios Físicos </strong> son actividad clave para una adecuada
                                                      gestión empresarial.
                                                      Permiten mantener un control total sobre las existencias y los activos fijos,
                                                      también ayudan a mantener al día sus registros contables,
                                                      como sustento de los saldos presentados en los estados financieros y el cumplimiento tributario.
                                                  </p>
                                              </Zoom>
                                          </figcaption>
                                      </figure>
                                      {
                                        //List
                                      }
                                      <Zoom right>
                                          <ul className="collapsible box-shadow-black">
                                            <li>
                                              <div className="collapsible-header">
                                                <i className="material-icons green-text">assignment</i>
                                                    Nuestros Servicios Incluyen:
                                              </div>
                                              <div className="collapsible-body">
                                                  <ul className="">
                                                      {
                                                          inventariesServices.map((item, index)=>{
                                                          return (
                                                                  <Slide>
                                                                      <li className="carousel-item" href="#one!">
                                                                           <i className="material-icons green-text prefix">check</i>
                                                                           {item}
                                                                      </li>
                                                                  </Slide>
                                                          )
                                                        })
                                                      }
                                                  </ul>
                                              </div>
                                            </li>
                                          </ul>
                                      </Zoom>
                                      {
                                        //Carousel
                                      }
                                      <Fade  bottom>
                                          <div className="carousel margin-up-down-1 box-shadow-black">
                                             {
                                                 inventaries.map((photo, index)=>{
                                                 return (
                                                            <a className="carousel-item" href="#one!">
                                                                <img src={photo} />
                                                            </a>
                                                 )
                                               })
                                             }
                                           </div>
                                       </Fade >
                                  </div>
                              </div>
                        </div>
                    </article>

                    {
                      //Diagnostico de Gestión Contable y Patrimonial.
                    }
                    <Zoom top>
                        <article className="post">
                            <a className="post-modal waves-effect waves-light modal-trigger" href="#post1">
                                <figure>
                                    <div>
                                        <img src={require(`./../../../../media/images/jpg/Accounting-1.jpg`)} />
                                    </div>
                                    <figcaption>
                                        <h5 className="center-align light grey-text text-lighten-3 font-shadow-black">
                                            Diagnostico de Gestión Contable y Patrimonial.
                                        </h5>
                                    </figcaption>
                                </figure>
                            </a>
                        </article>
                    </Zoom>
                    {
                      //Servicio de Liquidación de Obras Públicas.
                    }
                    <Zoom bottom>
                        <article className="post">
                            <a className="post-modal waves-effect waves-light modal-trigger" href="#post1">
                                <figure>
                                    <div>
                                        <img src={require(`./../../../../media/images/jpg/Accounting-2.jpg`)} />
                                    </div>
                                    <figcaption>
                                        <h5 className="center-align light grey-text text-lighten-3 font-shadow-black">
                                            Servicio de Liquidación de Obras Públicas.
                                        </h5>
                                    </figcaption>
                                </figure>
                            </a>
                        </article>
                    </Zoom>
                    {
                      //Regularización y Transferencia Documentaria.
                    }
                    <Zoom right>
                        <article className="post">
                            <a className="post-modal waves-effect waves-light modal-trigger" href="#post1">
                                <figure>
                                    <div>
                                        <img src={require(`./../../../../media/images/jpg/Procedure-1.jpg`)} />
                                    </div>
                                    <figcaption>
                                        <h5 className="center-align light grey-text text-lighten-3 font-shadow-black">
                                            Regularización Documentaria del Proceso de Transferencia en Gestión Pública.
                                        </h5>
                                    </figcaption>
                                </figure>
                            </a>
                        </article>
                    </Zoom>
                    {
                      //Elaboración de Estados Financieros.
                    }
                    <Zoom left>
                        <article className="post">
                            <a className="post-modal waves-effect waves-light modal-trigger" href="#post1">
                                <figure>
                                    <div>
                                        <img src={require(`./../../../../media/images/jpg/Banking-1.jpg`)} />
                                    </div>
                                    <figcaption>
                                        <h5 className="center-align light grey-text text-lighten-3 font-shadow-black">
                                            Elaboración de Estados Financieros
                                        </h5>
                                    </figcaption>
                                </figure>
                            </a>
                        </article>
                    </Zoom>
                    {
                      //Conciliaciones Bancarias.
                    }
                    <Zoom top>
                        <article className="post">
                            <a className="post-modal waves-effect waves-light modal-trigger" href="#post1">
                                <figure>
                                    <div>
                                        <img src={require(`./../../../../media/images/jpg/Banking-2.jpg`)} />
                                    </div>
                                    <figcaption>
                                        <h5 className="center-align light grey-text text-lighten-3 font-shadow-black">
                                            Conciliaciones Bancarias
                                        </h5>
                                    </figcaption>
                                </figure>
                            </a>
                        </article>
                    </Zoom>
                    {
                      //Entrenamiento y Capacitación Personalizada.
                    }
                    <Zoom bottom>
                        <article className="post">
                            <a className="post-modal waves-effect waves-light modal-trigger" href="#post1">
                                <figure>
                                    <div>
                                        <img src={require(`./../../../../media/images/jpg/Capacitation-1.jpg`)} />
                                    </div>
                                    <figcaption>
                                        <h5 className="center-align light grey-text text-lighten-3 font-shadow-black">
                                            Entrenamiento y Capacitación Personalizada.
                                        </h5>
                                    </figcaption>
                                </figure>
                            </a>
                        </article>
                    </Zoom>
                    {
                      //Entrenamiento y Capacitación Personalizada.
                    }
                    <Zoom right>
                        <article className="post">
                            <a className="post-modal waves-effect waves-light modal-trigger" href="#post1">
                                <figure>
                                    <div>
                                        <img src={require(`./../../../../media/images/jpg/Management-1.jpg`)} />
                                    </div>
                                    <figcaption>
                                        <h5 className="center-align light grey-text text-lighten-3 font-shadow-black">
                                            Asesoramiento y Capacitación en Gestión Pública.
                                        </h5>
                                    </figcaption>
                                </figure>
                            </a>
                        </article>
                    </Zoom>


                    {
                      //Asesoría y Entrenamiento Profesional.
                    }
                    <Zoom left>
                        <article className="post">
                            <a className="post-modal waves-effect waves-light modal-trigger" href="#post1">
                                <figure>
                                    <div>
                                        <img src={require(`./../../../../media/images/jpg/Computer-Lab-1.jpg`)} />
                                    </div>
                                    <figcaption>
                                        <h5 className="center-align light grey-text text-lighten-3 font-shadow-black">
                                            Asesoría y Capacitación Profesional (SIAF, SEACE, etc.).
                                        </h5>
                                    </figcaption>
                                </figure>
                            </a>
                        </article>
                    </Zoom>
                    {
                      //Conciliaciones Bancarias.
                    }
                    <Zoom top>
                        <article className="post">
                            <a className="post-modal waves-effect waves-light modal-trigger" href="#post1">
                                <figure>
                                    <div>
                                        <img src={require(`./../../../../media/images/jpg/Capacitation-2.jpg`)} />
                                    </div>
                                    <figcaption>
                                        <h5 className="center-align light grey-text text-lighten-3 font-shadow-black">
                                            Cursos Virtuales en Gestión Pública
                                        </h5>
                                    </figcaption>
                                </figure>
                            </a>
                        </article>
                    </Zoom>
                    {
                      //Entrenamiento y Capacitación Personalizada.
                    }
                    <Zoom bottom>
                        <article className="post">
                            <a className="post-modal waves-effect waves-light modal-trigger" href="#post1">
                                <figure>
                                    <div>
                                        <img src={require(`./../../../../media/images/jpg/Software-1.jpg`)} />
                                    </div>
                                    <figcaption>
                                        <h5 className="center-align light grey-text text-lighten-3 font-shadow-black">
                                            Desarrollo de Software para Entidades Públicas.
                                        </h5>
                                    </figcaption>
                                </figure>
                            </a>
                        </article>
                    </Zoom>
                    {
                      //Entrenamiento y Capacitación Personalizada.
                    }
                    <Zoom right>
                        <article className="post">
                            <a className="post-modal waves-effect waves-light modal-trigger" href="#post1">
                                <figure>
                                    <div>
                                        <img src={require(`./../../../../media/images/jpg/Coaching-1.jpg`)} />
                                    </div>
                                    <figcaption>
                                        <h5 className="center-align light grey-text text-lighten-3 font-shadow-black">
                                            Coaching en Gestión Pública.
                                        </h5>
                                    </figcaption>
                                </figure>
                            </a>
                        </article>
                    </Zoom>
                </div>
      </div>
    )
  }
}
export {WebSectionService}
