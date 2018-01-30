import React, {Component} from 'react';
import './css/app.css';

export const RegisterSale = ({successLogin}) => {
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
            <div className="input-group">
                <input type="date" className="form-control" placeholder="Search for..." />
            </div>
            </div>
            <div className='col-md-6'>
            <label for="basic-url">Ciudad / Zona</label>
             <div className="input-group">
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button">Go!</button>
                </span>
                <input type="text" className="form-control" placeholder="Search for..." />
             </div>
            </div>
            <div className='col-md-6'>
            <label for="basic-url">Nro Contrato</label>
             <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for..." />
             </div>
            </div>
            <div className='col-md-6'>
            <label for="basic-url">Nombre del Vendedor</label>
             <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for..." />
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
             <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for..." />
             </div>
            </div>
            <div className='col-md-6'>
            <label for="basic-url">N° DNI</label>
             <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for..." />
             </div>
            </div>
            <div className='col-md-6'>
            <label for="basic-url">N° Celular</label>
             <div className="input-group">
                <input type="tel" className="form-control" placeholder="Search for..." />
             </div>
            </div>
            <div className='col-md-6'>
            <label for="basic-url">Direccion</label>
             <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for..." />
             </div>
            </div>
        </div>
    )
}

const SaleDetails = () => {
    return(
        <div>
            <div className='col-md-6'>
            <label for="basic-url">Direccion</label>
             <div class="input-group">
                <input type="text" class="form-control" placeholder="Search for..." />
             </div>
            </div>
        </div>
    )
}
 