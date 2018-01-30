import React from 'react';
import './css/app.css';
// import { connect } from "redux-zero/react";
import { Row, Col } from 'react-bootstrap';
// import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

export const RegisterProduct = ({successLogin}) => {
    return (
        <section id='registerproduct'>
            <Row className='text-center registerproduct'>
                <h2 >Registro de Productos</h2>

                <Col xs={12} md={8} className='columns'>

                    <form class="form-horizontal" action="/action_page.php">
                        <div className=" form-group form-group-p ">
                            <label className="control-label col-sm-2" for="email">Codigo : </label>
                            <div className="col-sm-8">
                                <input type="email" className="form-control" id="email" placeholder="lp0001" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" for="pwd">Descripción : </label>
                            <div className="col-sm-8">
                                <input type="password" className="form-control" id="pwd" placeholder="Laptop" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" for="pwd">Marca : </label>
                            <div className="col-sm-8">
                                <input type="password" className="form-control" id="pwd" placeholder="LENOVO" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" for="pwd">Modelo :</label>
                            <div className="col-sm-8">
                                <input type="password" className="form-control" id="pwd" placeholder="20244" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" for="pwd">Serie : </label>
                            <div className="col-sm-8">
                                <input type="password" className="form-control" id="pwd" placeholder="CB26427158" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" for="pwd">Cantidad : </label>
                            <div className="col-sm-8">
                                <input type="password" className="form-control" id="pwd" placeholder="5" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" for="pwd">Precio c/u : </label>
                            <div className="col-sm-8">
                                <input type="password" className="form-control" id="pwd" placeholder="100.00" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" for="pwd">Descuento % : </label>
                            <div className="col-sm-8">
                                <input type="password" className="form-control" id="pwd" placeholder="10%" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" for="pwd">Descuento s/. : </label>
                            <div className="col-sm-8">
                                <input type="password" className="form-control" id="pwd" placeholder="10.00" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" for="pwd">Total : </label>
                            <div className="col-sm-8">
                                <input type="password" className="form-control" id="pwd" placeholder="450.00" />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="submit" className="btn btn-default">Guardar</button>
                            </div>
                        </div>
                    </form>
                </Col>
                <Col xs={12} md={4} className='columns'>
                    <form enctype="multipart/form-data" action="" method="post" id="save-product" name="save-product">
                        <div id="result-ajax-product"></div>
                        <div class="form-group">
                            <label for="foto" className="control-label btn btn-default ">Subir imagen</label>
                            <input type="file" name="imagen" id="imagen" />
                            <button type="button" className="btn btn-default" data_dismiss="modal" >Cerrar</button>
                        </div>
                    </form>
                </Col>
            </Row>
        </section>
    );
}