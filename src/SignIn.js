import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';
import { Button, Form, FormControl, FormGroup, Col, Checkbox } from 'react-bootstrap';

export const SignIn =({myBoard, selected}) => {
    return(
        <div>
  <Form horizontal>
    <FormGroup controlId="formHorizontalEmail">
      <Col sm={10}>
        <FormControl type="email" placeholder="Email" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col sm={10}>
        <FormControl type="password" placeholder="Password" />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Checkbox>Remember me</Checkbox>
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button type="submit">Sign in</Button>
      </Col>
    </FormGroup>
  </Form>
        </div>
    )
}