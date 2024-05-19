import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLocation } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

function MyNavbar({ setTermineRicerca }) {
  const location = useLocation();
  const isCarrelloPage = location.pathname === '/carrello';

  const handleSearchChange = (event) => {
    setTermineRicerca(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={`ContenitoreNav ${isCarrelloPage ? 'hide-navbar' : ''}`}>
      <img className='logo d-flex flex-row bd-highlight' src="./assets/SEStoreLogo.jpg" alt="logo" />
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Nuovo</Nav.Link>
            <NavDropdown title="Franchise" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Dragon Quest</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Kingdom Hearts</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Final Fantasy</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Videogiochi" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Final Fantasy VII Rebirth</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Final Fantasy XIV</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Dragon Quest XI</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Merchandising" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Pre-ordini</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Abbigliamento</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Libri</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Accessori</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='d-flex justify-content-end linkText' href="#action1">Offerte</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearchSubmit}>
            <Form.Control
              type="search"
              placeholder="Cerca un prodotto"
              className="me-2"
              aria-label="Search"
              onChange={handleSearchChange}
            />
            <Button variant="outline-black text-white" type="submit">Ricerca</Button>
            <Button as={Link} to="/utente" className='PulsanteUtente border rounded border border-black text-white bg-black'><i className="bi bi-person"></i></Button>
            <Button className='PulsanteUtente border rounded border border-black text-white bg-black'><i className="bi bi-question-circle"></i></Button>
            <Button as={Link} to="/carrello" className='PulsanteUtente border rounded border border-black text-white bg-black'><i className="bi bi-cart3"></i></Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
