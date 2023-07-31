import articles from '../data/articles.json'
import { ArticleCardFree } from '../components/ArticleCardFree';
import { ArticleCardUltra } from '../components/ArticleCardUltra';
import { Col, Row } from 'react-bootstrap';
import { AdUltra } from '../components/AdUltra'
import { AdEvent } from '../components/AdEvent';

export function Content() {

    const freeArticles = articles.filter(article => article.free === true)
    const ultraArticles = articles.filter(article => article.free === false)
    
    return (
        <>
        <div className='content-header d-flex align-items-center justify-content-center mb-3'>
            <h1 className='display-2'>MagiStore Articles</h1>
        </div>
        <div className='container'>
            <Row>
                <Col className='col-5'>
                {freeArticles.map(article => {
                return <ArticleCardFree {...article} key={article.id} />
                })}
                </Col>
                <Col className='col-5'>
                {ultraArticles.map(article => {
                return <ArticleCardUltra {...article} key={article.id} />
                })}
                </Col>
                <Col>
                <AdUltra />
                <AdEvent />
                </Col> 
            </Row>            
        </div>   
        
        </>
    )
}