import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Carrello({ prodottiCarrello, rimuoviDalCarrello }) {
  const isEmpty = prodottiCarrello.length === 0;

  return (
    <div className={`carrello-container ${isEmpty ? 'carrello-vuoto' : ''}`}>
      <h1>Il tuo carrello</h1>
      {isEmpty ? (
        <p>Il carrello è vuoto</p>
      ) : (
        <Row>
          {prodottiCarrello.map((prodotto, index) => (
            <Col lg="4" key={index} className="mb-3">
              <Card className="carrello-card" style={{ width: '100%' }}>
                <Card.Img variant="top" src={prodotto.immagine} />
                <Card.Body>
                  <Card.Title>{prodotto.nome}</Card.Title>
                  <Card.Text>
                    Prezzo: {prodotto.prezzo}
                  </Card.Text>
                  <Button variant="danger" onClick={() => rimuoviDalCarrello(index)}>
                    Rimuovi
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default Carrello;
