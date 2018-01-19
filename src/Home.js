import React, {Component} from 'react';
// import { Button, Form, FormControl, FormGroup, Col, Checkbox } from
// 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import {signOut} from './actions'
export const Home = ({successLogin, user}) => {
    return (
        <div className="App">
            {!successLogin && <Redirect to="/sign_in"/>
}
            <button className='btn btn-secundary' onClick={signOut}>
                SignOut
            </button>
            <Redirect to="/register_sale"/>
        </div>
    );
}