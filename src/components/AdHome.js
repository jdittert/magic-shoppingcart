import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function AdHome(props) {
    const ad = {...props}

    const colors = ['darkseagreen', 'darksalmon',  'darkorchid']

    const randomColor = colors[Math.floor(Math.random() * 3)]

    return (
        <Link to='/store' style={{textDecoration: 'none'}}>
            <Card style={{backgroundColor: `${randomColor}`, minHeight: '150px'}} className='p-3 text-center mb-3'>
                <Card.Title>
                    Placeholder Ad
                </Card.Title>
                <Card.Text>
                    {ad.text}
                </Card.Text>
            </Card>
        </Link>
        
    )
}
