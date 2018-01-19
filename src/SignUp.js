import React, { Component } from 'react';
import { Button, Form, FormControl, FormGroup, Col, Checkbox } from 'react-bootstrap';

export const SignUp =({myBoard, selected}) => {
    return(
        <div>
  <Form horizontal>
    <FormGroup controlId="formHorizontalFirst">
      <Col sm={5}>
        <FormControl type="text" placeholder="First name" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalLast">
      <Col sm={5}>
        <FormControl type="text" placeholder="Last name" />
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalEmail">
      <Col sm={5}>
        <FormControl type="email" placeholder="Email" />
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalPassword">
      <Col sm={5}>
        <FormControl type="password" placeholder="Password" />
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalPassword2">
      <Col sm={5}>
        <FormControl type="password" placeholder="Confirm password" />
      </Col>
    </FormGroup>
    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button type="submit">
          Sign Up
        </Button>
      </Col>
    </FormGroup>
    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button type="button">
          Sign In
        </Button>
      </Col>
    </FormGroup>
  </Form>
        </div>
    )
}