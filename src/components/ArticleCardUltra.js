import { Link } from 'react-router-dom'
import { Card, Stack } from 'react-bootstrap'

export function ArticleCardUltra(props) {
    const article = {...props}
    
    return (
        <Link to='/article-ultra' style={{textDecoration: 'none'}}>
            <Card style={{maxWidth: '500px'}} className='mb-3'>
                <Card.Header className='bg-info text-end'>ULTRA</Card.Header>
                <Card.Body>
                    <Stack direction='horizontal' className='mb-2'>
                        <div>
                            <Card.Title>{article.title}</Card.Title>
                            <Card.Subtitle className='mb-2 text-muted'>{article.author} - {article.date}</Card.Subtitle>
                        </div>
                        <img src={article.authorImgUrl} alt='Author' className='ms-auto' style={{height: '60px', width: 'auto'}} />
                    </Stack>                    
                    <Card.Text>{article.summary}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

