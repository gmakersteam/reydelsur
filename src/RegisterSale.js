import React, {Component} from 'react';
import './css/app.css';

export const RegisterSale  = () => {
    return (
        <div></div>
    )
}
const ClientData = ( ) => {
    return (
        <Form >
        <FormGroup controlId="formInlineDate">
			<ControlLabel>Fecha de Venta</ControlLabel>{' '}
			<FormControl type="date"  />
		</FormGroup>{' '}

		<FormGroup controlId="formInlineZona">
			<ControlLabel>Ciudad / Zona</ControlLabel>{' '}
			<FormControl type="text"  />
		</FormGroup>{' '}
        <FormGroup controlId="formInlineNro">
			<ControlLabel>Numero de Contrato</ControlLabel>{' '}
			<FormControl type="text"  />
		</FormGroup>{' '}
        <FormGroup controlId="formInlineVendedor">
			<ControlLabel>Cod. Vendedor</ControlLabel>{' '}
			<FormControl type="text"  />
		</FormGroup>{' '}
        <hr/>
        <FormGroup controlId="formInlineName">
			<ControlLabel>Nombre Completo del Cliente</ControlLabel>{' '}
			<FormControl type="text"  />
		</FormGroup>{' '}
        <FormGroup controlId="formInline">
			<ControlLabel>Ciudad / Zona</ControlLabel>{' '}
			<FormControl type="text"  />
		</FormGroup>{' '}
        <FormGroup controlId="formInlineZona">
			<ControlLabel>Ciudad / Zona</ControlLabel>{' '}
			<FormControl type="text"  />
		</FormGroup>{' '}
         <FormGroup controlId="formInlineZona">
			<ControlLabel>Ciudad / Zona</ControlLabel>{' '}
			<FormControl type="text"  />
		</FormGroup>{' '}
        
        </Form>
    )
}