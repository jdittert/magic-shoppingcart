import { Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export function Ultra() {
    return (
        <>
        
            
            <div className='events-header d-flex align-items-center justify-content-center mb-3'>
            <h1 className='display-1'>MagiStore Ultra</h1>
            </div>
            <Row>
                <Col style={{minHeight: '50vh'}}>
                    <h3 className='mb-3'>Level up your game with MagiStore ULTRA!</h3>
                    <p className='lead'>ULTRA members have access to these exciting benefits:</p>
                    <ul className='lh-lg'>
                        <li>Access to <Link to='/content'>exclusive articles</Link> written by the game's top professional players.</li>
                        <li>Free shipping on all <Link to='/store'>orders</Link>.</li>
                        <li>10% off entry fees to all live <Link to='/events'>events</Link>.</li>
                        <li>Priority registration for our Premier Invitational Events.</li>
                        <li>2% extra on any buylist order.</li>
                    </ul>
                    <p>Access to ULTRA starts at just $6.99 per month (billed annually).</p>
                </Col>
                <Col className='ms-auto'>
                <Card>
                    <Card.Header className='bg-info'>ULTRA Pricing</Card.Header>
                    <Card.Body>
                        <Card.Text>$83.88 / year (best value!)</Card.Text>
                        <Card.Text>$9.99 / month</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>        
        </>
    )
}