import React, { useState } from "react";
import FormContainer from "../components/FormContainer";
import {Row,Col,Button,Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {  useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message"

import NameValidation from '../Utils/validations/NameValidation'
import PasswordValidation from '../Utils/validations/PasswordValidation'
import EmailValidation from '../Utils/validations/EmailValidation'


function RegisterPage() {

    const {register,handleSubmit , formState: { errors }} = useForm();


    const submitHandler =handleSubmit(data=>{
      console.log(data)
    });


  return (
    <FormContainer>
      <h4>Register</h4>
      <Form className="p-3" onSubmit={submitHandler}>

      <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter Name"
           {...register('name', NameValidation )}
          />
          <ErrorMessage errors={errors} name="name" />
        </Form.Group>

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
             Aleady have an account? <Link to='/login'>Login</Link>
           </Col>
        </Row>

      </Form>
    </FormContainer>
  )
}

export default RegisterPage
