/* eslint-disable react-hooks/exhaustive-deps */
import { Card, Button } from 'react-bootstrap';
import { currencyFormatter } from '../utilities/currencyFormatter';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { useState, useEffect } from 'react';

export function StoreItem(props) {
    const item = {...props}
    const [free, setFree] = useState(false)
    const { getQuantity, incrementItem, decrementItem, removeFromCart } = useShoppingCart()

    const quantity = getQuantity(item.id)

    useEffect(() => {
        if (item.price === 0) setFree(true)
    }, [])

    return (
        <Card>
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='mb-4'>{item.name}</Card.Title>
                <div className='d-flex flex-column align-items-center'>
                    <Card.Img src={item.imgUrl} style={{width: '200px', height: 'auto'}} className='mb-4' alt='Card picture' />
                    <Card.Text>{currencyFormatter(item.price)} {free ? <span className='fst-italic'>(Digital version)</span> : ''}</Card.Text>
                    {quantity === 0 ? 
                    <Button className='w-100' onClick={() => incrementItem(item.id)} disabled={free}>Add to Cart</Button> :
                    <div className='d-flex align-items-center flex-column' style={{ gap: '.5rem' }}>
                        <div className='d-flex align-items-center justify-content-center' style={{ gap: '.5rem' }}>
                            <Button onClick={() => decrementItem(item.id)}>-</Button>
                            <div><span>{quantity}</span></div>
                            <Button onClick={() => incrementItem(item.id)}>+</Button>
                        </div>
                        <Button variant='danger' size='sm' onClick={() => removeFromCart(item.id)}>Remove</Button>
                    </div>}
                </div>
            </Card.Body>
        </Card>
    )
}