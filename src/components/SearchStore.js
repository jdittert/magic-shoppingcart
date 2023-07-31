import { useRef, useState } from 'react'
import { Stack, Form, Button, Alert } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'

export function SearchStore(props) {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const { updateInventory } = useShoppingCart()
    
    const searchRef = useRef()

    async function searchScryfall(e) {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
            const card = await fetch(`https://api.scryfall.com/cards/named?fuzzy=${searchRef.current.value}`) 
            const cardDetails = await card.json()
            if (cardDetails.oracle_text) {
                const newCard = {
                    id: cardDetails.id,
                    artist: cardDetails.artist,
                    imgUrl: cardDetails.image_uris.normal,
                    name: cardDetails.name,
                    price: +cardDetails.prices.usd,
                    text: cardDetails.oracle_text,
                    type: cardDetails.type_line,
                    manaCost: cardDetails.mana_cost,
                    rarity: cardDetails.rarity,
                    setCode: cardDetails.set 
                }
                updateInventory(newCard)
            } else throw cardDetails.details ? cardDetails.details : 'No cards matched your search.'         
        } catch(error) {
            console.log(error)
            setError(error)
        } finally {
            setLoading(false)
            document.getElementById('card-search').reset()
        }
    }

    return (
        <>
        <Form onSubmit={searchScryfall} disabled={loading} id='card-search'>
            <Stack direction='horizontal' gap={3} className='border border-3 shadow p-2 mb-3'>            
            <Form.Control className='me-auto' placeholder='Search the store...' ref={searchRef} />
            <Button type='submit'>Search</Button>            
            </Stack>
        </Form>
        {error && <Alert className='alert-danger'>{error}</Alert>}             
        </>
    )
}