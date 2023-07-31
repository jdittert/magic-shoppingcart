import attributions from '../data/attributions.json'
import { Row, Col } from 'react-bootstrap'
import { AdEvent } from '../components/AdEvent'
import { AdUltra } from '../components/AdUltra'
import { Link } from 'react-router-dom'

export function Attributions() {
    return (
    <>
        <div className='content-header d-flex align-items-center justify-content-center mb-3'>
            <h1 className='display-2'>Attributions</h1>
        </div>
        <Row>
            <Col className='col-8'>
                <h3 className='border-bottom mb-3'>Photo Credits:</h3>
                <ul className='list-unstyled'>
                    {attributions.map(credit => {
                        return (<li key={credit.id} className='mb-2'>
                            {credit.work} Photo by <Link to={credit.authorLink}>{credit.author}</Link> on <Link to={credit.sourceLink}>{credit.source}</Link>
                            </li>)
                    })}
                </ul>

            </Col>
            <Col>
            <AdUltra />
            <AdEvent />
            </Col>
        </Row>
        </>   
    )     
}