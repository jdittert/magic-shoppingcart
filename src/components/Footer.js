import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <>       
            <div className='bg-secondary text-white d-flex justify-content-center align-items-center mb-2 mt-4' style={{minHeight: '25px'}}>
            
            </div>
            <Container className='mb-3'>
                <Row>
                    <Col>
                    <p className='fw-bold'>About</p>
                    <p><Link to='/attributions'>Attributions</Link></p>
                    <p><Link to={{pathname: 'https://github.com/jdittert/magic-shoppingcart'}}>Github</Link></p>
                    </Col>
                    <Col>
                    <p className='fw-bold'>Links</p>
                    <p>
                        <Link to='/store'>Store</Link>
                    </p>
                    <p>
                        <Link to='/content'>Content</Link>
                    </p>
                    <p>
                        <Link to='/events'>Events</Link>
                    </p>
                    <p>
                        <Link to='/ultra'>ULTRA</Link>
                    </p>
                    <p>
                        <Link to='/contact'>Contact</Link>
                    </p>
                    </Col>
                    <Col>
                    <p className='fw-bold'>Retail Location:</p>
                    <div>MagiStore Inc.</div>
                    <div>123 Street Name</div>
                    <div>City, ST 12345</div>
                    <div>1-800-555-5555</div>
                    </Col>
                    <Col>
                    <p className='fw-bold'>Customer Support</p>
                    <p>support@magistore.test</p></Col>
                </Row>
            </Container>
        </>
    )
}