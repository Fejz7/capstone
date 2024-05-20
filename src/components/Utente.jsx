import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Utente({ setShowNavbar }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setShowNavbar(false);
    return () => {
      setShowNavbar(true);
    }
  }, [setShowNavbar]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem("token", data.token);
        window.location.href = '/';
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className='d-flex flex-column align-items-center justify-content-center' style={{ backgroundColor: "black", height: "100vh" }}>
      <img src="./assets/logomembers.png" alt="logomembers" width={"30%"} />
      <h6 style={{ color: "white" }}>RICEVI DEGLI AGGIORNAMENTI SULLE ULTIME RICOMPENSE DI GIOCO, LE NOVITÀ, I PRODOTTI DI MERCHANDISING E ALTRO ANCORA!</h6>
      <Card className='mt-3' style={{ width: '50%' }}>
        <Card.Body className='d-flex flex-column align-items-center justify-content-center'>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Indirizzo Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Inserisci Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                Non condivideremo mai la tua email con nessun altro.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Inserisci la password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Rimani connesso" />
            </Form.Group>
            <Button className='button-orange-red' type="submit">
              Invio
            </Button>
          </Form>
        </Card.Body>
        <h5>Non hai ancora un account? <Link to="/registrazione">Registrati!</Link></h5>
      </Card>
    </div>
  );
}

export default Utente;
