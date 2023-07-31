import { Row, Col, Card } from 'react-bootstrap';
import articles from '../data/articles.json'
import events from '../data/events.json'
import ads from '../data/ads.json'
import { ArticleCardFree } from '../components/ArticleCardFree';
import { ArticleCardUltra } from '../components/ArticleCardUltra';
import { Event } from '../components/Event';
import { AdHome } from '../components/AdHome';

export function Home() {
  
  return (
    <>
    <div className='home-header d-flex flex-column justify-content-center align-items-center mb-3'>
      <h1 className='display-1'>MagiStore</h1>
      <h6 className='text-muted'>The internet's premier fake Magic: the Gathering store</h6>
    </div>
    <Row>
      <Col className='col-4'>
        <Card>
        <Card.Header className='bg-primary text-center mb-2 text-white fw-bold fs-4'>SHOP</Card.Header>
        <Card.Body className='p-0'>
            {ads.map(ad => {
              return (
              <AdHome {...ad} key={ad.id} />
              )
            })}
          </Card.Body>
        </Card>
      </Col>
      <Col className='col-4'>
        <Card>
        <Card.Header className='bg-primary text-center mb-2 text-white fw-bold fs-4'>EVENTS</Card.Header>
        <Card.Body className='p-0'>
            {events.map(event => {
              return (
              <Event {...event} key={event.id} />
              )
            })}
          </Card.Body>
        </Card>
      </Col>
      <Col className='col-4 p-0'>
        <Card>
          <Card.Header className='bg-primary text-center mb-2 text-white fw-bold fs-4'>CONTENT</Card.Header>
          <Card.Body className='p-0'>
            {articles.map(article => {
              return (
              article.free === true ? <ArticleCardFree {...article} key={article.id} /> :
              <ArticleCardUltra {...article} key={article.id} />
              )
            })}
          </Card.Body>
        </Card>
      </Col>
      
    </Row>
    </>
  );
}


