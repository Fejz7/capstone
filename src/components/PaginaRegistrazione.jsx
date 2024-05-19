import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function PaginaRegistrazione({ setShowNavbar }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setShowNavbar(false);
    return () => {
      setShowNavbar(true);
    };
  }, [setShowNavbar]);

  const handleRegister = async (e) => {
    e.preventDefault();
    
  };

  return (
    <div className='d-flex flex-column align-items-center justify-content-center' style={{ backgroundColor: "black", height: "100vh" }}>
      <img src="./assets/logomembers.png" alt="logomembers" width={"30%"} />
      <h6 style={{ color: "white" }}>RICEVI DEGLI AGGIORNAMENTI SULLE ULTIME RICOMPENSE DI GIOCO, LE NOVITÀ, I PRODOTTI DI MERCHANDISING E ALTRO ANCORA!</h6>
      <Card className='mt-3' style={{ width: '50%' }}>
        <Card.Body className='d-flex flex-column align-items-center justify-content-center'>
          <Form onSubmit={handleRegister}>
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
            <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="email" placeholder="Aggiungi il nome" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicSurname">
        <Form.Label>Cognome</Form.Label>
        <Form.Control type="email" placeholder="Aggiungi il cognome" />
        
      </Form.Group>
            
            <Button className="button-orange-red" type="submit">
              Registrati
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PaginaRegistrazione;
