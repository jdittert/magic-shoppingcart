import { useParams } from 'react-router-dom'
import articles from '../data/articles.json'
import { Row, Stack, Col } from 'react-bootstrap'
import { AdUltra } from '../components/AdUltra'
import { AdEvent } from '../components/AdEvent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faDiscord, faReddit } from '@fortawesome/free-brands-svg-icons'

export function ArticleContentFree() {
    const  { id } = useParams()

    const article = articles.find(article => article.id === +id)

    return (
        <>
        <Row>
            <Col className='col-8'>
        <Stack direction='horizontal' className='align-items-start'>
            <div>
                <h1>{article ? article.title : 'Title'}</h1>
                <div className='d-flex gap-2 mb-3'>
                <div className='text-muted border-end pe-2'>{article ? article.author : 'Author Name'}</div>
                <div className='text-muted'>{article.date}</div>                
                </div>
                <div className='d-flex gap-2 mb-4'>
                    <FontAwesomeIcon icon={faTwitter} /> 
                    <FontAwesomeIcon icon={faFacebook} /> 
                    <FontAwesomeIcon icon={faDiscord} /> 
                    <FontAwesomeIcon icon={faReddit} /> 
                </div>
            </div>
            <img src={`.${article.authorImgUrl}`} alt='Author' className='ms-auto justify-content-start' style={{height: '100px', width:'auto'}} />
        </Stack>
        
        <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Imperdiet sed euismod nisi porta lorem. 
            Morbi tristique senectus et netus et. Nunc lobortis mattis aliquam faucibus purus. 
            Nulla posuere sollicitudin aliquam ultrices sagittis orci. 
            Suspendisse in est ante in nibh mauris cursus mattis molestie. 
            Commodo elit at imperdiet dui accumsan sit amet. In hendrerit gravida rutrum quisque non tellus. 
            Turpis in eu mi bibendum neque egestas congue quisque egestas. 
            Massa tempor nec feugiat nisl pretium fusce id velit ut. Tortor aliquam nulla facilisi cras fermentum.
        </p>
        <p>
        Dui vivamus arcu felis bibendum ut tristique. Tortor dignissim convallis aenean et tortor at risus. 
        Sit amet massa vitae tortor condimentum lacinia quis vel. Dolor sit amet consectetur adipiscing elit ut aliquam. 
        Diam maecenas sed enim ut sem viverra. Vulputate ut pharetra sit amet aliquam. Mollis nunc sed id semper risus in. 
        Morbi tristique senectus et netus et malesuada fames ac. Diam quam nulla porttitor massa id neque aliquam. 
        Faucibus nisl tincidunt eget nullam non nisi. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. 
        </p>
        <p>
        Ipsum a arcu cursus vitae congue mauris rhoncus aenean. Blandit volutpat maecenas volutpat blandit aliquam. 
        Eget felis eget nunc lobortis mattis aliquam faucibus purus. Nec feugiat nisl pretium fusce id velit ut tortor. 
        Tincidunt tortor aliquam nulla facilisi. Sed pulvinar proin gravida hendrerit lectus a. 
        Porta nibh venenatis cras sed felis eget velit aliquet. Ut porttitor leo a diam sollicitudin tempor id. Nec dui nunc mattis enim. 
        Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Magna etiam tempor orci eu lobortis elementum nibh. 
        Augue mauris augue neque gravida in fermentum et. Justo laoreet sit amet cursus.
        </p>
        </Col>
        <Col>
        <AdUltra />
        <AdEvent />
        </Col>
        </Row>
        </>
    )
}