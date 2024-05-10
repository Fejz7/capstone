import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import 'bootstrap-icons/font/bootstrap-icons.min.css';
function MyNavbar() {
  return (
    <div className='ContenitoreNav '>
      <img className='logo d-flex flex-row bd-highlight' src="./assets/SEStoreLogo.jpg" alt="logo" />
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
        {/* <Navbar.Collapse id="navbarScroll"> */}
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='' href="#action1">Nuovo</Nav.Link>
            
            <NavDropdown className='' title="Franchise" id="navbarScrollingDropdown">
              <NavDropdown.Item className='' href="#action3">Dragon Quest</NavDropdown.Item>
              <NavDropdown.Item className='' href="#action4">
                Kingdom Hearts
              </NavDropdown.Item>
              
              <NavDropdown.Item href="#action5">
                Final Fantasy
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='' title="Videogiochi" id="navbarScrollingDropdown">
              <NavDropdown.Item className='' href="#action3">Final Fantasy VII Rebirth</NavDropdown.Item>
              <NavDropdown.Item className='' href="#action4">
                Final Fantasy XIV
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Dragon Quest XI
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='' title="Merchandising" id="navbarScrollingDropdown">
              <NavDropdown.Item className='' href="#action3">Pre-ordini</NavDropdown.Item>
              <NavDropdown.Item className='' href="#action4">
                Abbigliamento
              </NavDropdown.Item>
              
              <NavDropdown.Item href="#action5">
                Libri
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Accessori
              </NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link className='d-flex justify-content-end linkText' href="#action1">Offerte</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Cerca un prodotto"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-black text-white">Ricerca</Button>
      <Button href='Utente' className='PulsanteUtente border rounded border border-black text-white bg-black'><i class="bi bi-person"></i></Button>
      <Button className='PulsanteUtente border rounded border border-black text-white bg-black'><i class="bi bi-question-circle"></i></Button>
      <Button className='PulsanteUtente border rounded border border-black text-white bg-black'><i class="bi bi-cart3"></i></Button>
          </Form>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
    </div>
  );
}

export default MyNavbar;