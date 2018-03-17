"use strict";
import React from "react";
import $ from "jquery";
import "materialize-css";


class WebSectionService extends React.Component {

  constructor(props){
      super(props);
  }
  componentDidMount(){
      $('.modal').modal();
  }

  render (){
    return (
      <article className="post">
            <div className="post-main">
                <a className="post-btn-modal modal-trigger" href="#modal1">
                    <img className="" src="http://footage.framepool.com/shotimg/qf/604230352-expedicion-despacho-rampa-de-carga-despachar-inventario.jpg" />
                </a>
                <div id="modal1" className="modal modal-fixed-footer">
                    <div className="modal-content">
                     <h4>Servicio de Inventario físico</h4>
                     <p>Tasación, Valorización y Conciliación Contable de Activos Fijos</p>
                    </div>
                    <div className="modal-footer">
                      <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                </div>
            </div>

            <div className="post-second">
                <div className="post-second-third">
                    <a className="post-btn-modal modal-trigger" href="#modal2">
                        <img className="" src="http://footage.framepool.com/shotimg/qf/604230352-expedicion-despacho-rampa-de-carga-despachar-inventario.jpg" />
                    </a>
                    <div id="modal2" className="modal modal-fixed-footer">
                        <div className="modal-content">
                         <h4>Servicio de Inventario físico</h4>
                         <p>Tasación, Valorización y Conciliación Contable de Activos Fijos</p>
                        </div>
                        <div className="modal-footer">
                          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
                        </div>
                    </div>
                </div>
                <div className="post-second-fourth">
                    <a className="post-btn-modal modal-trigger" href="#modal3">
                        <img className="" src="http://footage.framepool.com/shotimg/qf/604230352-expedicion-despacho-rampa-de-carga-despachar-inventario.jpg" />
                    </a>
                    <div id="modal3" className="modal modal-fixed-footer">
                        <div className="modal-content">
                         <h4>Servicio de Inventario físico</h4>
                         <p>Tasación, Valorización y Conciliación Contable de Activos Fijos</p>
                        </div>
                        <div className="modal-footer">
                          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
                        </div>
                    </div>
                </div>
            </div>
      </article>
    )
  }

}
export {WebSectionService}
