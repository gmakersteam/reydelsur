import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {signUp, signOut} from './actions';
import './css/app.css';

export const SignUp = ({successLogin}) => {
  return (
    <div className='container'>
      {successLogin && <Redirect to="/home"/>
}
      <button className='btn btn-secundary' onClick={signOut}>
        SignOut
      </button>
      <form
        className='demoForm'
        onSubmit=
        { e => { e.preventDefault();
         signUp (
           this.fullNameRef.value, 
           this.emailRef.value, 
           this.passwordRef.value
           ) }
          }>

        <div className='form-group'>
          <div className='input-group'>
            <span className="input-group-addon">
              <i className="fa fa-key fa-fw lock"></i>
            </span>
            <input
              type="text"
              className="form-control inputName"
              placeholder="FullName"
              ref=
              {e => this.fullNameRef = e}/>
          </div>
        </div>
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
              {e => this.emailRef = e}/>
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
              placeholder="Password"
              ref=
              {e => this.passwordRef = e}/>
          </div>
        </div>

        <button type="submit">
          Sign Up!
        </button>
      </form>
    </div>
  )
}