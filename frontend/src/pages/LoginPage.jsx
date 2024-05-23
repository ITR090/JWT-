import React, { useState } from "react";
import FormContainer from "../components/FormContainer";
import {Row,Col,Button,Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {  useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message"

import PasswordValidation from '../Utils/validations/PasswordValidation'
import EmailValidation from '../Utils/validations/EmailValidation'


function LoginPage() {


  const {register,handleSubmit , formState: { errors }} = useForm();


  const submitHandler =handleSubmit(data=>{
    console.log(data)
  });

  return (
    
    <FormContainer>
      <h4>Login</h4>
      <Form className="p-3" onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter Eamil"
           {...register('email',EmailValidation)}
          />
          <ErrorMessage errors={errors} name="email" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Enter Password"
            {...register('password',PasswordValidation)}
          />
          <ErrorMessage errors={errors} name="password" />
        </Form.Group>
        <Button type="submit" variant='primary' className="mt-3">Login</Button>
        <Row className='py-3'>
           <Col>
             New User? <Link to='/register'>Register</Link>
           </Col>
        </Row>
      </Form>
    </FormContainer>
    
  );
}

export default LoginPage;
