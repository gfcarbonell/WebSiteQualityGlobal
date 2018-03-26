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

const accountings = [
  require(`./../../../../media/images/jpg/Accounting-5.jpg`),
  require(`./../../../../media/images/jpg/Accounting-6.jpg`),
  require(`./../../../../media/images/jpg/Accounting-7.jpg`),
  require(`./../../../../media/images/jpg/Accounting-8.jpg`)
];


const architects = [
  require(`./../../../../media/images/jpg/Architect-2.jpg`),
  require(`./../../../../media/images/jpg/Architect-3.jpg`),
  require(`./../../../../media/images/jpg/Architect-4.jpg`),
  require(`./../../../../media/images/jpg/Architect-5.jpg`)
];

const procedures = [
  require(`./../../../../media/images/jpg/Procedure-3.jpg`),
  require(`./../../../../media/images/jpg/Procedure-4.jpg`),
  require(`./../../../../media/images/jpg/Procedure-5.jpg`),
  require(`./../../../../media/images/jpg/Procedure-6.jpg`)
];

const financials = [
  require(`./../../../../media/images/jpg/Financial-2.jpg`),
  require(`./../../../../media/images/jpg/Financial-3.jpg`),
  require(`./../../../../media/images/jpg/Financial-4.jpg`),
  require(`./../../../../media/images/jpg/Financial-5.jpg`)
];

const bankyng = [
  require(`./../../../../media/images/jpg/Banking-4.jpg`),
  require(`./../../../../media/images/jpg/Banking-5.jpg`),
  require(`./../../../../media/images/jpg/Banking-6.jpg`),
  require(`./../../../../media/images/jpg/Banking-7.jpg`)
];

const capacitations = [
  require(`./../../../../media/images/jpg/Capacitation-4.jpg`),
  require(`./../../../../media/images/jpg/Capacitation-5.jpg`),
  require(`./../../../../media/images/jpg/Capacitation-6.jpg`),
  require(`./../../../../media/images/jpg/Capacitation-7.jpg`)
];

const managements = [
  require(`./../../../../media/images/jpg/Management-4.jpg`),
  require(`./../../../../media/images/jpg/Management-5.jpg`),
  require(`./../../../../media/images/jpg/Management-6.jpg`),
  require(`./../../../../media/images/jpg/Management-7.jpg`)
];

const courses = [
  require(`./../../../../media/images/jpg/Course-1.jpg`),
  require(`./../../../../media/images/jpg/Course-2.jpg`),
  require(`./../../../../media/images/jpg/Course-3.jpg`),
  require(`./../../../../media/images/jpg/Course-4.jpg`)
];

const virtuals = [
  require(`./../../../../media/images/jpg/Virtual-2.jpg`),
  require(`./../../../../media/images/jpg/Virtual-3.jpg`),
  require(`./../../../../media/images/jpg/Virtual-4.jpg`),
  require(`./../../../../media/images/jpg/Virtual-5.jpg`)
];

const developments = [
  require(`./../../../../media/images/jpg/Software-3.jpg`),
  require(`./../../../../media/images/gif/QG-1.gif`),
  require(`./../../../../media/images/jpg/Software-4.jpg`),
  require(`./../../../../media/images/jpg/Software-5.jpg`)
];

const coaching = [
  require(`./../../../../media/images/jpg/Coaching-3.jpg`),
  require(`./../../../../media/images/jpg/Coaching-4.jpg`),
  require(`./../../../../media/images/jpg/Coaching-5.jpg`),
  require(`./../../../../media/images/jpg/Coaching-6.jpg`)
];

const inventariesServices  = [
    "Inventarios Físicos", "Inventario de Activos Fijos",
    "Inventarios Asociados", "Outsourcing", "Consultoría en Gestión de Inventarios",
    "Servicio de Codificación y Etiquetado", "Cursos de Capacitación y otros."
]

const accountingsServices = [
    "Inventarios Físicos", "Inventario de Activos Fijos",
    "Inventarios Asociados", "Outsourcing", "Consultoría en Gestión de Inventarios",
    "Servicio de Codificación y Etiquetado", "Cursos de Capacitación y otros."
]

const architectsServices = [
    "Inventarios Físicos", "Inventario de Activos Fijos",
    "Inventarios Asociados", "Outsourcing", "Consultoría en Gestión de Inventarios",
    "Servicio de Codificación y Etiquetado", "Cursos de Capacitación y otros."
]

const proceduresServices = [
    "Inventarios Físicos", "Inventario de Activos Fijos",
    "Inventarios Asociados", "Outsourcing", "Consultoría en Gestión de Inventarios",
    "Servicio de Codificación y Etiquetado", "Cursos de Capacitación y otros."
]

const financialsServices = [
    "Inventarios Físicos", "Inventario de Activos Fijos",
    "Inventarios Asociados", "Outsourcing", "Consultoría en Gestión de Inventarios",
    "Servicio de Codificación y Etiquetado", "Cursos de Capacitación y otros."
]

const bankyngServices = [
    "Inventarios Físicos", "Inventario de Activos Fijos",
    "Inventarios Asociados", "Outsourcing", "Consultoría en Gestión de Inventarios",
    "Servicio de Codificación y Etiquetado", "Cursos de Capacitación y otros."
]

const capacitationsServices = [
    "Inventarios Físicos", "Inventario de Activos Fijos",
    "Inventarios Asociados", "Outsourcing", "Consultoría en Gestión de Inventarios",
    "Servicio de Codificación y Etiquetado", "Cursos de Capacitación y otros."
]

const managementsServices = [
    "Inventarios Físicos", "Inventario de Activos Fijos",
    "Inventarios Asociados", "Outsourcing", "Consultoría en Gestión de Inventarios",
    "Servicio de Codificación y Etiquetado", "Cursos de Capacitación y otros."
]

const coursesServices = [
    "Inventarios Físicos", "Inventario de Activos Fijos",
    "Inventarios Asociados", "Outsourcing", "Consultoría en Gestión de Inventarios",
    "Servicio de Codificación y Etiquetado", "Cursos de Capacitación y otros."
]

const virtualsServices = [
    "Inventarios Físicos", "Inventario de Activos Fijos",
    "Inventarios Asociados", "Outsourcing", "Consultoría en Gestión de Inventarios",
    "Servicio de Codificación y Etiquetado", "Cursos de Capacitación y otros."
]

const developmentsServices = [
    "Desarrollo de Software Profesional",
    "Sistema de Planilla y Asistencia",
    "Sistema Logístico e Inventario",
    "Sistema Presupuestal",
    "Sistema de Tesorería",
    "Sistema Tributario."
]

const coachingServices = [
    "Inventarios Físicos", "Inventario de Activos Fijos",
    "Inventarios Asociados", "Outsourcing", "Consultoría en Gestión de Inventarios",
    "Servicio de Codificación y Etiquetado", "Cursos de Capacitación y otros."
]

class WebSectionService extends React.Component {

  constructor(props){
      super(props);
  }

  componentDidMount(){
      $('.modal').modal();
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
                      /*
                        ----------------------------------------------------------
                        Servicio de Inventario.
                        ----------------------------------------------------------
                      */
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
                      //Modal Post Inventarys
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
                      /*
                        ----------------------------------------------------------
                        Diagnostico de Gestión Contable y Patrimonial.
                        ----------------------------------------------------------
                      */
                    }
                    <Zoom top>
                        <article className="post">
                            <a className="post-modal waves-effect waves-light modal-trigger" href="#post2">
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
                      //Modal Post Diagnostico de Gestión Contable y Patrimonial
                    }
                    <article id="post2" className="modal modal-fullscreen">
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
                                                  <img className="waves-effect waves-light" src={require(`./../../../../media/images/jpg/Accounting-4.jpg`)} />
                                              </Bounce>
                                          </div>
                                          <figcaption className="modal-detail-main-content">
                                              <Zoom>
                                                  <h5 className="center-align white-text font-shadow-black font-weight-bold">
                                                      Diagnostico de Gestión Contable y Patrimonial
                                                  </h5>
                                              </Zoom>
                                              <Zoom left>
                                                  <p>
                                                      Los <strong> Gestión Contable </strong>  permite llevar un registro y un control de las
                                                      operaciones financieras que se llevan a cabo en la organización.
                                                      Se trata de un modelo básico que es complementado con un sistema de información que ofrece compatibilidad, control y flexibilidad,
                                                      acompañado con una correcta relación de coste y beneficio.
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
                                                          accountingsServices.map((item, index)=>{
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
                                                 accountings.map((photo, index)=>{
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
                      /*
                        ----------------------------------------------------------
                        Servicio de Liquidación de Obras Públicas.
                        ----------------------------------------------------------
                      */
                    }
                    <Zoom bottom>
                        <article className="post">
                            <a className="post-modal waves-effect waves-light modal-trigger" href="#post3">
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
                      //Modal Servicio de Liquidación de Obras Públicas.
                    }
                    <article id="post3" className="modal modal-fullscreen">
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
                                                  <img className="waves-effect waves-light" src={require(`./../../../../media/images/jpg/Architect-1.jpg`)} />
                                              </Bounce>
                                          </div>
                                          <figcaption className="modal-detail-main-content">
                                              <Zoom>
                                                  <h5 className="center-align white-text font-shadow-black font-weight-bold">
                                                      Servicio de Liquidación en Obras Públicas
                                                  </h5>
                                              </Zoom>
                                              <Zoom left>
                                                  <p>
                                                      La <strong> Liquidación de Obras Públicas </strong> elabora y liquida las valorizaciones mensuales,
                                                      teniendo en cuenta los conceptos de obras adelantadas y obras atrasadas, para que en función a estos
                                                      pueda determinar los reintegros reconocidos.
                                                      Aplica las deducciones y/o amortizaciones debido a los adelantos:
                                                      Adelanto Directo al Contratista y el Adelanto Específico para materiales.
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
                                                          architectsServices.map((item, index)=>{
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
                                                 architects.map((photo, index)=>{
                                                 return (
                                                            <a className="carousel-item" href="#one!">
                                                                <img src={photo} />
                                                            </a>
                                                 )
                                               })
                                             }
                                           </div>
                                      </Fade>
                                  </div>
                              </div>
                        </div>
                    </article>
                    {
                    /*
                      ----------------------------------------------------------
                      Regularización y Transferencia Documentaria.
                      ----------------------------------------------------------
                    */
                    }
                    <Zoom right>
                        <article className="post">
                            <a className="post-modal waves-effect waves-light modal-trigger" href="#post4">
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
                      //Modal Regularización y Transferencia Documentaria.
                    }
                    <article id="post4" className="modal modal-fullscreen">
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
                                                  <img className="waves-effect waves-light" src={require(`./../../../../media/images/jpg/Procedure-2.jpg`)} />
                                              </Bounce>
                                          </div>
                                          <figcaption className="modal-detail-main-content">
                                              <Zoom>
                                                  <h5 className="center-align white-text font-shadow-black font-weight-bold">
                                                      Regularización Documentaria del Proceso de Transferencia en Gestión Pública
                                                  </h5>
                                              </Zoom>
                                              <Zoom left>
                                                  <p>
                                                      La <strong> Transferencia de la Gestión Administrativa (Gestión Pública) </strong> es el proceso mediante el
                                                      cual la <strong> Autoridad Saliente </strong> rinde cuentas a la <strong> Autoridad Electa </strong> en
                                                      forma documentada, de la situación administrativa, operativa,
                                                      económica-financiera, así como de los avances, los resultados, logros
                                                      y asuntos urgentes de prioritaria atención.
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
                                                          proceduresServices.map((item, index)=>{
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
                                                 procedures.map((photo, index)=>{
                                                 return (
                                                            <a className="carousel-item" href="#one!">
                                                                <img src={photo} />
                                                            </a>
                                                 )
                                               })
                                             }
                                           </div>
                                      </Fade>
                                  </div>
                              </div>
                        </div>
                    </article>
                    {
                    /*
                      ----------------------------------------------------------
                      Elaboración de Estados Financieros.
                      ----------------------------------------------------------
                    */
                    }
                    <Zoom left>
                        <article className="post">
                            <a className="post-modal waves-effect waves-light modal-trigger" href="#post5">
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
                      //Modal Elaboración de Estados Financieros.
                    }
                    <article id="post5" className="modal modal-fullscreen">
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
                                                  <img className="waves-effect waves-light" src={require(`./../../../../media/images/jpg/Financial-1.jpg`)} />
                                              </Bounce>
                                          </div>
                                          <figcaption className="modal-detail-main-content">
                                              <Zoom>
                                                  <h5 className="center-align white-text font-shadow-black font-weight-bold">
                                                      Elaboración de Estados Financieros
                                                  </h5>
                                              </Zoom>
                                              <Zoom left>
                                                  <p>
                                                      Los <strong> Estados Financieros </strong> son informes que utilizan las
                                                      entidades para dar a conocer la situación económica y financiera,
                                                      los cambios que experimenta la misma a una fecha o periodo determinado.
                                                      Esta información resulta útil para la Administración, gestores,
                                                      reguladores y otros tipos de interesados como los accionistas,
                                                      acreedores o propietarios.
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
                                                          financialsServices.map((item, index)=>{
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
                                                 financials.map((photo, index)=>{
                                                 return (
                                                            <a className="carousel-item" href="#one!">
                                                                <img src={photo} />
                                                            </a>
                                                 )
                                               })
                                             }
                                           </div>
                                      </Fade>
                                  </div>
                              </div>
                        </div>
                    </article>
                    {
                      /*
                        ----------------------------------------------------------
                        Conciliaciones Bancarias.
                        ----------------------------------------------------------
                      */
                    }
                    <Zoom top>
                        <article className="post">
                            <a className="post-modal waves-effect waves-light modal-trigger" href="#post6">
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
                      //Modal Conciliaciones Bancarias.
                    }
                    <article id="post6" className="modal modal-fullscreen">
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
                                                  <img className="waves-effect waves-light" src={require(`./../../../../media/images/jpg/Banking-3.jpg`)} />
                                              </Bounce>
                                          </div>
                                          <figcaption className="modal-detail-main-content">
                                              <Zoom>
                                                  <h5 className="center-align white-text font-shadow-black font-weight-bold">
                                                      Conciliaciones Bancarias
                                                  </h5>
                                              </Zoom>
                                              <Zoom left>
                                                  <p>
                                                      La <strong> Conciliación de Cuenta Bancaria o Conciliación Bancaria </strong> es un
                                                      proceso que permite confrontar y conciliar los valores económicos que una empresa tiene
                                                      registrados sobre una cuenta, ya sea corriente o de ahorro, con sus movimientos
                                                      bancarios, así como clasificar el libro auxiliar de contabilidad para
                                                      confrontarlo con el extracto.
                                                      La conciliación bancaria no busca en ningún momento
                                                      legalizar los errores, ya que es una mecánica que permite identificar las
                                                      diferencias y sus causas para luego proceder a realizar los respectivos
                                                      ajustes y conexiones, por lo que para realizarla se
                                                      emiten documentos claros y muy precisos para uso del ente económico y así
                                                      llevar en claro un equilibrio del estado de cuenta de dicha entidad.
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
                                                          bankyngServices.map((item, index)=>{
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
                                                 bankyng.map((photo, index)=>{
                                                 return (
                                                            <a className="carousel-item" href="#one!">
                                                                <img src={photo} />
                                                            </a>
                                                 )
                                               })
                                             }
                                           </div>
                                      </Fade>
                                  </div>
                              </div>
                        </div>
                    </article>
                    {
                      /*
                        ----------------------------------------------------------
                        Entrenamiento y Capacitación Personalizada.
                        ----------------------------------------------------------
                      */
                    }
                    <Zoom bottom>
                        <article className="post">
                            <a className="post-modal waves-effect waves-light modal-trigger" href="#post7">
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
                      //Modal Entrenamiento y Capacitación Personalizada.
                    }
                    <article id="post7" className="modal modal-fullscreen">
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
                                                  <img className="waves-effect waves-light" src={require(`./../../../../media/images/jpg/Capacitation-3.jpg`)} />
                                              </Bounce>
                                          </div>
                                          <figcaption className="modal-detail-main-content">
                                              <Zoom>
                                                  <h5 className="center-align white-text font-shadow-black font-weight-bold">
                                                      Entrenamiento y Capacitación Personalizada
                                                  </h5>
                                              </Zoom>
                                              <Zoom left>
                                                  <p>
                                                      El <strong> Entrenamiento y Capacitación Personalizada </strong> se presenta como una de las mejores
                                                      inversiones realizadas por las organizaciones y, a su vez, como una importante fuente de bienestar y
                                                      beneficio tanto para el personal como para lograr altos niveles productivos y,
                                                      de este modo, alcanzar la rentabilidad a la que toda empresa aspira.
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
                                                          capacitationsServices.map((item, index)=>{
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
                                                 capacitations.map((photo, index)=>{
                                                 return (
                                                            <a className="carousel-item" href="#one!">
                                                                <img src={photo} />
                                                            </a>
                                                 )
                                               })
                                             }
                                           </div>
                                      </Fade>
                                  </div>
                              </div>
                        </div>
                    </article>
                    {
                      /*
                        ----------------------------------------------------------
                        Asesoramiento y Capacitación en Gestión Pública.
                        ----------------------------------------------------------
                      */
                    }
                    <Zoom right>
                        <article className="post">
                            <a className="post-modal waves-effect waves-light modal-trigger" href="#post8">
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
                      //Modal Asesoramiento y Capacitación en Gestión Pública.
                    }
                    <article id="post8" className="modal modal-fullscreen">
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
                                                  <img className="waves-effect waves-light" src={require(`./../../../../media/images/jpg/Management-3.jpg`)} />
                                              </Bounce>
                                          </div>
                                          <figcaption className="modal-detail-main-content">
                                              <Zoom>
                                                  <h5 className="center-align white-text font-shadow-black font-weight-bold">
                                                      Asesoramiento y Capacitación en Gestión Pública
                                                  </h5>
                                              </Zoom>
                                              <Zoom left>
                                                  <p>
                                                      La <strong> Gestión Pública </strong>
                                                      es un sistema de límites imprecisos que comprende el conjunto de organizaciones
                                                      públicas que realizan la función administrativa y de gestión del Estado​ y
                                                      de otros entes públicos con personalidad jurídica, ya sean de ámbito regional o local.
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
                                                          managementsServices.map((item, index)=>{
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
                                                 managements.map((photo, index)=>{
                                                 return (
                                                            <a className="carousel-item" href="#one!">
                                                                <img src={photo} />
                                                            </a>
                                                 )
                                               })
                                             }
                                           </div>
                                      </Fade>
                                  </div>
                              </div>
                        </div>
                    </article>
                    {
                      /*
                        ----------------------------------------------------------
                        Asesoría y Capacitación Profesional - Software.
                        ----------------------------------------------------------
                      */
                    }
                    <Zoom left>
                        <article className="post">
                            <a className="post-modal waves-effect waves-light modal-trigger" href="#post9">
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
                      //Modal Asesoramiento y Capacitación en Gestión Pública.
                    }
                    <article id="post9" className="modal modal-fullscreen">
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
                                                  <img className="waves-effect waves-light" src={require(`./../../../../media/images/jpg/Course-5.jpg`)} />
                                              </Bounce>
                                          </div>
                                          <figcaption className="modal-detail-main-content">
                                              <Zoom>
                                                  <h5 className="center-align white-text font-shadow-black font-weight-bold">
                                                      Asesoría y Capacitación Profesional - Software
                                                  </h5>
                                              </Zoom>
                                              <Zoom left>
                                                  <p>
                                                      Los <strong> Sistemas de Gestión Integral para el Gobierno </strong>
                                                      son <strong> Sistemas Informáticos </strong> que permiten registrar, controlar,
                                                      presupuestar, integrar procesos diarios de ingresos y egresos de un ente
                                                      gubernamental en un mismo ambiente, permitiendo obtener un control
                                                      contable y seguimiento de la misma.
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
                                                          coursesServices.map((item, index)=>{
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
                                                 courses.map((photo, index)=>{
                                                 return (
                                                            <a className="carousel-item" href="#one!">
                                                                <img src={photo} />
                                                            </a>
                                                 )
                                               })
                                             }
                                           </div>
                                      </Fade>
                                  </div>
                              </div>
                        </div>
                    </article>
                    {
                      /*
                        ----------------------------------------------------------
                        Cursos Virtuales en Gestión Pública.
                        ----------------------------------------------------------
                      */
                    }
                    <Zoom top>
                        <article className="post">
                            <a className="post-modal waves-effect waves-light modal-trigger" href="#post10">
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
                      //Modal Cursos Virtuales en Gestión Pública.
                    }
                    <article id="post10" className="modal modal-fullscreen">
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
                                                  <img className="waves-effect waves-light" src={require(`./../../../../media/images/jpg/Virtual-1.jpg`)} />
                                              </Bounce>
                                          </div>
                                          <figcaption className="modal-detail-main-content">
                                              <Zoom>
                                                  <h5 className="center-align white-text font-shadow-black font-weight-bold">
                                                      Cursos Virtuales en Gestión Pública
                                                  </h5>
                                              </Zoom>
                                              <Zoom left>
                                                  <p>
                                                      Los <strong> Cursos Virtuales </strong>
                                                      es un espacio en donde los docentes y estudiantes participan
                                                      en un entorno digital a través de las nuevas tecnologías y de las redes de computadoras,
                                                      haciendo uso intensivo de las facilidades que proporciona Internet y las
                                                      tecnologías digitales.
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
                                                          virtualsServices.map((item, index)=>{
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
                                                 virtuals.map((photo, index)=>{
                                                 return (
                                                            <a className="carousel-item" href="#one!">
                                                                <img src={photo} />
                                                            </a>
                                                 )
                                               })
                                             }
                                           </div>
                                      </Fade>
                                  </div>
                              </div>
                        </div>
                    </article>
                    {
                      /*
                        ----------------------------------------------------------
                        Desarrollo de Software para Entidades Públicas.
                        ----------------------------------------------------------
                      */
                    }
                    <Zoom bottom>
                        <article className="post">
                            <a className="post-modal waves-effect waves-light modal-trigger" href="#post11">
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
                    <article id="post11" className="modal modal-fullscreen">
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
                                                  <img className="waves-effect waves-light" src={require(`./../../../../media/images/jpg/Software-2.jpg`)} />
                                              </Bounce>
                                          </div>
                                          <figcaption className="modal-detail-main-content">
                                              <Zoom>
                                                  <h5 className="center-align white-text font-shadow-black font-weight-bold">
                                                      Desarrollo de Software para Entidades Públicas
                                                  </h5>
                                              </Zoom>
                                              <Zoom left>
                                                  <p>
                                                      Enfocamos el <strong> Desarrollo de Software </strong> a las necesidades de cada entidad y
                                                      realizamos el diseño enfocados al usuario final y así darle una mejor experiencia y
                                                      facilidad, aumentando la productividad con una información centralizada, segura y en
                                                      tiempo real, utilizamos las tecnologias de ultima generacion tanto en software de
                                                      <strong> Escritorio, Aplicación (Android - IOS) y Web</strong> mediante óptimos
                                                      <strong> Lenguajes de Programación en Back-End </strong> tales como: <strong> Python (DJango), Ruby (Rails), NodeJS (Express),
                                                      Java (Spring, Hibernate, JavaServerFace), C# (EntityFramework), PHP (Laravel)</strong> y en <strong> Front-End </strong>
                                                      utilizamos <strong>Javascript (EcmaScript 6)</strong> ademas de <strong>Framework y Librerías</strong> tales como:
                                                      <strong> JQuery, BabkboneJS (M.V.C.), ReactJS y VueJS</strong>, ademas utilizamos los nuevos Patrones de Flujos como <strong> Redux y Vuex </strong>
                                                      con una gran variedad de
                                                      <strong> Gestores de Base de Datos</strong> como:<strong> SQLServer, MySQL, MariaDB, PostgreSQL y Microsoft Access</strong>,
                                                      todo de acuerdo a la necedidades de cada entidad.
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
                                                          developmentsServices.map((item, index)=>{
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
                                                 developments.map((photo, index)=>{
                                                 return (
                                                            <a className="carousel-item" href="#one!">
                                                                <img src={photo} />
                                                            </a>
                                                 )
                                               })
                                             }
                                           </div>
                                      </Fade>
                                  </div>
                              </div>
                        </div>
                    </article>
                    {
                      /*
                        ----------------------------------------------------------
                        Coaching en Gestión Pública.
                        ----------------------------------------------------------
                      */
                    }
                    <Zoom right>
                        <article className="post">
                            <a className="post-modal waves-effect waves-light modal-trigger" href="#post12">
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
                    {
                      //Modal Coaching en Gestión Pública.
                    }
                    <article id="post12" className="modal modal-fullscreen">
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
                                                  <img className="waves-effect waves-light" src={require(`./../../../../media/images/jpg/Coaching-2.jpg`)} />
                                              </Bounce>
                                          </div>
                                          <figcaption className="modal-detail-main-content">
                                              <Zoom>
                                                  <h5 className="center-align white-text font-shadow-black font-weight-bold">
                                                      Coaching en Gestión Pública
                                                  </h5>
                                              </Zoom>
                                              <Zoom left>
                                                  <p>
                                                    El <strong> Coaching </strong>
                                                    es una práctica profesional crecientemente solicitada por personas,
                                                    empresas e instituciones que buscan alcanzar logros
                                                    significativos en su vida personal y/o profesional.
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
                                                          coachingServices.map((item, index)=>{
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
                                                 coaching.map((photo, index)=>{
                                                 return (
                                                            <a className="carousel-item" href="#one!">
                                                                <img src={photo} />
                                                            </a>
                                                 )
                                               })
                                             }
                                           </div>
                                      </Fade>
                                  </div>
                              </div>
                        </div>
                    </article>
                </div>
      </div>
    )
  }
}
export {WebSectionService}
