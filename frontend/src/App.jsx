import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <>
      <Header/>
      <Container className='my-2'>
        <Outlet />
      </Container>
    </>
  )
}

export default App
