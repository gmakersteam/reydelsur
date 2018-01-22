import React, {Component} from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import {signIn, signOut} from './actions'
import './css/app.css';
// import { Button, Form, FormControl, FormGroup, Col, Checkbox } from
// 'react-bootstrap';

export const SignIn = ({successLogin, SignUp}) => {
  return (
    <div className="containersign">
      {successLogin && <Redirect to="/home"/>
}
      {/* <button className='btn btn-secundary' onClick={signOut}>
        SignOut
      </button> */}
      <h1>
        ADMIN
      </h1>
      <form
        className='demoForm'
        onSubmit=
        { e => { e.preventDefault(); signIn ( this.emailInputRef.value, this.passwordInputRef.value) } }>
        <div className='form-group'>
          <div className='input-group'>
            <span className="input-group-addon">
              <i className="fa fa-key fa-fw lock"></i>
            </span>
            <input
              type="email"
              className="form-control inputName"
              placeholder="Email"
              ref=
              { e => this.emailInputRef = e}/>
          </div>
        </div>
        <div className='form-group'>
          <div className='input-group'>
            <span className="input-group-addon">
              <i className="fa fa-key fa-fw lock"></i>
            </span>
            <input
              type="password"
              className="form-control inputName"
              name="password"
              placeholder="password"
              ref=
              { e => this.passwordInputRef = e}/>
          </div>
        </div>

        <button type="submit">
          Login
        </button>
        <NavLink to={"/sign_up"}>Create new account</NavLink>
      </form>
    </div>
  )
}