import React from 'react'
import { Container, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux'

const HomePage = () => {

    const {userInfo} = useSelector((state) => state.client_auth)


    return (
        <div className=' py-5'>
            <Container className='d-flex justify-content-center'>
                <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
                    <h1 className='text-center mb-4'>MERN Authentication</h1>
                    <p className='text-center mb-4'>
                        This is a boilerplate for MERN authentication that stores a JWT in
                        an HTTP-Only cookie. It also uses Redux Toolkit and the React
                        Bootstrap library
                    </p>
                    {!userInfo && <div className='d-flex'>
                        <LinkContainer to='/Login'>
                        <Button variant='primary'  className='me-3'>
                            Login
                        </Button>
                        </LinkContainer>
                        <LinkContainer to='/register'>
                        <Button variant='secondary'>
                            Register
                        </Button>
                        </LinkContainer>
                    </div>}
                </Card>
            </Container>
        </div>
    )
}

export default HomePage