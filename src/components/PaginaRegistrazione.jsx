import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function PaginaRegistrazione({ setShowNavbar }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setShowNavbar(false);
    return () => {
      setShowNavbar(true);
    };
  }, [setShowNavbar]);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, surname, email, password, role: "user" }),
      });

      if (response.ok) {
        navigate('/utente');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <div className='d-flex flex-column align-items-center justify-content-center' style={{ backgroundColor: "black", height: "100vh" }}>
      <img src="./assets/logomembers.png" alt="logomembers" width={"30%"} />
      <h6 style={{ color: "white" }}>RICEVI DEGLI AGGIORNAMENTI SULLE ULTIME RICOMPENSE DI GIOCO, LE NOVITÀ, I PRODOTTI DI MERCHANDISING E ALTRO ANCORA!</h6>
      <Card className='mt-3' style={{ width: '50%' }}>
        <Card.Body className='d-flex flex-column align-items-center justify-content-center'>
          <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Nome</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Inserisci il nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSurname">
              <Form.Label>Cognome</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Inserisci il cognome"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </Form.Group>

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

            <Button className='button-orange-red' type="submit">
              Registrati
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PaginaRegistrazione;
