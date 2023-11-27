import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cars({x}) {
    
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={x.image} />
    <Card.Body>
      <Card.Title>{x.brand}</Card.Title>
      <Card.Text>
        {x.type}
      </Card.Text>
      <Button variant="primary">{x.motor}</Button>
    </Card.Body>
  </Card>
  );
}

export default Cars;