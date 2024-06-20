import React, { useState,useEffect } from "react";
import FormContainer from "../components/FormContainer";
import {Row,Col,Button,Form} from 'react-bootstrap'
import {Link,useNavigate} from 'react-router-dom'
import {  useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message"
import {useDispatch,useSelector} from 'react-redux'
import PasswordValidation from '../Utils/validations/PasswordValidation'
import EmailValidation from '../Utils/validations/EmailValidation'
import { useLoginMutation } from "../slices/usersApiSlices";
import { setCredentials } from "../slices/authSlices";
import { toast } from "react-toastify";
function LoginPage() {


  const {register,handleSubmit , formState: { errors }} = useForm();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [login, {isLoading}] = useLoginMutation()
  const {userInfo} = useSelector((state)=>state.client_auth)

  useEffect(()=>{
    if(userInfo){
      navigate('/')
    }
  },[navigate,userInfo])

  const  submitHandler  = handleSubmit (async data=>{
    const {email, password } =data
    try {
      const response = await login({email,password}).unwrap()
      console.log(response)
      dispatch(setCredentials({...response}))
      navigate('/')
    } catch (error) {
      toast.error(error.data.error)
    }
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
