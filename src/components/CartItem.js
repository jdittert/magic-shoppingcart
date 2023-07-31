import { Stack, Button } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { currencyFormatter } from '../utilities/currencyFormatter';

export function CartItem(props) {
    const order = {...props}
    const {removeFromCart, inventory} = useShoppingCart()
    const item = inventory.find(item => item.id === order.id)
    if (item == null) return null

    return (
        <Stack direction='horizontal' gap={2} className='mb-2 border-bottom p-1'>
            <img src={item.imgUrl} alt='Product' style={{ width: '80px', height: 'auto' }} />
            <Stack>
                <div className='d-flex align-items-baseline' gap={2}>
                    <div>{item.name} <span className='text-muted' style={{fontSize: '.75rem'}}>({item.setCode})</span></div>
                    <div className='ms-auto'><span className='text-muted' style={{fontSize: '.75rem'}}>Qty:  </span>{order.quantity}</div>
                </div>                
                <div>{currencyFormatter(item.price * order.quantity)}</div>
                <Button onClick={() => removeFromCart(order.id)} variant='danger' size='sm' className='ms-auto'>Remove</Button>
            </Stack>
            
            
        </Stack>
    )
}