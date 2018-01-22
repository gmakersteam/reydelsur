import React, {Component} from 'react';
import './css/app.css';

export const RegisterSale  = () => {
    return (
        <section>
            <SellerData />
            <ClientData />
        </section>
    )
}
const SellerData = () => {
    return (
        <div className='row'>
        <div className='col-md-6'>
            <label for="basic-url">Fecha</label>
            <div class="input-group">
                <input type="date" class="form-control" placeholder="Search for..." />
            </div>
            </div>
            <div className='col-md-6'>
            <label for="basic-url">Ciudad / Zona</label>
             <div class="input-group">
                <span class="input-group-btn">
                    <button class="btn btn-default" type="button">Go!</button>
                </span>
                <input type="text" class="form-control" placeholder="Search for..." />
             </div>
            </div>
            <div className='col-md-6'>
            <label for="basic-url">Nro Contrato</label>
             <div class="input-group">
                <input type="text" class="form-control" placeholder="Search for..." />
             </div>
            </div>
            <div className='col-md-6'>
            <label for="basic-url">Nombre del Vendedor</label>
             <div class="input-group">
                <input type="text" class="form-control" placeholder="Search for..." />
             </div>
            </div>
        </div>
    )
}
const ClientData = () =>{
    return (
        <div className='row'>
            <div className='col-md-6'>
            <label for="basic-url">Nombre del Cliente</label>
             <div class="input-group">
                <input type="text" class="form-control" placeholder="Search for..." />
             </div>
            </div>
            <div className='col-md-6'>
            <label for="basic-url">N° DNI</label>
             <div class="input-group">
                <input type="text" class="form-control" placeholder="Search for..." />
             </div>
            </div>
            <div className='col-md-6'>
            <label for="basic-url">N° Celular</label>
             <div class="input-group">
                <input type="tel" class="form-control" placeholder="Search for..." />
             </div>
            </div>
            <div className='col-md-6'>
            <label for="basic-url">Direccion</label>
             <div class="input-group">
                <input type="text" class="form-control" placeholder="Search for..." />
             </div>
            </div>
        </div>
    )
}