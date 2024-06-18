import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {

  const {userInfo} = useSelector((state) => state.client_auth)
  console.log(userInfo)

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">MERN Auth</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {userInfo ? (
                <>
                   <NavDropdown title={userInfo.email} id="username">
                    <LinkContainer to='/profile'>
                     <NavDropdown.Item>
                      Profile
                     </NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item>
                      Logout
                    </NavDropdown.Item>
                   </NavDropdown>
                </>
              ) : (
                <>
                  <LinkContainer to='/login'>
                    <Nav.Link >
                      <FaSignInAlt /> LogIn
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/register'>
                    <Nav.Link>
                      <FaSignOutAlt /> Register
                    </Nav.Link>
                  </LinkContainer>
                </>
              )}

            </Nav>
          </Navbar.Collapse>
        </Container >
      </Navbar >
    </header >
  );
};

export default Header;
