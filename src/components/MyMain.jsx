import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function MyMain() {



 
    return(
        

<Container fluid>

    <Row>
    <Col><img style={{width: '100%', height: '75%'}} src=".\assets\goldenweek.jpg" alt="" /></Col>
    </Row>
    <h1>I più venduti</h1>
    <Row>
        <Col>
    <Card className='mb-2' style={{ width: '18rem' }}>
      <Card.Img variant="top" src=".\assets\FF7Rebirth.jpg" />
      <Card.Body>
        <Card.Title>Final Fantasy VII Rebirth</Card.Title>
        <Card.Text>
          79,99 €
        </Card.Text>
        <Button variant="dark">Aggiungi al carrello</Button>
      </Card.Body>
    </Card>
 </Col>
        <Col><Card className='mb-2' style={{ width: '18rem' }}>
      <Card.Img variant="top" src=".\assets\FFXIFreeTrial.jpg" />
      <Card.Body>
        <Card.Title>Final Fantasy XI Free Trial</Card.Title>
        <Card.Text>
          0,00 €
        </Card.Text>
        <Button variant="dark">Aggiungi al carrello</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card className='mb-2' style={{ width: '18rem' }}>
      <Card.Img variant="top" src=".\assets\FFX-X2.jpg" />
      <Card.Body>
        <Card.Title>Final Fantasy X/X-2</Card.Title>
        <Card.Text>
          59.99 €
        </Card.Text>
        <Button variant="dark">Aggiungi al carrello</Button>
      </Card.Body>
    </Card></Col>
    </Row>
    <Row>
        <Col><Card className='mb-2' style={{ width: '18rem' }}>
      <Card.Img variant="top" src=".\assets\Heroes.jpg" />
      <Card.Body>
        <Card.Title>Dragon Quest Heroes II</Card.Title>
        <Card.Text>
        59.99 €
        </Card.Text>
        <Button variant="dark">Aggiungi al carrello</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card className='mb-2' style={{ width: '18rem' }}>
      <Card.Img variant="top" src=".\assets\FFXIVDawnTrail.jpg" />
      <Card.Body>
        <Card.Title>Final Fantasy XIV DawnTrail</Card.Title>
        <Card.Text>
          39.99 €
        </Card.Text>
        <Button variant="dark">Aggiungi al carrello</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card className='mb-2' style={{ width: '18rem' }}>
      <Card.Img variant="top" src=".\assets\CHRONOCROSS.jpg" />
      <Card.Body>
        <Card.Title>Chrono Cross</Card.Title>
        <Card.Text>
          29.99 €
        </Card.Text>
        <Button variant="dark">Aggiungi al carrello</Button>
      </Card.Body>
    </Card></Col>
    </Row>
    <Row>
        <Col><Card className='mb-2' style={{ width: '18rem' }}>
      <Card.Img variant="top" src=".\assets\FF7Remake.jpg" />
      <Card.Body>
        <Card.Title>Final Fantasy VII Remake</Card.Title>
        <Card.Text>
          69.99 €
        </Card.Text>
        <Button variant="dark">Aggiungi al carrello</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card className='mb-2' style={{ width: '18rem' }}>
      <Card.Img variant="top" src=".\assets\FFXII.jpg" />
      <Card.Body>
        <Card.Title>Final Fantasy XII</Card.Title>
        <Card.Text>
          49,99 €
        </Card.Text>
        <Button variant="dark">Aggiungi al carrello</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card className='mb-2' style={{ width: '18rem' }}>
      <Card.Img variant="top" src=".\assets\DQTreasures.jpg" />
      <Card.Body>
        <Card.Title>Dragon Quest Treasures</Card.Title>
        <Card.Text>
          59,99 €
        </Card.Text>
        <Button variant="dark">Aggiungi al carrello</Button>
      </Card.Body>
    </Card></Col>
    </Row>
    <Row>
    <Col>
    <Card className='mb-2' style={{ width: '18rem' }}>
      <Card.Img variant="top" src=".\assets\Nier.jpg" />
      <Card.Body>
        <Card.Title>Nier Automata</Card.Title>
        <Card.Text>
          39,99 €
        </Card.Text>
        <Button variant="dark">Aggiungi al carrello</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
</Container>
    );}

export default MyMain;














