import { Offcanvas, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
// import inventory from '../data/default-inventory.json'
import { CartItem } from './CartItem';
import { currencyFormatter } from '../utilities/currencyFormatter';

export function ShoppingCart({isOpen}) {
    
    const { closeCart, cartItems, inventory } = useShoppingCart()

    const subtotal = cartItems.reduce((acc, cartItem) => {
            const item = inventory.find(i => i.id === cartItem.id)
            return acc + (item?.price || 0) * cartItem.quantity
            }, 0)

    const shipping = cartItems.length === 0 ? 0 : subtotal >= 50 ? 0 : 4.99

    const total =  subtotal + shipping   

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Your Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={2}>
                    {cartItems.map(item => {
                    return <CartItem key={item.id} id={item.id} quantity={item.quantity} />
                    })}
                    <div className='ms-auto fs-6 text-muted'>Estimated Shipping:{' '}
                    {subtotal >= 50 ? 'FREE' : currencyFormatter(shipping)}</div>
                    {subtotal < 50 && 
                    <div className='ms-auto text-muted fs-6 fst-italic'>Add {currencyFormatter(50 - subtotal)} more to qualify for free shipping!</div>}                    
                    <div className='ms-auto fw-bold fs-5'>
                        Total:{' '} 
                        {currencyFormatter(total)}
                    </div>
                </Stack>            
            </Offcanvas.Body>
            
        </Offcanvas>
    )
}