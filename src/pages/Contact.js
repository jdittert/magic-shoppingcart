import { Row, Col } from 'react-bootstrap'
import { AdEvent } from '../components/AdEvent'
import { AdUltra } from '../components/AdUltra'

export function Contact() {
    return (
        <>
        <div className='content-header d-flex align-items-center justify-content-center mb-3'>
            <h1 className='display-2'>Contact MagiStore</h1>
        </div>
        <Row>
            <Col className='col-8'>
                <h3 className='border-bottom mb-3'>Customer Support Emails:</h3>
                <ul className='list-unstyled'>
                    <li>Order Support: support@magistore.test</li>
                    <li>Ultra Support: ultra@magistore.test</li>
                    <li>Event Support: events@magistore.test</li>
                    <li>Buylist Inquries: buylist@magistore.test</li>
                </ul>
                <h3 className='border-bottom mb-3'>Store Location:</h3>
                <div>MagiStore Inc.</div>
                <div>123 Street Name</div>
                <div>City, ST 12345</div>
                <div>1-800-555-5555</div>

            </Col>
            <Col>
            <AdUltra />
            <AdEvent />
            </Col>
        </Row>
        </>        
    )
}