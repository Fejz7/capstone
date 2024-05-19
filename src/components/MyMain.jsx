import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MyMain({ setProdottiCarrello, termineRicerca }) {
  const prodotti = [
    { nome: 'Final Fantasy VII Rebirth', prezzo: '79,99 €', immagine: '.\\assets\\FF7Rebirth.jpg' },
    { nome: 'Final Fantasy XI Free Trial', prezzo: '0,00 €', immagine: '.\\assets\\FFXIFreeTrial.jpg' },
    { nome: 'Final Fantasy X/X-2', prezzo: '59.99 €', immagine: '.\\assets\\FFX-X2.jpg' },
    { nome: 'Dragon Quest Heroes II', prezzo: '59.99 €', immagine: '.\\assets\\Heroes.jpg' },
    { nome: 'Final Fantasy XIV DawnTrail', prezzo: '39.99 €', immagine: '.\\assets\\FFXIVDawnTrail.jpg' },
    { nome: 'Chrono Cross', prezzo: '29.99 €', immagine: '.\\assets\\CHRONOCROSS.jpg' },
    { nome: 'Final Fantasy VII Remake', prezzo: '69.99 €', immagine: '.\\assets\\FF7Remake.jpg' },
    { nome: 'Final Fantasy XII', prezzo: '49,99 €', immagine: '.\\assets\\FFXII.jpg' },
    { nome: 'Dragon Quest Treasures', prezzo: '59,99 €', immagine: '.\\assets\\DQTreasures.jpg' },
    { nome: 'Nier Automata', prezzo: '39,99 €', immagine: '.\\assets\\Nier.jpg' }
  ];

  const prodottiFiltrati = prodotti.filter(prodotto => 
    prodotto.nome.toLowerCase().includes(termineRicerca.toLowerCase())
  );

  const aggiungiAlCarrello = (prodotto) => {
    setProdottiCarrello((prevProdottiCarrello) => [...prevProdottiCarrello, prodotto]);
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <img style={{ width: '100%', height: '75%' }} src=".\assets\goldenweek.jpg" alt="" />
        </Col>
      </Row>
      <h1>I più venduti</h1>
      <Row>
        {prodottiFiltrati.map((prodotto, index) => (
          <Col lg="4" key={index}>
            <Card className='mb-2' style={{width: "50%"}} >
              <Card.Img variant="top" src={prodotto.immagine} />
              <Card.Body>
                <Card.Title>{prodotto.nome}</Card.Title>
                <Card.Text>
                  Prezzo: {prodotto.prezzo}
                </Card.Text>
                <Button onClick={() => aggiungiAlCarrello(prodotto)} variant="dark">Aggiungi al carrello</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MyMain;
