import { Row, Col, Alert } from 'react-bootstrap'
import { StoreItem } from '../components/StoreItem'
import { SearchStore } from '../components/SearchStore'
import { useShoppingCart } from '../context/ShoppingCartContext'

export function Store() {
    
    const { inventory } = useShoppingCart()

    return (
        <>
        <div className='content-header d-flex align-items-center justify-content-center mb-3'>
            <h1 className='display-2'>Magic Singles</h1>
        </div>
        <Alert className='alert-info text-center'>MagiStore ULTRA members get free shipping on every order! No minimums!</Alert>
        <SearchStore />        
        <h2>Featured Products</h2>
        <Row xs={1} md={2} lg={3} className='gy-3'>            
            {inventory.map(item => (
                <Col key={item.id} style={{maxWidth: '300px'}}>
                    <StoreItem {...item} />
                </Col>
            )).reverse()}
        </Row>
        </>
    )
}