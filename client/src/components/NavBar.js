import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { link } from 'react-router-dom';



function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id="navbar">
      <Container>
        <Navbar.Brand href="#home" id="reelReview">ReelReview</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/superhero">Superhero</Nav.Link>
            <Nav.Link as={Link} to="/sciFi">SciFi</Nav.Link>
            <Nav.Link as={Link} to="/drama">Drama</Nav.Link>
            <Nav.Link as={Link} to="/comedy">Comedy</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;