import { Card, Button, ListGroup } from "react-bootstrap"

const CardMotorcycle = ({ motocycle}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Title>{motocycle.reference}</Card.Title>
            <Card.Img variant="top" src={motocycle.image} style={{ width: '100%', height: '200px' }} />
            <Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item>Marca: {motocycle.trademark}</ListGroup.Item>
                    <ListGroup.Item>Modelo: {motocycle.model}</ListGroup.Item>
                    <ListGroup.Item>Precio: {motocycle.price}</ListGroup.Item>
                </ListGroup>
                <Button variant="primary" className="btn-danger me-2 mt-2" data-id={motocycle.id}>Eliminar</Button>
                <Button variant="primary" className="btn-primary mt-2" data-id={motocycle.id}>Editar</Button>
            </Card.Body>
        </Card>
    )
}

export default CardMotorcycle
