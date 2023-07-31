import '../styles/custom.css'
import events from '../data/events.json'
import { Event } from '../components/Event'
import { Col, Row, Alert } from 'react-bootstrap'

export function Events() {
    return (
        <>
        <div className='events-header d-flex align-items-center justify-content-center mb-3' 
        style={{backgroundImage: 'url(./assets/images/headers/events.jpg)', backgroundSize: 'cover', backgroundBlendMode: 'multiply'}}>     
            
                 <div style={{backdropFilter: 'blur(8px)'}}>
                     <h1 className='display-1 text-white'>Events Page</h1> 
                 </div>           
        </div>
        <Alert className='alert-info text-center'>MagiStore ULTRA members get 10% off entry fees to all live events!</Alert>
        <Row xs={1} md={2} lg={3}>
        {events.map(event => (
            <Col key={event.id} className='justify-content-center'>
                <Event {...event} />
            </Col>            
        ))}
        </Row>        
        </>
    )
}