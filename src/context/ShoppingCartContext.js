import { useState, createContext, useContext } from 'react';
import { ShoppingCart } from '../components/ShoppingCart';
import startingInventory from '../data/default-inventory.json'
import { useLocalStorage } from '../hooks/useLocalStorage';

const ShoppingCartContext = createContext()

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }) {
    const [cartItems, setCartItems] = useLocalStorage('shopping-cart', [])
    const [isOpen, setIsOpen] = useState(false)
    const [inventory, setInventory] = useLocalStorage('inventory', startingInventory)

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    function getQuantity(id) {
        const item = cartItems.find(item => item.id === id)
        return (
            item ? item.quantity : 0
        )
    }

    function incrementItem(id) {
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id) == null) {
                return [...currItems, {id: id, quantity: 1}]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }            
        })
    }

    function decrementItem(id) {
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }            
        })
    }

    function removeFromCart(id) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    function cartQuantity() {
        return cartItems.reduce((acc, currentValue) => acc + currentValue.quantity, 0)
    }
    
    function updateInventory(card) {
        setInventory(currItems => {
            if(currItems.find(item => item.id === card.id)) {
                return [...currItems]
            } else {
                return [...currItems, card]
            }            
        })
    }

    const value = {
        cartItems,
        getQuantity,
        openCart,
        closeCart,
        incrementItem,
        decrementItem,
        removeFromCart,
        cartQuantity,
        inventory,
        updateInventory
    }

    return (
        <ShoppingCartContext.Provider value={value}>
            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )
}