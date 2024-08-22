import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import logoimg from './images/logo.png';

const Navbars = () => {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand 
          onClick={() => navigate("home")} 
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          <img src={logoimg} height="40px" width="40px" alt="Logo" />
          <span style={{ marginLeft: "10px" }}>Student Management System</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto">
            <Nav.Link className='navcomp' onClick={() => navigate("home")}>Home</Nav.Link>
            <Nav.Link className='navcomp' onClick={() => navigate("insert")}>Insert</Nav.Link>
            <Nav.Link className='navcomp' onClick={() => navigate("display")}>Display</Nav.Link>
            <Nav.Link className='navcomp' onClick={() => navigate("update")}>Update</Nav.Link>
            <Nav.Link className='navcomp' onClick={() => navigate("search")}>Search</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
