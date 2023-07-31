import { Card } from 'react-bootstrap';

export function Event(props) {
    const magiCon = {...props}
    return (
        <Card>
            <Card.Img variant='top' src={magiCon.imgUrl} />
            <Card.Body>
                <Card.Title>{magiCon.name}</Card.Title>
                <Card.Text>
                    <div>{magiCon.dates}</div>
                    <div>{magiCon.location}</div>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}